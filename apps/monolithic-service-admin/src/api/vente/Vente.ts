import { PanierMystere } from "../panierMystere/PanierMystere";

export type Vente = {
  clientAdresse: string | null;
  clientNom: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  panierMystere?: PanierMystere | null;
  quantite: number | null;
  total: number | null;
  updatedAt: Date;
};
