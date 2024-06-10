import { PanierMystereWhereUniqueInput } from "../panierMystere/PanierMystereWhereUniqueInput";

export type VenteUpdateInput = {
  clientAdresse?: string | null;
  clientNom?: string | null;
  date?: Date | null;
  panierMystere?: PanierMystereWhereUniqueInput | null;
  quantite?: number | null;
  total?: number | null;
};
