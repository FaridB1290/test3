import { CommerceWhereUniqueInput } from "../commerce/CommerceWhereUniqueInput";
import { VenteCreateNestedManyWithoutPanierMysteresInput } from "./VenteCreateNestedManyWithoutPanierMysteresInput";

export type PanierMystereCreateInput = {
  commerce?: CommerceWhereUniqueInput | null;
  description?: string | null;
  etat?: "Option1" | null;
  nom?: string | null;
  prix?: number | null;
  ventes?: VenteCreateNestedManyWithoutPanierMysteresInput;
};
