import { CommerceWhereUniqueInput } from "../commerce/CommerceWhereUniqueInput";

export type FeedbackUpdateInput = {
  clientAdresse?: string | null;
  clientEmail?: string | null;
  clientNom?: string | null;
  commerce?: CommerceWhereUniqueInput | null;
  date?: Date | null;
  message?: string | null;
};
