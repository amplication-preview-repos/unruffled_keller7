import { CreditCardHolder } from "../creditCardHolder/CreditCardHolder";
import { Customer } from "../customer/Customer";

export type Request = {
  createdAt: Date;
  creditCardHolder?: CreditCardHolder | null;
  customer?: Customer | null;
  discountDetail: string | null;
  id: string;
  productLink: string | null;
  productName: string | null;
  status: string | null;
  updatedAt: Date;
};
