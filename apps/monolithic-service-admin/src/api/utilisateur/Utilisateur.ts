import { Commerce } from "../commerce/Commerce";
import { Notification } from "../notification/Notification";

export type Utilisateur = {
  commerceItems?: Array<Commerce>;
  confirmationEmail: boolean | null;
  createdAt: Date;
  email: string | null;
  id: string;
  motDePasse: string | null;
  nom: string | null;
  notifications?: Array<Notification>;
  telephone: string | null;
  updatedAt: Date;
};
