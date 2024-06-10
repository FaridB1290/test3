import { CommerceWhereInput } from "./CommerceWhereInput";
import { CommerceOrderByInput } from "./CommerceOrderByInput";

export type CommerceFindManyArgs = {
  where?: CommerceWhereInput;
  orderBy?: Array<CommerceOrderByInput>;
  skip?: number;
  take?: number;
};
