import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CommerceTitle } from "../commerce/CommerceTitle";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ClientAdresse" multiline source="clientAdresse" />
        <TextInput label="ClientEmail" source="clientEmail" type="email" />
        <TextInput label="ClientNom" source="clientNom" />
        <ReferenceInput
          source="commerce.id"
          reference="Commerce"
          label="Commerce"
        >
          <SelectInput optionText={CommerceTitle} />
        </ReferenceInput>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Message" multiline source="message" />
      </SimpleForm>
    </Edit>
  );
};
