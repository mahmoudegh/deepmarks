import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import "./index.css";
import { router } from "./router";
// import { AppRoutes } from "./router";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <RouterProvider router={router} />
      {/* <HashRouter>
        <AppRoutes />
      </HashRouter> */}
    </GoogleOAuthProvider>
  </StrictMode>
);
