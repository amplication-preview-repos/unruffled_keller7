import { CreditCardHolderWhereUniqueInput } from "../creditCardHolder/CreditCardHolderWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type RequestUpdateInput = {
  creditCardHolder?: CreditCardHolderWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  discountDetail?: string | null;
  productLink?: string | null;
  productName?: string | null;
  status?: string | null;
};
