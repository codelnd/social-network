import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const nameData = [
    {
        id: 1,
        name: 'Денис'
    },
    {
        id: 2,
        name: 'Ваня'
    }, {
        id: 3,
        name: 'Виталя'
    }, {
        id: 4,
        name: 'Полина'
    },
]

root.render(
    <BrowserRouter>
        <App nameData={nameData}/>
    </BrowserRouter>
);
