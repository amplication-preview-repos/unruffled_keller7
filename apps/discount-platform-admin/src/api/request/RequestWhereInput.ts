import { CreditCardHolderWhereUniqueInput } from "../creditCardHolder/CreditCardHolderWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RequestWhereInput = {
  creditCardHolder?: CreditCardHolderWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  discountDetail?: StringNullableFilter;
  id?: StringFilter;
  productLink?: StringNullableFilter;
  productName?: StringNullableFilter;
  status?: StringNullableFilter;
};
