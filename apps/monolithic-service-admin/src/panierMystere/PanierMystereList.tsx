import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMERCE_TITLE_FIELD } from "../commerce/CommerceTitle";

export const PanierMystereList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PanierMysteres"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
