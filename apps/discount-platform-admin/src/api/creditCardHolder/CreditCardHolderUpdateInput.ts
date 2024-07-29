import { OrderUpdateManyWithoutCreditCardHoldersInput } from "./OrderUpdateManyWithoutCreditCardHoldersInput";
import { RequestUpdateManyWithoutCreditCardHoldersInput } from "./RequestUpdateManyWithoutCreditCardHoldersInput";

export type CreditCardHolderUpdateInput = {
  bankAccount?: string | null;
  creditCardType?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutCreditCardHoldersInput;
  phoneNumber?: string | null;
  requests?: RequestUpdateManyWithoutCreditCardHoldersInput;
};
