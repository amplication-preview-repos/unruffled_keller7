import { Order } from "../order/Order";
import { Request } from "../request/Request";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  phoneNumber: string | null;
  requests?: Array<Request>;
  updatedAt: Date;
};
