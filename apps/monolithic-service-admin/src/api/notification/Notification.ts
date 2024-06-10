import { Utilisateur } from "../utilisateur/Utilisateur";

export type Notification = {
  createdAt: Date;
  date: Date | null;
  id: string;
  message: string | null;
  updatedAt: Date;
  utilisateur?: Utilisateur | null;
};
