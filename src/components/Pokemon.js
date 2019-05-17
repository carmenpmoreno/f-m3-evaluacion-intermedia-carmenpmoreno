import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Pokemon.css'

class Pokemon extends React.Component {
  render() {
    return (
      <li className="pokemon" key={this.props.item.id}>
        <h2 className="name"> {this.props.item.name}</h2>
        <img
          className="pokemonImage"
          src={this.props.item.url}
          alt={this.props.item.name}
        />
        <ul className="pokemonTypes">
          {this.props.item.types.map(types => {

            return <li className="pokemonType" key={this.props.item.name + this.props.item.types.indexOf(types)} >{types}</li>;
          })}
        </ul>
      </li>
    );
  }
}
Pokemon.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.string,
}
export default Pokemon;
