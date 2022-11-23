import w from './App.module.scss'
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Profile from "../Main/Profile/Profile";
import Messages from "../Main/Messages/Messages";
import Main from "../Main/Main";

const App = () => {
    return (
        <div className={w.container}>
            <Header/>
            <Navigation/>
            <Main>
                <Profile/>
                <Messages/>
            </Main>
        </div>
    );
}

export default App;
