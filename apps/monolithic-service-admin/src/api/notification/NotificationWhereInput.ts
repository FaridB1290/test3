import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type NotificationWhereInput = {
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  utilisateur?: UtilisateurWhereUniqueInput;
};
