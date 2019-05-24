import React from 'react';
import Pokemon from './Pokemon';
import './PokeList.css';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    return (
      <ul className="pokelist">
        {this.props.pokemonList.map(item => {
          return (
            <li className="pokemonItem" key={item.id}>
              <Pokemon key={item.id} item={item} />
            </li>
          );
        })}
      </ul>
    );
  }
}
PokeList.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.object)
};

export default PokeList;
