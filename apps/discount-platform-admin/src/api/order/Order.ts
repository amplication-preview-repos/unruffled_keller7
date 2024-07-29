import { CreditCardHolder } from "../creditCardHolder/CreditCardHolder";
import { Customer } from "../customer/Customer";

export type Order = {
  createdAt: Date;
  creditCardHolder?: CreditCardHolder | null;
  customer?: Customer | null;
  id: string;
  orderStatus: string | null;
  productLink: string | null;
  productName: string | null;
  totalAmount: number | null;
  updatedAt: Date;
};
