import { SortOrder } from "../../util/SortOrder";

export type CreditCardHolderOrderByInput = {
  bankAccount?: SortOrder;
  createdAt?: SortOrder;
  creditCardType?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
