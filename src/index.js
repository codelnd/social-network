import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import state, {addPost} from "./state/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => {
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>
    );
}


rerender()
