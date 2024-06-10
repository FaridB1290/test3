import { SortOrder } from "../../util/SortOrder";

export type VenteOrderByInput = {
  clientAdresse?: SortOrder;
  clientNom?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  panierMystereId?: SortOrder;
  quantite?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
