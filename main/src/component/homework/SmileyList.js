import { useState, forwardRef, useImperativeHandle } from 'react';

const SmileyList = forwardRef((props, ref) => {
    const [smiley, setSmiley] = useState(props);

    const enlarge = (id) => {
        setSmiley((state) =>
            state.map((item) =>
                item.id === id ? { ...item, like: item.like + 1 } : item
            )
        );
    };

    const get_results = () => {
        let id_winner = -1;

        smiley.forEach((item) => {
            if (id_winner === -1 || item.like > smiley[id_winner].like) {
                id_winner = item.id;
            }
        });

        if (id_winner !== -1) {
            setSmiley((state) => ({ ...state, is_show: true, id_winner: id_winner }));
        }
    }

    const clear_results = () => {
        setSmiley((state) => {
            state.map((item) => ({
                ...item,
                like: 0,
            }));
        });
    }

    useImperativeHandle(ref, () => ({
        get_results,
        clear_results,
    }));

    return (
        <>
            {smiley.map((item) => (
                <div className='item' onClick={() => enlarge(item.id)}>
                    <img src={item.image} alt=""/>
                    <span>{item.like}</span>
                </div>
            ))}
        </>
    );
};

export default SmileyList;