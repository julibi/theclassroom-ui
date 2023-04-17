export type Profile = {
  id: string;
  address: string;
  imgFile?: Blob | null;
  imgBuffer?: Buffer | null;
  imageIPFSHash: string;
  name: string;
  descriptionIPFSHash: string;
  website: string;
  discord: string;
  instagram: string;
  paragraphxyz: string;
  substack: string;
  twitter: string;
  youtube: string;
  isVerified: boolean;
};
