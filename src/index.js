import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import state, {addPost, subscribe, updatePostMessage} from "./state/state";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import store from "./store/store";



const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = (state) => {
    root.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost} updatePostMessage={store.updatePost}/>
        </BrowserRouter>
    );
}

rerender(store.getState())

store.subscribe(rerender)
