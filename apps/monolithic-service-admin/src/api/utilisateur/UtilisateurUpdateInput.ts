import { CommerceUpdateManyWithoutUtilisateursInput } from "./CommerceUpdateManyWithoutUtilisateursInput";
import { NotificationUpdateManyWithoutUtilisateursInput } from "./NotificationUpdateManyWithoutUtilisateursInput";

export type UtilisateurUpdateInput = {
  commerceItems?: CommerceUpdateManyWithoutUtilisateursInput;
  confirmationEmail?: boolean | null;
  email?: string | null;
  motDePasse?: string | null;
  nom?: string | null;
  notifications?: NotificationUpdateManyWithoutUtilisateursInput;
  telephone?: string | null;
};
