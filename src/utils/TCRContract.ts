import { TCR_DEV, TCR_PROD } from "@/constants";

const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT == "PROD";
export const TCRContract = isProd ? TCR_PROD : TCR_DEV;
