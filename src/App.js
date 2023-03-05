
import './App.css';
import ClickCountertwo from './clickCountertwo';
import Counter from './Counter';

function App() {
  return (
    <>
      <Counter>
      {(count,incrementCount) => <ClickCountertwo count={count} incrementCount={incrementCount}></ClickCountertwo>}
        </Counter>
    </>
  );
}

export default App;
