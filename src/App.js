import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const initialCount = [
    {value: 5, id: 1}
]

function App() {

    const [counts, setCounts] = useState(initialCount);

    const minusOne = (countId) => {
        const newCounts = counts.map((el) => {
            if (el.id === countId){el.value--;}
            return el;
        })
        setCounts(newCounts);
    }

    const plusOne = (countId) => {
        const newCounts = counts.map((el) => {
            if(el.id === countId){el.value++;}
            return el;
        })
        setCounts(newCounts);
    }

    const removeCounter = (countId) => {
        const newCounts = counts.filter(el => {
            if(el.id !== countId){return el;}
        })
        setCounts(newCounts);
    }

    const addCounter = () => {
        const newCounts = Math.floor(Math.random()*10);
        setCounts([...counts, {value: newCounts, id: counts.length}]);
    }

    return (
        <div>
            <h2>Counters</h2>
            {counts.map((el) =>
                <li key={el.id}>
                    <button onClick={() => minusOne(el.id)} type="button" className="btn btn-secondary btn-sm">-1</button>
                    {' '}
                    {el.value}
                    {' '}
                    <button onClick={() => plusOne(el.id)} type="button" className="btn btn-secondary btn-sm">+1</button>
                    {' '}
                    <button onClick={() => removeCounter(el.id)} type="button" className="btn btn-secondary btn-sm">Remove counter</button>
                </li>)}
            <button onClick={() => addCounter()} type="button" className="btn btn-secondary btn-sm">Add counter</button>
        </div>
    );
}

export default App;
