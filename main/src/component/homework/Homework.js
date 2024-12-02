import { Component } from "react";
import './Homework.css';

import image_0 from './image/0.png';
import image_1 from './image/1.png';
import image_2 from './image/2.png';
import image_3 from './image/3.png';
import image_4 from './image/4.png';

class Homework extends Component {
    constructor(props) {
        super(props);

        const local_storage = JSON.parse(localStorage.getItem('smiley'));
        const smiley = local_storage || [
            { id: 0, like: 0, image: image_0 },
            { id: 1, like: 0, image: image_1 },
            { id: 2, like: 0, image: image_2 },
            { id: 3, like: 0, image: image_3 },
            { id: 4, like: 0, image: image_4 }
        ];

        this.state = {
            smiley: smiley,
            is_show: false,
            id_winner: 0
        };
    }

    click_img = (id) => {
        this.setState((state) => {
            const updated = state.smiley.map((item) =>
                item.id === id ? { ...item, like: item.like + 1 } : item
            );

            localStorage.setItem('smiley', JSON.stringify(updated));
            return { smiley: updated };
        });
    };

    get_results = () => {
        let id_winner = -1;

        this.state.smiley.forEach((item) => {
            if (id_winner === -1 || item.like > this.state.smiley[id_winner].like) {
                id_winner = item.id;
            }
        });

        if (id_winner !== -1) {
            this.setState({ is_show: true, id_winner: id_winner });
        }
    }

    clear_results = () => {
        this.setState((state) => {
            const resetSmiley = state.smiley.map((item) => ({
                ...item,
                like: 0
            }));

            localStorage.setItem('smiley', JSON.stringify(resetSmiley));
            return { smiley: resetSmiley, is_show: false };
        });
    }

    render() {
        return (
            <>
                <span className='main-text'>Голосование за лучший смайлик</span>
                <div className='grid'>
                    {this.state.smiley.map((item, index) => (
                        <div className='item' onClick={() => this.click_img(item.id)} key={index}>
                            <img src={item.image} alt=""/>
                            <span>{item.like}</span>
                        </div>
                    ))}
                </div>

                <button className='button-results' onClick={this.get_results}>Show results</button>

                {this.state.is_show && (
                    <div className='show'>
                        <p className='voting-results'>Результаты голосования:</p>
                        <p className='winner'>Победитель:</p>
                        <img src={this.state.smiley[this.state.id_winner].image} alt=""/>
                        <p>Количество голосов: {this.state.smiley[this.state.id_winner].like}</p>

                        <button onClick={this.clear_results} className='button-results'>Очистити результати</button>
                    </div>
                )}
            </>
        );
    }
}

export default Homework;