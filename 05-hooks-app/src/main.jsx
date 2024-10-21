import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MultipleCustomHook } from './03-examples/MultipleCustomHook';
// import { FormWithCustomHook } from './02-useEfect/FormWithCustomHook';
// import { HooksApp } from './HooksApp';
// import { SimpleForm } from './02-useEfect/SimpleForm';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { CounterApp } from './01-useState/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <CounterWithCustomHook /> */}

    <MultipleCustomHook/>
  </React.StrictMode>,
)