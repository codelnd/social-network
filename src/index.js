import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import state, {addPost, subscribe, updatePostMessage} from "./state/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";



const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => {
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePostMessage={updatePostMessage}/>
        </BrowserRouter>
    );
}

rerender()

subscribe(rerender)
