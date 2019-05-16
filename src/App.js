import React from 'react';
import './App.css';
import PokeList from './components/PokeList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Mi lista de Pokemons</h1>
        <PokeList />
      </div>
    );
  }
}

export default App;
