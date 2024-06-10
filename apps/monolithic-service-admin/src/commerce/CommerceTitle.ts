import { Commerce as TCommerce } from "../api/commerce/Commerce";

export const COMMERCE_TITLE_FIELD = "nom";

export const CommerceTitle = (record: TCommerce): string => {
  return record.nom?.toString() || String(record.id);
};
