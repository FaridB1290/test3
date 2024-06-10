import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { CommerceTitle } from "../commerce/CommerceTitle";
import { NotificationTitle } from "../notification/NotificationTitle";

export const UtilisateurCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="commerceItems"
          reference="Commerce"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommerceTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="ConfirmationEmail" source="confirmationEmail" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="MotDePasse" source="motDePasse" />
        <TextInput label="Nom" source="nom" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Telephone" source="telephone" />
      </SimpleForm>
    </Create>
  );
};
