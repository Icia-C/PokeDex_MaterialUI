import React from 'react';
import PokeCard from './PokeCard';
import {Link, Route, Switch} from 'react-router-dom';
// import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Pokemon extends React.Component{
	constructor(props){
		super(props);

		this.callSpecies = this.callSpecies.bind(this);

		this.state = {
			specie: {},
			hasParent: false,
			open: false,
		}
	}

	callSpecies(){
		const URL = 'https://pokeapi.co/api/v2/pokemon-species/' + this.props.poke.id;
		//Call for specie information
			fetch(URL)
				.then(response => response.json())
				.then(json => {
					this.setState({
						specie: json
					})
					//If has preevolution
					if (json.evolves_from_species != null){
						this.setState ({
							hasParent: true,
							preEvo: json.evolves_from_species//url + name
						})
					}
				});

	}

	handleOpen = () => {
		this.setState({open: true});
	};

	render(){
		let poke = this.props.poke;

		return(
			<div>
				<img className="pk__img" src={this.props.poke.sprites.front_default} alt="pokemon"/>
				<h3 className="pk__title">#{this.props.poke.id} {this.props.poke.name}</h3>
				<div className="pk__type">
					{this.props.poke.types.map((type, i) =>
						<span key={i} className={`pk__type--box pk__type--${type.type.name}`}> {type.type.name} </span>)}
				</div>
				<Link className="link" to={`/pokemon/${this.props.poke.id}`}>
					<RaisedButton label="More info" onClick={this.handleOpen} />
				</Link>
				<Switch>
					<Route exact path={`/pokemon/${this.props.poke.id}`} render = {() =>
						<PokeCard poke={poke}
											open={true}
						/> }
					/>
				</Switch>
			</div>
		);
	}
}

export default Pokemon;
