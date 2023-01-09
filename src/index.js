import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import store from "./redux/redux-store";
import MyContext from "./MyContext";


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerender = () => {
    root.render(
        <BrowserRouter>
            <MyContext.Provider value={store}>
                <App store={store}/>
            </MyContext.Provider>
        </BrowserRouter>
    );
}

rerender()

store.subscribe(rerender)
