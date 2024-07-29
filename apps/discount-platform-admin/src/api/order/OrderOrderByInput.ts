import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  creditCardHolderId?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderStatus?: SortOrder;
  productLink?: SortOrder;
  productName?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
