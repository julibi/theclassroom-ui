export type CharacterItem = {
  name: string;
  textIpfsHash: string;
  imageIpfsHash: string;
};

export type AdminInputProps = {
  refetch: () => void;
};
