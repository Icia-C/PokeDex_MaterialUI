import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridList from 'material-ui/GridList';
import Pokemon from './Pokemon';
import Header from './Header';
import PokeFilter from './PokeFilter';

class App extends Component {
	constructor(props){
		super(props);

		this.handleText = this.handleText.bind(this);
		this.getPokemon = this.getPokemon.bind(this);
		this.getPokemons = this.getPokemons.bind(this);
		this.updateDimensions = this.updateDimensions.bind(this);

		this.state = {
			pkStore: [],
			pkArrSpecies: [],
			pkName: '',
			loading: true,
			gridCols: 6
		}
	}

	componentWillUpdate(nextProps, nextState){
		if (this.state.pkStore.length > 0) { //me aseguro de no sobreescribir el estado
			let pokemonDataLocal = {
				pkStore: this.state.pkStore,
				pkArrSpecies: this.state.pkArrSpecies
			};
			localStorage.setItem('pokemonData', JSON.stringify(pokemonDataLocal));
		}
	}

	componentDidMount(){
		let pokemonDataLocal = localStorage.getItem('pokemonData');

		if (pokemonDataLocal === null){ //no pokemon in localStorage, call API
			this.getPokemons()
		}
		else {
			pokemonDataLocal = JSON.parse(pokemonDataLocal)
			if (pokemonDataLocal.pkStore.length > 0){
				this.setState({
					pkStore: pokemonDataLocal.pkStore,
					pkArrSpecies: pokemonDataLocal.pkArrSpecies,
					loading: false
				});
			}
			else {
				this.getPokemons();
			}
		}
	}

	updateDimensions(){
		let nCols = 6;

		if (window.innerWidth <= 910){
			nCols = 3;
		}
		this.setState({
			gridCols: nCols
		})
	}


	getPokemons(){
		for (let i=1; i <= 25; i++){
			this.getPokemon(i);
		}
	}

	getPokemon(pkId){
		let URL2 = 'https://pokeapi.co/api/v2/pokemon/' + pkId ;

		fetch(URL2)
			.then(response => response.json())
			.then(json => {
				let pokemon = this.state.pkStore;
				pokemon.push(json); //Insert pokemon in array
				pokemon.sort((poka, pokb) => {
					if (poka.id < pokb.id)
						return -1;
					else if (poka.id > pokb.id)
						return 1;
					else
						return 0;
				})
				this.setState({
					pkStore: pokemon,
					loading: true
				});
				this.getSpecies(json);
			})
	}

	getSpecies(pokemon){
		const URL = 'https://pokeapi.co/api/v2/pokemon-species/' + pokemon.id;

		//Specie information
		fetch(URL)
			.then(response => response.json())
			.then(json => {
				let species = this.state.pkArrSpecies;
				species.push(json);
				this.setState({
					pkArrSpecies: species,
					loading: false
				});
				//If has evolves
				if (json.evolves_from_species != null){
					pokemon.hasParent = true;
					pokemon.parentName = json.evolves_from_species.name;
				}
				//this.callEvolutionChain(json.evolution_chain);
			});
	}

	//Input value
	handleText(event) {
		this.setState({
			pkName: event.target.value.toLowerCase()
		})
	};

	showPokemons(){
		let pokeMonster = this.state.pkStore;

		//Filter
		pokeMonster = this.state.pkStore.filter(pokemon =>     pokemon.name.toLowerCase().includes(this.state.pkName));

		if(this.state.loading === true){
			return(
				<div className="loader"></div>
			);
		}
		else{
			return (
				<GridList cols={this.updateDimensions}  cellHeight={270} className="pk__card">{
					pokeMonster.map( //recorro el array
						(pokemon, i) =>
							<Pokemon key={i} poke={pokemon}/>//recorro los tipos
					)}
				</GridList>
			);
		}
	}

	render() {
		return (
			<MuiThemeProvider>
				<Header />
				<PokeFilter pokefilter= {this.handleText} />
				{this.showPokemons()}
			</MuiThemeProvider>
		);
	}
}

export default App;
