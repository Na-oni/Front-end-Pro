import {Component} from "react";

import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className='container'>
                    <div className="item"><a href='/'>Home</a></div>
                </div>
            </header>
        )
    }
}

export default Header;