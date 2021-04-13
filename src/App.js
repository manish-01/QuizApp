import Menu from './components/Menu'
import Quiz from './components/Quiz'
import EndScreen from './helpers/EndScreen'
import './App.css';
import {useState} from 'react'
import {GameStateContext} from './helpers/Contexts'
import EndScren from './helpers/EndScreen';
 
function App() {

  //['menu','playing', 'finished']
  const [gameState, setGameState] = useState('menu');
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value={{gameState, setGameState, userName, setUserName}}>
        {gameState === 'menu' && <Menu/> }
        {gameState === 'playing' && <Quiz/>}
        {gameState === 'finished' && <EndScren/>}
      </GameStateContext.Provider>
      
    </div>
  );
}

export default App;
