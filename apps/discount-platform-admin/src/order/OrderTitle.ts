import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "productName";

export const OrderTitle = (record: TOrder): string => {
  return record.productName?.toString() || String(record.id);
};
