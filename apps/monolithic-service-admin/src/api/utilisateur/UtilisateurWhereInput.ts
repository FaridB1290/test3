import { CommerceListRelationFilter } from "../commerce/CommerceListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";

export type UtilisateurWhereInput = {
  commerceItems?: CommerceListRelationFilter;
  confirmationEmail?: BooleanNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  motDePasse?: StringNullableFilter;
  nom?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  telephone?: StringNullableFilter;
};
