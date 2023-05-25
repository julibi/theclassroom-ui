import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { ethers } from "ethers";
import TelegramBot from "node-telegram-bot-api";
import ABI from "../../src/abis/MoonpageCollection.json";

const handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    console.log("Yay, webhook was called!");
    const TELEGRAM_BOT_TOKEN = process.env
      .NEXT_PUBLIC_TELEGRAM_BOT_TOKEN as string;
    const CHATID = process.env.NEXT_PUBLIC_CHATID as string;
    const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
    const mpAddress = "0x0eC473B1BD821D386cd7209203Ba6826Fd653B96";
    const provider = new ethers.providers.WebSocketProvider(
      process.env.NEXT_PUBLIC_ALCHEMY_WEBSOCKET_URL as string
    );
    const contract = new ethers.Contract(mpAddress, ABI, provider);
    contract.on("Minted", (projectId, edition, account, tokenId) => {
      console.log({ projectId, edition, account, tokenId });
      bot.sendMessage(
        CHATID,
        `Account ${account} minted tokendId ${tokenId} from edition ${edition} of projectId ${projectId}`
      );
    });
    return { statusCode: 200, body: "Great" };
  } catch (e) {
    return { statusCode: 500, body: "Something went wrong." };
  }
};

export { handler };
