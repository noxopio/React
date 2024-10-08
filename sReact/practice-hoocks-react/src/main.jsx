import React from "react";
import ReactDOM from "react-dom/client";
// import { HooksApp } from "./HooksApp";
import "./index.css";
import { FormularioComponent } from "./components/FormularioComponent";
import { CalculosPesados } from "./components/CalculosPesados";
import { CallbackComponent } from "./components/CallbackComponent";
// import { UsersComponent } from "./components/UsersComponent";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <CalculosPesados />
    <CallbackComponent />
    {/* <FormularioComponent /> */}
  </React.StrictMode>


)