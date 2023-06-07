export type PatientRecordProps = {
  name: string;
  id: number;
  birthDate: string;
  birthPlace: string;
  checkIn: string;
  img: string;
  text?: string;
  withPic?: boolean;
  withButton?: boolean;
};
