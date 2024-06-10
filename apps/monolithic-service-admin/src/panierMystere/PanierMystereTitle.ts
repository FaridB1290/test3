import { PanierMystere as TPanierMystere } from "../api/panierMystere/PanierMystere";

export const PANIERMYSTERE_TITLE_FIELD = "nom";

export const PanierMystereTitle = (record: TPanierMystere): string => {
  return record.nom?.toString() || String(record.id);
};
