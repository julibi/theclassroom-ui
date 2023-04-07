import { connectors } from "@/constants";

export type Connector = typeof connectors[number];
export type WalletConnectionModalProps = { onClose: () => void };
