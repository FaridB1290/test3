import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  clientAdresse?: SortOrder;
  clientEmail?: SortOrder;
  clientNom?: SortOrder;
  commerceId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
};
