import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CREDITCARDHOLDER_TITLE_FIELD } from "../creditCardHolder/CreditCardHolderTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const RequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Requests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="CreditCardHolder"
          source="creditcardholder.id"
          reference="CreditCardHolder"
        >
          <TextField source={CREDITCARDHOLDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="discountDetail" source="discountDetail" />
        <TextField label="ID" source="id" />
        <TextField label="productLink" source="productLink" />
        <TextField label="productName" source="productName" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
