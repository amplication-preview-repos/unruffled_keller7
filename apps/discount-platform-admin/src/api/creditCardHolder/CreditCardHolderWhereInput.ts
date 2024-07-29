import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";

export type CreditCardHolderWhereInput = {
  bankAccount?: StringNullableFilter;
  creditCardType?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  phoneNumber?: StringNullableFilter;
  requests?: RequestListRelationFilter;
};
