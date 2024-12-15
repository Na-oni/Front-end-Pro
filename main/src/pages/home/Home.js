import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counter';

import './Home.css';

function Home() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="main-container">
            <p className='counter'>Counter: {count}</p>

            <div className='counter-buttons'>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    );
}

export default Home;