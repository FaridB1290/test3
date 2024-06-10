import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { PanierMystereTitle } from "../panierMystere/PanierMystereTitle";

export const VenteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ClientAdresse" multiline source="clientAdresse" />
        <TextInput label="ClientNom" source="clientNom" />
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput
          source="panierMystere.id"
          reference="PanierMystere"
          label="PanierMystere"
        >
          <SelectInput optionText={PanierMystereTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantite" source="quantite" />
        <NumberInput label="Total" source="total" />
      </SimpleForm>
    </Edit>
  );
};
