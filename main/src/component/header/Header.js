import {Component} from "react";
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className='container'>
                    <div className="item left"><a href="/counter/public">Зачаруйте кирку на +5</a></div>
                    <div className="item center"><span className="website-slogan">✨ На 100% бесполезный сайт, но с душой! ✨</span>
                    </div>
                    <div className="item right"><a href="/counter/public"><img
                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/795c2918-d10b-4937-a3c6-897382cb2273-profile_image-300x300.png"
                        alt="aga!"/></a></div>
                </div>
            </header>
        )
    }
}

export default Header;