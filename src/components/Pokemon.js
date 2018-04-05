import React from 'react';
import PokeCard from './PokeCard';
import {Link, Route, Switch} from 'react-router-dom';

class Pokemon extends React.Component{
	constructor(props){
		super(props);

		this.callSpecies = this.callSpecies.bind(this);

		this.state = {
			specie: {},
			pkEvo: [],//Array de evoluciones
			hasParent: false,
			evolutionChain: {},
			preEvo: null,
			postEvo: null
		}
	}

	componentWillMount(){
		//this.callSpecies()
	}

	callSpecies(){
		const URL = 'https://pokeapi.co/api/v2/pokemon-species/' + this.props.poke.id;
		//Llamada para coger la información de la especie
			fetch(URL)
				.then(response => response.json()) //transformamos a json
				.then(json => {
					this.setState({
						specie: json
					})
					//Comprobamos si tiene preevolución
					if (json.evolves_from_species != null){
						this.setState ({
							hasParent: true,
							preEvo: json.evolves_from_species//url + name
						})
					}
					//this.callEvolutionChain(json.evolution_chain);
				});

	}
	callEvolutionChain(evolution_chain){
		//Llamada para coger la información de la cadena de evolución
		const URL_EC = evolution_chain.url;

		fetch(URL_EC)
			.then(response2 => response2.json()) //transformamos a json
			.then(json2 => {
				this.setState ({
					evolutionChain: json2
				});

				//Si no tiene padre (this.hasParent: false) y si tiene hijo este será la primera especie en la cadena de evolución
				if (!this.state.hasParent){
					if (json2.chain.evolves_to.length > 0){
						//tiene hijos en la cadena de evolución, su evolución será el primero
						this.setState({
							postEvo: json2.chain.evolves_to[0].species
						})
					}
				}
				else {//sí que tiene padre
					// buscamos en la cadena de evolucion al primer hijo de este pokemon
					let childFound = false;
					//referencia al primer pokemon de la cadena de evolución (species: url + name)
					let actualEvolvesTo = json2.chain.evolves_to;
					while (!childFound && actualEvolvesTo.length > 0){
						//buscamos el identificador del Pokemon en la url de su especie (ej: en la url https://pokeapi.co/api/v2/pokemon-species/3/ buscamos el 3)
						let auxArr = actualEvolvesTo[0].species.url.split('/');
						let nextSpecieId = auxArr[auxArr.length - 2];
						// si el pokemon actual de la cadena de evolución es el de este componente Pokemon, el hijo será justo el siguiente en la cadena
						//para comprobar si el identificador de este pokemon es igual al que hemos recogido de la cadena de evolución, pasamos estos ids a enteros
						if (parseInt(nextSpecieId, 10) === parseInt(this.props.poke.id, 10)){
							// si hay otro pokemon en la cadena será su hijo
							if (actualEvolvesTo[0].evolves_to.length > 0) {
								this.setState({
									postEvo: actualEvolvesTo[0].evolves_to[0].species
								});
								childFound = true; //para salir del bucle
							}
							else {
								//no quedan más pokemon que mirar en la cadena de evolución
								//no tiene evolución
								childFound = true; //para salir del bucle
							}
						}
						else {
							//seguimos buscando con el siguiente pokemon de la cadena de evolucion
							actualEvolvesTo = actualEvolvesTo[0].evolves_to;
						}
					}
				}
		});
	}

	render(){
		let poke = this.props.poke;

		return(
			<div className="pk__box">

				<Link className="link" to={`/pokemon/${this.props.poke.id}`}>
					<span className="span__id">#{this.props.poke.id}</span>
					<img className="pk__img" src={this.props.poke.sprites.front_default} alt="pokemon"/>
					<h3>{this.props.poke.name}</h3>
					<div className="pk__type">
						{this.props.poke.types.map((type, i) =>
							<span key={i} className={`pk__type--box pk__type--${type.type.name}`}> {type.type.name} </span>)}
					</div>
					<p> {this.props.poke.hasParent ? `Evolves from: ${this.props.poke.parentName}` : '' }</p>
				</Link>

				<Switch>
					<Route exact path={`/pokemon/${this.props.poke.id}`} render = {() =>
						<PokeCard poke={poke}
						 					preEvo={this.state.preEvo}
											postEvo={this.state.postEvo} /> } />
				</Switch>

			</div>
		)
	}
}

export default Pokemon;
