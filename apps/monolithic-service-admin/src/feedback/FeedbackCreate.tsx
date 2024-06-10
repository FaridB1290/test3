import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CommerceTitle } from "../commerce/CommerceTitle";

export const FeedbackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
