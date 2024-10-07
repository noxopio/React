import React from "react";
import ReactDOM from "react-dom/client";
// import { HooksApp } from "./HooksApp";
import "./index.css";
import { FormularioComponent } from "./components/FormularioComponent";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <FormularioComponent />
    {/* <HooksApp /> */}
  </React.StrictMode>


)