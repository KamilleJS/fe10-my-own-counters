import {useState} from 'react';

const initialCount = [
  {value: 5, id: 1}
]

function App() {

  const [counts, setCounts] = useState(initialCount);

  return (
    <div>
      <h2>Counters</h2>

      {counts.map(el => <li key={el.id}>
        {el.value}
      </li>)}
    </div>
  );
}

export default App;
