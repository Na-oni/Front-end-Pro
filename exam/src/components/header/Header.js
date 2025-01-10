import { Component } from "react";
import { NavLink } from "react-router-dom";

import LanguageOptions from "./LanguageOptions";

import ru_json from "../../languages/ru/header.json";
import ua_json from "../../languages/ua/header.json";
import en_json from "../../languages/en/header.json";

import ru_icon from "./icons/ru.png";
import ua_icon from "./icons/ua.png";
import en_icon from "./icons/en.png";

import "./Header.css";

const languages = { ru: ru_json, ua: ua_json, en: en_json };
const icons = { ru: ru_icon, ua: ua_icon, en: en_icon };

class Header extends Component {
    constructor(props) {
        super(props);
        const language = localStorage.getItem("language") || "ru";
        localStorage.setItem("language", language);
        this.state = { header: languages[language], icon: icons[language], language, show_language_options: false };
    }

    toggle_language_options = () => {
        this.setState(state => ({ show_language_options: !state.show_language_options }));
    }

    change_language = (language) => {
        localStorage.setItem("language", language);
        window.location.reload();
    }

    render() {
        const { header, icon, show_language_options } = this.state;
        return (
            <header>
                <div className="item left">{header.left.map(item => (<NavLink to={item.to} className="nav-link" key={item.to}>{item.text}</NavLink>))}</div>
                <div className="item right">
                    <div className="language">
                        {show_language_options ? <LanguageOptions change_language={this.change_language}/>:<img onClick={this.toggle_language_options} src={icon} alt="error icon" />}
                    </div>
                    {header.right.map(item => (<NavLink to={item.to} className="nav-link" key={item.to}>{item.text}</NavLink>))}
                </div>
            </header>
        );
    }
}

export default Header;