import { Feedback } from "../feedback/Feedback";
import { PanierMystere } from "../panierMystere/PanierMystere";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type Commerce = {
  adresse: string | null;
  createdAt: Date;
  feedbacks?: Array<Feedback>;
  id: string;
  nom: string | null;
  nomJuridique: string | null;
  numTva: string | null;
  panierMysteres?: Array<PanierMystere>;
  typeField?: "Option1" | null;
  updatedAt: Date;
  utilisateur?: Utilisateur | null;
};
