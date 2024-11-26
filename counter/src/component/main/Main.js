import {Component} from "react";
import ClickCounter from "../ClickCounter.js";

import './Main.css';

class Main extends Component {
    render() {
        return (
            <main>
                <div className='container'>
                    <div id="task_solution" className="task-solution">
                        <ClickCounter></ClickCounter>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;