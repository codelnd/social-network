import s from './App.module.css'
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Profile from "../Main/Profile/Profile";
import Main from "../Main/Main";
import {Route, Routes} from "react-router-dom";
import News from "../Main/News/News";
import Music from "../Main/Music/Music";
import Settings from "../Main/Settings/Settings";
import MessagesContainer from "../Main/Messages/MessagesContainer";

const App = (props) => {
    return (
        <div className={s.container}>
            <Header/>
            <Navigation/>
            <Main>
                <Routes>
                    <Route path='/profile' element={<Profile store={props.store} />}></Route>
                    <Route path='/messages/*' element={<MessagesContainer store={props.store} />}></Route>
                    <Route path='/news' element={<News/>}></Route>
                    <Route path='/music' element={<Music/>}></Route>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </Main>
        </div>
    );
}

export default App;
