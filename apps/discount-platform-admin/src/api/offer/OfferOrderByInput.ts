import { SortOrder } from "../../util/SortOrder";

export type OfferOrderByInput = {
  applicableCreditCardType?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountPercentage?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  validUntil?: SortOrder;
};
