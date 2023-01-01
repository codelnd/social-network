import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import store from "./store/store";


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>
    );
}

rerender(store.getState())

store.subscribe(rerender)
