import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TranslationProvider } from "./context/TranslationContext";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
<TranslationProvider>
      <App />
    </TranslationProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
