import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {Paper, RaisedButton} from 'material-ui';
import PokeCard from './PokeCard';

class Pokemon extends React.Component{
	constructor(props){
		super(props);

		this.handleOpen = this.handleOpen.bind(this);

		this.state = {
			hasParent: false,
			open: false,
		}
	}

	handleOpen() {
		this.setState({open: true});
	};

	render(){
		let poke = this.props.poke;

		return(
			<Paper
					className={`box__paper box__paper--fav-${this.props.fav}`}
					zDepth={2}
			>
				<img className="pk__img" src={this.props.poke.sprites.front_default} alt="pokemon"/>
				<h3 className="pk__title">#{this.props.poke.id} {this.props.poke.name}</h3>
				<div className="pk__type">
					{this.props.poke.types.map((type, i) =>
						<span key={i} className={`pk__type--box pk__type--${type.type.name}`}> {type.type.name} </span>)}
				</div>
				<Link to={`/pokemon/${this.props.poke.id}`}>
					<RaisedButton
							label="More info"
							onClick={this.handleOpen}
					/>
				</Link>
				<Switch>
					<Route exact path={`/pokemon/${this.props.poke.id}`} render = {() =>
						<PokeCard
								poke={poke}
								open={true}
								fav={this.props.fav}
								handlePokemonFav={this.props.handlePokemonFav}
						/> }
					/>
				</Switch>
			</Paper>
		);
	}
}

export default Pokemon;
