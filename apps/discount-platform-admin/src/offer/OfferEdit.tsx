import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const OfferEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="applicableCreditCardType"
          source="applicableCreditCardType"
        />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discountPercentage" source="discountPercentage" />
        <DateTimeInput label="validUntil" source="validUntil" />
      </SimpleForm>
    </Edit>
  );
};
