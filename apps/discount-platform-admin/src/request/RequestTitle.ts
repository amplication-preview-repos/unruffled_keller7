import { Request as TRequest } from "../api/request/Request";

export const REQUEST_TITLE_FIELD = "productName";

export const RequestTitle = (record: TRequest): string => {
  return record.productName?.toString() || String(record.id);
};
