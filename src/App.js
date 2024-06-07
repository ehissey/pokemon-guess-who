import './App.css';
import Board from './Board.js';

function App() {
  return (
    <div className="centered App"> 
      <h1>Guess Who? Pokémon Edition</h1>
      <br/>
      <Board />
      <br/>
      <div id="credits">
      <a href="https://github.com/ehissey">by ehissey</a>
      <br/>
        <a href="https://github.com/samihan-m">original project by samihan-m</a>
      </div>
      <br/>
    </div>
  );
}

export default App;
