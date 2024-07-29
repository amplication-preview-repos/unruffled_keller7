import { Offer as TOffer } from "../api/offer/Offer";

export const OFFER_TITLE_FIELD = "applicableCreditCardType";

export const OfferTitle = (record: TOffer): string => {
  return record.applicableCreditCardType?.toString() || String(record.id);
};
