import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PANIERMYSTERE_TITLE_FIELD } from "../panierMystere/PanierMystereTitle";

export const VenteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Ventes"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
