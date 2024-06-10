import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PANIERMYSTERE_TITLE_FIELD } from "./PanierMystereTitle";
import { COMMERCE_TITLE_FIELD } from "../commerce/CommerceTitle";

export const PanierMystereShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Commerce"
          source="commerce.id"
          reference="Commerce"
        >
          <TextField source={COMMERCE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Etat" source="etat" />
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="Prix" source="prix" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Vente"
          target="panierMystereId"
          label="Ventes"
        >
          <Datagrid rowClick="show">
            <TextField label="ClientAdresse" source="clientAdresse" />
            <TextField label="ClientNom" source="clientNom" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="PanierMystere"
              source="paniermystere.id"
              reference="PanierMystere"
            >
              <TextField source={PANIERMYSTERE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantite" source="quantite" />
            <TextField label="Total" source="total" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
