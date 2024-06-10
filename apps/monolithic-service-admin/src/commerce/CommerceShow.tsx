import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMMERCE_TITLE_FIELD } from "./CommerceTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";

export const CommerceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Adresse" source="adresse" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Nom" source="nom" />
        <TextField label="NomJuridique" source="nomJuridique" />
        <TextField label="NumTVA" source="numTva" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Utilisateur"
          source="utilisateur.id"
          reference="Utilisateur"
        >
          <TextField source={UTILISATEUR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Feedback"
          target="commerceId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PanierMystere"
          target="commerceId"
          label="PanierMysteres"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
