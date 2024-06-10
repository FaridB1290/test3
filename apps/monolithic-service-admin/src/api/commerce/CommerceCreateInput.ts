import { FeedbackCreateNestedManyWithoutCommerceItemsInput } from "./FeedbackCreateNestedManyWithoutCommerceItemsInput";
import { PanierMystereCreateNestedManyWithoutCommerceItemsInput } from "./PanierMystereCreateNestedManyWithoutCommerceItemsInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type CommerceCreateInput = {
  adresse?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutCommerceItemsInput;
  nom?: string | null;
  nomJuridique?: string | null;
  numTva?: string | null;
  panierMysteres?: PanierMystereCreateNestedManyWithoutCommerceItemsInput;
  typeField?: "Option1" | null;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
