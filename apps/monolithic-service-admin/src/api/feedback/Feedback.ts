import { Commerce } from "../commerce/Commerce";

export type Feedback = {
  clientAdresse: string | null;
  clientEmail: string | null;
  clientNom: string | null;
  commerce?: Commerce | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  message: string | null;
  updatedAt: Date;
};
