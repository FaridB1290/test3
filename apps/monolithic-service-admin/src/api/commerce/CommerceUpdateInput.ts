import { FeedbackUpdateManyWithoutCommerceItemsInput } from "./FeedbackUpdateManyWithoutCommerceItemsInput";
import { PanierMystereUpdateManyWithoutCommerceItemsInput } from "./PanierMystereUpdateManyWithoutCommerceItemsInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type CommerceUpdateInput = {
  adresse?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutCommerceItemsInput;
  nom?: string | null;
  nomJuridique?: string | null;
  numTva?: string | null;
  panierMysteres?: PanierMystereUpdateManyWithoutCommerceItemsInput;
  typeField?: "Option1" | null;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
