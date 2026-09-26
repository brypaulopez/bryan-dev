import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

const redirect = sessionStorage.getItem("redirect");

let initialPath = "/";

if (redirect) {
  try {
    const data = JSON.parse(redirect);

    initialPath = data.route || "/";

    sessionStorage.removeItem("redirect");
  } catch {
    sessionStorage.removeItem("redirect");
  }
}

if (initialPath !== "/") {
  window.history.replaceState(null, "", `/bryan-dev${initialPath}`);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/bryan-dev">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
