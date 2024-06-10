import { Vente as TVente } from "../api/vente/Vente";

export const VENTE_TITLE_FIELD = "clientNom";

export const VenteTitle = (record: TVente): string => {
  return record.clientNom?.toString() || String(record.id);
};
