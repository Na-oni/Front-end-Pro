import {Component} from "react";
import Homework from "../homework/Homework.js";

import './Main.css';

class Main extends Component {
    render() {
        return (
            <main>
                <div className='container'>
                    <Homework></Homework>
                </div>
            </main>
        )
    }
}

export default Main;