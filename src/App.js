import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

const initialCount = [
  {value: 5, id: 1}
]

function App() {

  const [counts, setCounts] = useState(initialCount);

  return (
    <div>
      <h2>Counters</h2>

      {counts.map(el => <li key={el.id}>
        <Button color="secondary" size="sm">-1</Button>
        {' '}
        {el.value}
      </li>)}
    </div>
  );
}

export default App;
