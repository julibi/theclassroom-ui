import axios from "axios";

const url = process.env.NEXT_PUBLIC_PINATA_UNPIN_API_URL;
const JWT = process.env.NEXT_PUBLIC_PINATA_JWT;

const unpinFromPinata = async (hash: string) => {
  if (process.env.NEXT_PUBLIC_ENVIRONMENT === "DEV") return;

  const config = {
    method: "delete",
    url: `${url}/${hash}`,
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  };
  try {
    // @ts-ignore
    const res = await axios(config);
    return res.data;
  } catch (e) {
    console.debug({ e });
  }
};

export default unpinFromPinata;
