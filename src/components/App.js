import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Header from './Header';
import PokeFilter from './PokeFilter';

class App extends Component {
	constructor(props){
		super(props);

		this.handleText = this.handleText.bind(this);
		this.getPokemon = this.getPokemon.bind(this);
		this.getPokemons = this.getPokemons.bind(this);

		this.state = {
			pkStore: [], //Mi array de criaturas
			pkName: '', //Recojo el valor del filtro
			pkArrSpecies: []
		}
	}

	componentDidMount(){

		this.getPokemons();
	}

	getPokemons(){
		for (let i=1; i <= 25; i++){
			this.getPokemon(i);
		}
	}

	getPokemon(pkId){
		let URL2 = 'https://pokeapi.co/api/v2/pokemon/' + pkId ;

		fetch(URL2) //llamada a la api limitada a 2 pokemons
			.then(response => response.json()) //transformamos a json
			.then(json => {
				let pokemon = this.state.pkStore;
				pokemon.push(json);//Insertamos el objeto criaturas en el array
				pokemon.sort((poka, pokb) => {
					if (poka.id < pokb.id)
						return -1;
					else if (poka.id > pokb.id)
						return 1;
					else
						return 0;
				})
				this.setState({
					pkStore: pokemon
				});
				this.getSpecies(json);
			})
	}

	getSpecies(pokemon){
		const URL = 'https://pokeapi.co/api/v2/pokemon-species/' + pokemon.id;

		//Llamada para coger la información de la especie
			fetch(URL)
				.then(response => response.json()) //transformamos a json
				.then(json => {
					let species = this.state.pkArrSpecies;
					species.push(json);//Insertamos el objeto criaturas en el array
					this.setState({
						pkArrSpecies: species
					})
					//Comprobamos si tiene preevolución
					if (json.evolves_from_species != null){
						pokemon.hasParent = true;
						pokemon.parentName = json.evolves_from_species.name;
					}
					//this.callEvolutionChain(json.evolution_chain);
				});
	}

	//Recogemos el valor del input
	handleText(event) {
		this.setState({
			pkName: event.target.value.toLowerCase()
		})
	};

	showPokemons(){
		let pokeMonster = this.state.pkStore;

		//Realizamos el filtrado
		pokeMonster = this.state.pkStore.filter(pokemon =>     pokemon.name.toLowerCase().includes(this.state.pkName));

		return (
			<div className="pk__card">{
				pokeMonster.map( //recorro el array
					(pokemon, i) =>
						<Pokemon key={i} poke={pokemon}/>//recorro los tipos
				)}
			</div>
		);
	}

	render() {
		return (
			<div className="box__container">
				<Header />
				<PokeFilter pokefilter= {this.handleText} />
				{this.showPokemons()}
			</div>
		);
	}
}

export default App;
