import { CreditCardHolderWhereUniqueInput } from "../creditCardHolder/CreditCardHolderWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  creditCardHolder?: CreditCardHolderWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  orderStatus?: StringNullableFilter;
  productLink?: StringNullableFilter;
  productName?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
};
