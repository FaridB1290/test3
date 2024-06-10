import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CommerceList } from "./commerce/CommerceList";
import { CommerceCreate } from "./commerce/CommerceCreate";
import { CommerceEdit } from "./commerce/CommerceEdit";
import { CommerceShow } from "./commerce/CommerceShow";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { PanierMystereList } from "./panierMystere/PanierMystereList";
import { PanierMystereCreate } from "./panierMystere/PanierMystereCreate";
import { PanierMystereEdit } from "./panierMystere/PanierMystereEdit";
import { PanierMystereShow } from "./panierMystere/PanierMystereShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { VenteList } from "./vente/VenteList";
import { VenteCreate } from "./vente/VenteCreate";
import { VenteEdit } from "./vente/VenteEdit";
import { VenteShow } from "./vente/VenteShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { MethodePaiementList } from "./methodePaiement/MethodePaiementList";
import { MethodePaiementCreate } from "./methodePaiement/MethodePaiementCreate";
import { MethodePaiementEdit } from "./methodePaiement/MethodePaiementEdit";
import { MethodePaiementShow } from "./methodePaiement/MethodePaiementShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Monolithic Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Commerce"
          list={CommerceList}
          edit={CommerceEdit}
          create={CommerceCreate}
          show={CommerceShow}
        />
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="PanierMystere"
          list={PanierMystereList}
          edit={PanierMystereEdit}
          create={PanierMystereCreate}
          show={PanierMystereShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="Vente"
          list={VenteList}
          edit={VenteEdit}
          create={VenteCreate}
          show={VenteShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="MethodePaiement"
          list={MethodePaiementList}
          edit={MethodePaiementEdit}
          create={MethodePaiementCreate}
          show={MethodePaiementShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
