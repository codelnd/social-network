import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><NavLink className={navLink => navLink.isActive ? s.active : s.link} to='/profile'>Профиль</NavLink></li>
                <li><NavLink className={navLink => navLink.isActive ? s.active : s.link} to='/messages'>Сообщения</NavLink></li>
                <li><NavLink className={navLink => navLink.isActive ? s.active : s.link} to='/news'>Новости</NavLink></li>
                <li><NavLink className={navLink => navLink.isActive ? s.active : s.link} to='/music'>Музыка</NavLink></li>
                <li><NavLink className={navLink => navLink.isActive ? s.active : s.link} to='/settings'>Настройки</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation
