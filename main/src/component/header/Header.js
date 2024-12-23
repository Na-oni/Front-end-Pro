import {Component} from "react";
import { NavLink, Outlet } from 'react-router-dom';

import ThemeToggle from "./ThemeToggle";

import './Header.css';

class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <div className='container'>
                        <NavLink to='/' className="item"><a href=''>Главная</a></NavLink>
                        <NavLink to='/contact' className="item"><a href=''>Контакты</a></NavLink>
                        <NavLink to='/about' className="item"><a href=''>Обо мне</a></NavLink>
                        <div className="item"><ThemeToggle/></div>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
                </>
        )
    }
}

export default Header;