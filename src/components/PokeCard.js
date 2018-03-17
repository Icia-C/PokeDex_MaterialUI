import React from 'react';
import App from './App';
import {Link, Route, Switch} from 'react-router-dom';

class PokeCard extends React.Component{

	render(){
		return (
			<div className="pk__box--background">
				<div className="pk__box--open">
					<Link className="link" to='/'>
						<div className="btn__pk--close" >x</div>
					</Link>

					<Switch>
						<Route exact path="/" component={App} /> } />
					</Switch>

					<img className="pk__img--card" src={this.props.poke.sprites.front_default} alt="pokemon"/>
					<h2>#{this.props.poke.id} {this.props.poke.name}</h2>

					<div className="pk__type">
						{this.props.poke.types.map((type, i) =>
							<span key={i} className={`pk__type--box pk__type--${type.type.name}`}> {type.type.name} </span>)}
					</div>

					<div className="pk__type--profile">
						<h2> Profile</h2>
						<p><strong>Height: </strong> {this.props.poke.height} dm.</p>
						<p><strong>Weight: </strong> {this.props.poke.weight} gr.  </p>
						<p ><strong>Abilities: </strong>
						{this.props.poke.abilities.map((abi, i) =>
							<span className="pk__abi" key={i} >{abi.ability.name}</span>)}</p>
						{(this.props.preEvo  !== null) ? <p><strong>Pre-evolution: {this.props.preEvo.name}</strong> </p> : ''}
						{(this.props.postEvo !== null) ? <p><strong>Evolution: {this.props.postEvo.name} </strong></p> : ''}
					</div>

				</div>
			</div>
		)
	}
}
export default PokeCard;
