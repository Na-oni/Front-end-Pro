import React, { useState } from 'react';

//import SmileyList from './SmileyList.js';
import './Homework.css';

import image_0 from './image/0.png';
import image_1 from './image/1.png';
import image_2 from './image/2.png';
import image_3 from './image/3.png';
import image_4 from './image/4.png';

function Homework() {
    const [smiley, setSmiley] = useState([
        { id: 0, like: 0, image: image_0 },
        { id: 1, like: 0, image: image_1 },
        { id: 2, like: 0, image: image_2 },
        { id: 3, like: 0, image: image_3 },
        { id: 4, like: 0, image: image_4 },
    ]);
    const [is_show, setIsShow] = useState(false);
    const [id_winner, setIdWinner] = useState(0);


    const click_img = (id) => {
        setSmiley((prev_smiley) =>
            prev_smiley.map((item) =>
                item.id === id ? { ...item, like: item.like + 1 } : item
            )
        );
    };

    const get_results = () => {
        const winner = smiley.reduce((max, item) =>
            item.like > max.like ? item : max
        );
        setIdWinner(winner.id);
        setIsShow(true);
    };

    const clear_results = () => {
        setSmiley((prev_smiley) =>
            prev_smiley.map((item) => ({ ...item, like: 0 }))
        );
        setIsShow(false);
        setIdWinner(0);
    };

    return (
        <>
            <span className='main-text'>Голосование за лучший смайлик</span>
            <div className='grid'>
                {smiley.map((item) => (
                    <div className='item' onClick={() => click_img(item.id)} key={item.id}>
                        <img src={item.image} alt=""/>
                        <span>{item.like}</span>
                    </div>
                ))}
            </div>

            <button className='button-results' onClick={get_results}>Show results</button>

            {is_show && (
                <div className='show'>
                    <p className='voting-results'>Результаты голосования:</p>
                    <p className='winner'>Победитель:</p>
                    <img src={smiley[id_winner].image} alt=""/>
                    <p>Количество голосов: {smiley[id_winner].like}</p>

                    <button onClick={clear_results} className='button-results'>Очистити результати</button>
                </div>
            )}
        </>
    );
}

export default Homework;