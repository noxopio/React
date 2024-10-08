import React from "react";
import ReactDOM from "react-dom/client";
// import { HooksApp } from "./HooksApp";
import "./index.css";
import { FormularioComponent } from "./components/FormularioComponent";
import { CalculosPesados } from "./components/CalculosPesados";
import { CallbackComponent } from "./components/CallbackComponent";
import { ListTask } from "./components/ListTask";
// import { UsersComponent } from "./components/UsersComponent";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <ListTask />
    {/* <CalculosPesados /> */}
    {/* <CallbackComponent /> */}
    {/* <FormularioComponent /> */}
  </React.StrictMode>


)