import { Commerce } from "../commerce/Commerce";
import { Vente } from "../vente/Vente";

export type PanierMystere = {
  commerce?: Commerce | null;
  createdAt: Date;
  description: string | null;
  etat?: "Option1" | null;
  id: string;
  nom: string | null;
  prix: number | null;
  updatedAt: Date;
  ventes?: Array<Vente>;
};
