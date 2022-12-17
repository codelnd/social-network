import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
        <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Link><NavLink className={navLink => navLink.isActive ? s.active : s.link}
                               to='/profile'>Профиль</NavLink></Nav.Link>
            <Nav.Link><NavLink className={navLink => navLink.isActive ? s.active : s.link}
                               to='/messages'>Сообщения</NavLink></Nav.Link>
            <Nav.Link><NavLink className={navLink => navLink.isActive ? s.active : s.link} to='/news'>Новости</NavLink></Nav.Link>
            <Nav.Link><NavLink className={navLink => navLink.isActive ? s.active : s.link} to='/music'>Музыка</NavLink></Nav.Link>
            <Nav.Link><NavLink className={navLink => navLink.isActive ? s.active : s.link}
                               to='/settings'>Настройки</NavLink></Nav.Link>
        </Nav>
    )
}

export default Navigation
