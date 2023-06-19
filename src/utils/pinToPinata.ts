import axios from "axios";

const url = process.env.NEXT_PUBLIC_PINATA_API_URL as string;
const API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const API_SECRET = process.env.NEXT_PUBLIC_PINATA_API_SECRET;

const pinToPinata = async (
  tokenId: number,
  hash: string,
  isTranslation?: boolean
) => {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === "DEV") return;
  let name;
  if (isTranslation) {
    name = `THERETREAT-translation-${tokenId}`;
  } else {
    name = `THERETREAT-${tokenId}`;
  }

  try {
    await axios.post(
      url,
      {
        hashToPin: hash,
        pinataMetadata: {
          name,
          keyvalues: {},
        },
      },
      {
        headers: {
          pinata_api_key: API_KEY,
          pinata_secret_api_key: API_SECRET,
          "Content-Type": "application/json",
        },
      }
    );
    return "ok";
  } catch (e) {
    console.log({ e });
    return "error";
  }
};

export default pinToPinata;
