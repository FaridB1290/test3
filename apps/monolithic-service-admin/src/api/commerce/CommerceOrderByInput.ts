import { SortOrder } from "../../util/SortOrder";

export type CommerceOrderByInput = {
  adresse?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  nom?: SortOrder;
  nomJuridique?: SortOrder;
  numTva?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  utilisateurId?: SortOrder;
};
