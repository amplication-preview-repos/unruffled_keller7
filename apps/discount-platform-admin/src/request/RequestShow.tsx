import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CREDITCARDHOLDER_TITLE_FIELD } from "../creditCardHolder/CreditCardHolderTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const RequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
