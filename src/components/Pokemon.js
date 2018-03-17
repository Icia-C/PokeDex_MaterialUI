import React from 'react';
import PokeCard from './PokeCard';
import {Link, Route, Switch} from 'react-router-dom';

class Pokemon extends React.Component{

	render(){
		let poke = this.props.poke;

		return(
			<div className="pk__box">

				<Link to={`/pokemon/${this.props.poke.id}`}>
					<span>#{this.props.poke.id}</span>
					<img className="pk__img" src={this.props.poke.sprites.front_default} alt="pokemon"/>
					<h3>{this.props.poke.name}</h3>
					<div className="pk__type">
						{this.props.poke.types.map((type, i) =>
							<span key={i} className={`pk__type--box pk__type--${type.type.name}`}> {type.type.name} </span>)}
					</div>
				</Link>

				<Switch>
					<Route exact path={`/pokemon/${this.props.poke.id}`} render = {() =>
						<PokeCard poke={poke} /> } />
				</Switch>

			</div>
		)
	}
}

export default Pokemon;
//<Switch>
// 	<Router exact path='/' render={() =>
// 		<Pokemon
// 			pokePaint={this.showPokemons} />
// 	}/>
// </Switch>
