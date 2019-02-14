import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TranslationProvider } from "./context/TranslationContext";
import registerServiceWorker from "./registerServiceWorker";
import ScrollToTop from 'react-router-scroll-top'

ReactDOM.render(
  <BrowserRouter>
<TranslationProvider>
<ScrollToTop>
      <App />
      </ScrollToTop>
    </TranslationProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
