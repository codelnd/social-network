import w from './App.module.scss'
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";

const App = () => {
    return (
        <div className={w.container}>
            <Header/>
            <Navigation/>
            <Profile/>
        </div>
    );
}

export default App;
