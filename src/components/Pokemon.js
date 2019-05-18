import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { id, name, url, types } = this.props.item;
    return (
      <li className="pokemon" key={id}>
        <img className="pokemonImage" src={url} alt={name} />
        <h2 className="name"> {name}</h2>
        <ul className="pokemonTypes">
          {types.map(type => {
            return (
              <li className="pokemonType" key={types.indexOf(type)}>
                {type}
              </li>
            );
          })}
        </ul>
      </li>
    );
  }
}
Pokemon.propTypes = {
  item: PropTypes.object,
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
};
export default Pokemon;
