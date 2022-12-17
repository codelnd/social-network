import s from './Header.module.css'
import {Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link className={s.link} to='/'>Logo</Link></Navbar.Brand>
            </Container>
        </Navbar>
        </header>
    )
}

export default Header
