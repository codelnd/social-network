import w from './App.module.scss'

const App = () => {
    return (
        <div className={w.container}>
            <header className={w.header}>
                <img src='' alt='logo'/>
            </header>
            <nav className={w.nav}>
                <ul>
                    <li>Профиль</li>
                    <li>Сообщения</li>
                    <li>Новости</li>
                    <li>Музыка</li>
                    <li>Настройки</li>
                </ul>
            </nav>
            <main className={w.main}>gwegewg</main>
        </div>
    );
}

export default App;
