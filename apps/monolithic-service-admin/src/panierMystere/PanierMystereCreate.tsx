import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CommerceTitle } from "../commerce/CommerceTitle";
import { VenteTitle } from "../vente/VenteTitle";

export const PanierMystereCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="commerce.id"
          reference="Commerce"
          label="Commerce"
        >
          <SelectInput optionText={CommerceTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <SelectInput
          source="etat"
          label="Etat"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Nom" source="nom" />
        <NumberInput label="Prix" source="prix" />
        <ReferenceArrayInput
          source="ventes"
          reference="Vente"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VenteTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
