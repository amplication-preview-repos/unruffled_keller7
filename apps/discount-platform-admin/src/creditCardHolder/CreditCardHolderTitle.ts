import { CreditCardHolder as TCreditCardHolder } from "../api/creditCardHolder/CreditCardHolder";

export const CREDITCARDHOLDER_TITLE_FIELD = "name";

export const CreditCardHolderTitle = (record: TCreditCardHolder): string => {
  return record.name?.toString() || String(record.id);
};
