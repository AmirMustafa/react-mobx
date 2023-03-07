import './App.css';
import Roaster from './Roaster';
import MoneyForm from './MoneyForm';
import Athelete from './Athlete';
import { TeamStoreProvider } from "./teamStore"; 

const lebronJames = new Athelete("Lebron James", 37, 5_000_000);
const stephCurry = new Athelete("Steph Curry", 34, 7_000_000);

// Assume this coming from Backend - Simulating for now array
function getPlayersFromBackend(): Athelete[] {
  return [lebronJames, stephCurry];
}

function App() {
  const players = getPlayersFromBackend();

  return (
    <div className="App">
      <header className="App-header">
      <TeamStoreProvider players={players}>
        <Roaster />
        <MoneyForm />
      </TeamStoreProvider>
      </header>
    </div>
  );
}

export default App;
