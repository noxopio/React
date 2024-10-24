import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Memorize } from './05-memos/Memorize';
import { MemoHook } from './05-memos/MemoHook';
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook';
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
    {/* <MultipleCustomHook/> */}
    {/* <Memorize /> */}
    <MemoHook />

  </React.StrictMode>,
)