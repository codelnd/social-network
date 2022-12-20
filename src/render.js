import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import state, {addPost} from "./state/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerender = () => {
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>
    );
}

