import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommerceWhereUniqueInput } from "../commerce/CommerceWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FeedbackWhereInput = {
  clientAdresse?: StringNullableFilter;
  clientEmail?: StringNullableFilter;
  clientNom?: StringNullableFilter;
  commerce?: CommerceWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
};
