import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { COMMERCE_TITLE_FIELD } from "../commerce/CommerceTitle";

export const FeedbackShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ClientAdresse" source="clientAdresse" />
        <TextField label="ClientEmail" source="clientEmail" />
        <TextField label="ClientNom" source="clientNom" />
        <ReferenceField
          label="Commerce"
          source="commerce.id"
          reference="Commerce"
        >
          <TextField source={COMMERCE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Message" source="message" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
