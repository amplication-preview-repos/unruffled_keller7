import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CreditCardHolderTitle } from "../creditCardHolder/CreditCardHolderTitle";
import { CustomerTitle } from "../customer/CustomerTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="creditCardHolder.id"
          reference="CreditCardHolder"
          label="CreditCardHolder"
        >
          <SelectInput optionText={CreditCardHolderTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="orderStatus" source="orderStatus" />
        <TextInput label="productLink" source="productLink" />
        <TextInput label="productName" source="productName" />
        <NumberInput label="totalAmount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};
