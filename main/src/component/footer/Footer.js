import {Component} from "react";

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='container'>
                    <div className="item center">
                        <a href="/counter/public">Лучше быть душным чем бездушным</a>
                </div>
            </div>
    </footer>
    )
    }
}

export default Footer;