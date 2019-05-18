import React from 'react';
import './stylesheets/App.css';
import PokeList from './components/PokeList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Mi lista de Pokemons</h1>
        <PokeList />
      </div>
    );
  }
}

export default App;
