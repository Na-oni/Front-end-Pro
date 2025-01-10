import { Component } from "react";

import ru_json from '../../languages/ru/header.json';
import ua_json from '../../languages/ua/header.json';
import en_json from '../../languages/en/header.json';

import ru_icon from "./icons/ru.png";
import ua_icon from "./icons/ua.png";
import en_icon from "./icons/en.png";

const languages = { ru: ru_json, ua: ua_json, en: en_json };
const icons = { ru: ru_icon, ua: ua_icon, en: en_icon };

class LanguageOptions extends Component {
    render() {
        const { change_language } = this.props;
        return (
            <div className="language-options">
                {Object.keys(languages).map(lang => (
                    <img className="item" onClick={() => change_language(lang)} src={icons[lang]} alt={`icon for ${lang}`} key={lang} />
                ))}
            </div>
        );
    }
}

export default LanguageOptions;