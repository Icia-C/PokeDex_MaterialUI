import React from 'react';
import App from './App';
import {Link, Route, Switch} from 'react-router-dom';

class PokeCard extends React.Component{

	render(){
		return (
			<div className="pk__box--background">
				<div className="pk__box--open">
					<Link to='/'>
						<div className="pk__box--close">x</div>
					</Link>

					<Switch>
						<Route exact path="/" component={App} /> } />
					</Switch>
					<img className="pk__img--card" src={this.props.poke.sprites.front_default} alt="pokemon"/>
					<span>#{this.props.poke.id}</span>
					<h3>{this.props.poke.name}</h3>
					<div className="pk__type">
						{this.props.poke.types.map((type, i) =>
							<span key={i} className={`pk__type--box pk__type--${type.type.name}`}> {type.type.name} </span>)}
					</div>
					<p>{this.props.poke.weight} gr.</p>
					<p>{this.props.poke.height} m.</p>
				</div>
			</div>
		)
	}
}

export default PokeCard;
