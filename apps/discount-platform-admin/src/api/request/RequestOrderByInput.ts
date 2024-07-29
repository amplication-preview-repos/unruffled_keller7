import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  createdAt?: SortOrder;
  creditCardHolderId?: SortOrder;
  customerId?: SortOrder;
  discountDetail?: SortOrder;
  id?: SortOrder;
  productLink?: SortOrder;
  productName?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
