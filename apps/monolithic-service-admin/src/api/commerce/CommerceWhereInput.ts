import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PanierMystereListRelationFilter } from "../panierMystere/PanierMystereListRelationFilter";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type CommerceWhereInput = {
  adresse?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  nom?: StringNullableFilter;
  nomJuridique?: StringNullableFilter;
  numTva?: StringNullableFilter;
  panierMysteres?: PanierMystereListRelationFilter;
  typeField?: "Option1";
  utilisateur?: UtilisateurWhereUniqueInput;
};
