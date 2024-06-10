import { CommerceWhereUniqueInput } from "../commerce/CommerceWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { VenteListRelationFilter } from "../vente/VenteListRelationFilter";

export type PanierMystereWhereInput = {
  commerce?: CommerceWhereUniqueInput;
  description?: StringNullableFilter;
  etat?: "Option1";
  id?: StringFilter;
  nom?: StringNullableFilter;
  prix?: FloatNullableFilter;
  ventes?: VenteListRelationFilter;
};
