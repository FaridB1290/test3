import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PANIERMYSTERE_TITLE_FIELD } from "../panierMystere/PanierMystereTitle";

export const VenteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
