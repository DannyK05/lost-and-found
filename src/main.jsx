import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProviderWrapper from "./store/Provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  </StrictMode>
);
