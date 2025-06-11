import React from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

const msalConfig = {
  auth: {
    clientId: "c74a552c-bf78-4da4-9e8f-0c17bde7df99",
    authority:
      "https://login.microsoftonline.com/2d3250a1-996a-4040-8ee7-f01fa92c5b2d",
    redirectUri: "http://localhost:3000/",
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <AuthenticatedTemplate>
        <Dashboard />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
    </MsalProvider>
  );
}

export default App;
