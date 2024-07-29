import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CreditCardHolderTitle } from "../creditCardHolder/CreditCardHolderTitle";
import { CustomerTitle } from "../customer/CustomerTitle";

export const RequestEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="discountDetail" multiline source="discountDetail" />
        <TextInput label="productLink" source="productLink" />
        <TextInput label="productName" source="productName" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
