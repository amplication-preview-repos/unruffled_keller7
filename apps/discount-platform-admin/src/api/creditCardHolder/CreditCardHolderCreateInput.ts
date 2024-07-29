import { OrderCreateNestedManyWithoutCreditCardHoldersInput } from "./OrderCreateNestedManyWithoutCreditCardHoldersInput";
import { RequestCreateNestedManyWithoutCreditCardHoldersInput } from "./RequestCreateNestedManyWithoutCreditCardHoldersInput";

export type CreditCardHolderCreateInput = {
  bankAccount?: string | null;
  creditCardType?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutCreditCardHoldersInput;
  phoneNumber?: string | null;
  requests?: RequestCreateNestedManyWithoutCreditCardHoldersInput;
};
