import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { RequestUpdateManyWithoutCustomersInput } from "./RequestUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phoneNumber?: string | null;
  requests?: RequestUpdateManyWithoutCustomersInput;
};
