import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PanierMystereWhereUniqueInput } from "../panierMystere/PanierMystereWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type VenteWhereInput = {
  clientAdresse?: StringNullableFilter;
  clientNom?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  panierMystere?: PanierMystereWhereUniqueInput;
  quantite?: IntNullableFilter;
  total?: FloatNullableFilter;
};
