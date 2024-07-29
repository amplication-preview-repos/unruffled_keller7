import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CREDITCARDHOLDER_TITLE_FIELD } from "./CreditCardHolderTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const CreditCardHolderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bankAccount" source="bankAccount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="creditCardType" source="creditCardType" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Order"
          target="creditCardHolderId"
          label="Orders"
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
            <TextField label="ID" source="id" />
            <TextField label="orderStatus" source="orderStatus" />
            <TextField label="productLink" source="productLink" />
            <TextField label="productName" source="productName" />
            <TextField label="totalAmount" source="totalAmount" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Request"
          target="creditCardHolderId"
          label="Requests"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
