import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp /> */}
        {/* <FirstApp title='Neo'/> */}
        <CounterApp  value={100} />
    </React.StrictMode>
)