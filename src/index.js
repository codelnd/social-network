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
const messageData = [
    {
        id: 1,
        message: 'Hi, bro'
    },
    {
        id: 2,
        message: 'Ok'
    },
    {
        id: 3,
        message: 'What is it?'
    },
    {
        id: 4,
        message: 'How are you?'
    },
]

root.render(
    <BrowserRouter>
        <App nameData={nameData} messageData={messageData}/>
    </BrowserRouter>
);
