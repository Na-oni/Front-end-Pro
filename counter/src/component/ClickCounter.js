import {Component} from "react";
import './ClickCounter.css';

class ClickCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            multiplier: 1,
            selected_option: 1
        };
    }

    increase = () => {
        this.setState((state) => ({
            count: state.count + state.multiplier,
        }));
    }

    decrease = () => {
        this.setState((state) => ({
            count: state.count - state.multiplier,
        }));
    };

    reset = () => {
        this.setState({ count: 0 });
    };

    set_multiplier = (multiplier) => {
        this.setState({ multiplier });
    };

    handle_change = (event) => {
        this.setState({ selected_option: parseInt(event.target.value, 10) });
    };

    render() {
        return (
            <div className="counter">
                <div className="show">
                    <p>count: {this.state.count}, multiplier: {this.state.multiplier}</p>
                </div>

                <div className="buttons">
                    <button onClick={this.increase}>Збільшити</button>
                    <button onClick={this.decrease}>Зменшити</button>
                    <button onClick={this.reset}>Скинути</button>
                </div>

                <div className="buttons">
                    <button onClick={() => this.set_multiplier(1)}>1</button>
                    <button onClick={() => this.set_multiplier(5)}>5</button>
                    <button onClick={() => this.set_multiplier(10)}>10</button>
                </div>


                <div className="set-multiplier">
                    <select id="all_multiplier" value={this.selected_option} onChange={this.handle_change}>
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                    <button onClick={() => this.set_multiplier(this.state.selected_option)}>Підтвердити вибір доданку</button>
                </div>
            </div>
        )
    }
}

export default ClickCounter;