import './App.css';
import PokemonContainer from './containers/PokemonContainer';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <PokemonContainer />
      </main>
    </div>

  );
}

export default App;
