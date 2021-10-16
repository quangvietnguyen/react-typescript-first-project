import './App.css';
import Todos from './components/todos';


const DUMMY = [
  'Learn React',
  'Learn Typescript'
]
function App() {
  return (
    <div>
      <Todos items={DUMMY}/>
    </div>
  );
}

export default App;
