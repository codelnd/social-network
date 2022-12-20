import s from './App.module.css'
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Profile from "../Main/Profile/Profile";
import Messages from "../Main/Messages/Messages";
import Main from "../Main/Main";
import {Route, Routes} from "react-router-dom";
import News from "../Main/News/News";
import Music from "../Main/Music/Music";
import Settings from "../Main/Settings/Settings";

const App = (props) => {
    return (
        <div className={s.container}>
            <Header/>
            <Navigation/>
            <Main>
                <Routes>
                    <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost}/>}></Route>
                    <Route path='/messages/*' element={<Messages state={props.state.messagesPage} />}></Route>
                    <Route path='/news' element={<News/>}></Route>
                    <Route path='/music' element={<Music/>}></Route>
                    <Route path='/settings' element={<Settings/>}></Route>
                </Routes>
            </Main>
        </div>
    );
}

export default App;
