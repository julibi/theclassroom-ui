export type PatientRecordProps = {
  name: string;
  id: number;
  birthDate: string;
  birthPlace: string;
  checkIn: string;
  img: string;
  translationIpfsHash: string;
  withPic?: boolean;
  withButton?: boolean;
};
