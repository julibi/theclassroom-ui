import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { ethers } from "ethers";
import TelegramBot from "node-telegram-bot-api";
import ABI from "../../src/abis/TCR.json";
import { TCR_DEV } from "@/constants";
import { truncateAddress } from "@/utils/truncateAddress";

const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === "PROD";
const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN as string;
const CHATID = process.env.NEXT_PUBLIC_CHATID as string;
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
// const contractAddress = isProd ? "" : TCR_DEV;
// const alchemyWebSockets = isProd
//   ? process.env.NEXT_PUBLIC_ALCHEMY_WEBSOCKET_PROD_URL
//   : process.env.NEXT_PUBLIC_ALCHEMY_WEBSOCKET_DEV_URL;
const contractAddress = TCR_DEV;
const alchemyWebSockets = process.env.NEXT_PUBLIC_ALCHEMY_WEBSOCKET_DEV_URL;

const handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    const provider = new ethers.providers.WebSocketProvider(
      alchemyWebSockets as string
    );
    const contract = new ethers.Contract(contractAddress, ABI, provider);
    contract.on("Written", (account, tokenId, character, index) => {
      console.log({ account, tokenId, character, index });
      bot.sendMessage(
        CHATID,
        `Account ${truncateAddress(
          account
        )} wrote text for character ${character} with NFT #${tokenId}. It is the ${index}th text of TheRetreat.`
      );
    });

    contract.on("CharacterSet", (account, characterId, name) => {
      console.log({ account, characterId, name });
      bot.sendMessage(
        CHATID,
        `Account ${truncateAddress(
          account
        )} just setup a characterId ${characterId}, name: ${name}.`
      );
    });
    return { statusCode: 200, body: "Great" };
  } catch (e) {
    return { statusCode: 500, body: "Something went wrong." };
  }
};

export { handler };
