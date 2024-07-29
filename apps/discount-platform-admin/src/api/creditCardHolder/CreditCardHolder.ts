import { Order } from "../order/Order";
import { Request } from "../request/Request";

export type CreditCardHolder = {
  bankAccount: string | null;
  createdAt: Date;
  creditCardType: string | null;
  email: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  phoneNumber: string | null;
  requests?: Array<Request>;
  updatedAt: Date;
};
