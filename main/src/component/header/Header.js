import {Component} from "react";
import { NavLink, Outlet } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <div className='container'>
                        <NavLink to='/' className="item">Home</NavLink>
                        <NavLink to='/login' className="item">Login</NavLink>
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