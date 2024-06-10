import { MethodePaiement as TMethodePaiement } from "../api/methodePaiement/MethodePaiement";

export const METHODEPAIEMENT_TITLE_FIELD = "id";

export const MethodePaiementTitle = (record: TMethodePaiement): string => {
  return record.id?.toString() || String(record.id);
};
