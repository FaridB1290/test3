import { CommerceWhereUniqueInput } from "../commerce/CommerceWhereUniqueInput";
import { VenteUpdateManyWithoutPanierMysteresInput } from "./VenteUpdateManyWithoutPanierMysteresInput";

export type PanierMystereUpdateInput = {
  commerce?: CommerceWhereUniqueInput | null;
  description?: string | null;
  etat?: "Option1" | null;
  nom?: string | null;
  prix?: number | null;
  ventes?: VenteUpdateManyWithoutPanierMysteresInput;
};
