import React from "react";
import { Provider } from "./slices";
import App from "./app";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";

const Root = () => (
  <Provider>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </Provider>
);

export default Root;