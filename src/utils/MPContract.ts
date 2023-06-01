import {
  MOONPAGE_COLLECTION_ADDRESS_DEV,
  MOONPAGE_COLLECTION_ADDRESS_PROD,
} from "@/constants";

const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT == "PROD";
export const MPContract = isProd
  ? MOONPAGE_COLLECTION_ADDRESS_PROD
  : MOONPAGE_COLLECTION_ADDRESS_DEV;
