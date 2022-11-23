import w from './App.module.scss'
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Profile from "../Main/Profile/Profile";
import Messages from "../Main/Messages/Messages";
import Main from "../Main/Main";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div className={w.container}>
            <Header/>
            <Navigation/>
            <Main>
                <Routes>
                    <Route path='/profile' element={<Profile/>}></Route>
                    <Route path='/messages' element={<Messages/>}></Route>
                </Routes>
            </Main>
        </div>
    );
}

export default App;
