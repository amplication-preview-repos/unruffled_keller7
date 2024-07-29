import { CreditCardHolderWhereInput } from "./CreditCardHolderWhereInput";
import { CreditCardHolderOrderByInput } from "./CreditCardHolderOrderByInput";

export type CreditCardHolderFindManyArgs = {
  where?: CreditCardHolderWhereInput;
  orderBy?: Array<CreditCardHolderOrderByInput>;
  skip?: number;
  take?: number;
};
