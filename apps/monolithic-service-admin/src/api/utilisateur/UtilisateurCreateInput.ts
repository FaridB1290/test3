import { CommerceCreateNestedManyWithoutUtilisateursInput } from "./CommerceCreateNestedManyWithoutUtilisateursInput";
import { NotificationCreateNestedManyWithoutUtilisateursInput } from "./NotificationCreateNestedManyWithoutUtilisateursInput";

export type UtilisateurCreateInput = {
  commerceItems?: CommerceCreateNestedManyWithoutUtilisateursInput;
  confirmationEmail?: boolean | null;
  email?: string | null;
  motDePasse?: string | null;
  nom?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUtilisateursInput;
  telephone?: string | null;
};
