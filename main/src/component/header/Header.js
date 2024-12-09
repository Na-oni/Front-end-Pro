import {Component} from "react";

import ThemeToggle from "./ThemeToggle";

import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className='container'>
                    <div className="item"><a href='/'>Главная</a></div>
                    <div className="item"><a href='/contact'>Контакты</a></div>
                    <div className="item"><a href='/about'>Обо мне</a></div>
                    <div className="item"><ThemeToggle/></div>
                </div>
            </header>
        )
    }
}

export default Header;