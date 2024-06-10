import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type NotificationUpdateInput = {
  date?: Date | null;
  message?: string | null;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
