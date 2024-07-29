import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type OfferWhereInput = {
  applicableCreditCardType?: StringNullableFilter;
  description?: StringNullableFilter;
  discountPercentage?: FloatNullableFilter;
  id?: StringFilter;
  validUntil?: DateTimeNullableFilter;
};
