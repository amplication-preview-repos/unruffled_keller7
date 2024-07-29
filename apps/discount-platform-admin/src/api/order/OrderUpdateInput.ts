import { CreditCardHolderWhereUniqueInput } from "../creditCardHolder/CreditCardHolderWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderUpdateInput = {
  creditCardHolder?: CreditCardHolderWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  orderStatus?: string | null;
  productLink?: string | null;
  productName?: string | null;
  totalAmount?: number | null;
};
