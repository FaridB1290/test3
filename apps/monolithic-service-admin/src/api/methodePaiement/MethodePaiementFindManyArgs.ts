import { MethodePaiementWhereInput } from "./MethodePaiementWhereInput";
import { MethodePaiementOrderByInput } from "./MethodePaiementOrderByInput";

export type MethodePaiementFindManyArgs = {
  where?: MethodePaiementWhereInput;
  orderBy?: Array<MethodePaiementOrderByInput>;
  skip?: number;
  take?: number;
};
