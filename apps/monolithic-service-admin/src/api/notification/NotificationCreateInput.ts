import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type NotificationCreateInput = {
  date?: Date | null;
  message?: string | null;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
