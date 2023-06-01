import {
  MOONPAGE_MANAGER_ADDRESS_DEV,
  MOONPAGE_MANAGER_ADDRESS_PROD,
} from "@/constants";

const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT == "PROD";
export const MPManagerContract = isProd
  ? MOONPAGE_MANAGER_ADDRESS_PROD
  : MOONPAGE_MANAGER_ADDRESS_DEV;
