import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, CircularProgress} from 'material-ui';
import Pokemon from './Pokemon';
import Header from './Header';
import PokeFilter from './PokeFilter';

class App extends Component {
	constructor(props){
		super(props);

		this.handleText = this.handleText.bind(this);
		this.getPokemon = this.getPokemon.bind(this);
		this.getPokemons = this.getPokemons.bind(this);
		this.handlePokemonFav = this.handlePokemonFav.bind(this);
		this.activeFav = this.activeFav.bind(this);

		this.state = {
			pkStore: [],  // Pokemon data array
			pkArrSpecies: [], // Pokemon-species data array
			pkName: '',
			loading: true,
			pkFavourite: [],
			onlyFavs: false
		}
	}

	componentWillUpdate(nextProps, nextState){
		if (this.state.pkStore.length > 0) {
			// to be sure not to overriwrite the state if it is already set
			let pokemonDataLocal = {
				pkStore: this.state.pkStore,
				pkArrSpecies: this.state.pkArrSpecies,
				pkFavourite: this.state.pkFavourite
			};
			localStorage.setItem('pokemonData', JSON.stringify(pokemonDataLocal));
		}
	}

	componentDidMount(){
		let pokemonDataLocal = localStorage.getItem('pokemonData');

		if (pokemonDataLocal === null){
			// there are no pokemon in localStorage, call API
			this.getPokemons()
		}
		else {
			pokemonDataLocal = JSON.parse(pokemonDataLocal)
			if (pokemonDataLocal.pkStore.length > 0){
				this.setState({
					pkStore: pokemonDataLocal.pkStore,
					pkArrSpecies: pokemonDataLocal.pkArrSpecies,
					pkFavourite: pokemonDataLocal.pkFavourite,
					loading: false
				});
			}
			else {
				this.getPokemons();
			}
		}
	}

	getPokemons(){
		for (let i=1; i <= 26; i++){
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
				//If has evolution
				if (json.evolves_from_species != null){
					pokemon.hasParent = true;
					pokemon.parentName = json.evolves_from_species.name;
				}
			});
	}

	handlePokemonFav(pokemonid) {

	let favourites = this.state.pkFavourite;
		if (this.state.pkFavourite.includes(pokemonid)){
			//if this pokemon was fav, delete it from the fav pokemon array
			//favourites = favourites.splice(favourites.indexOf(pokemonid), 1);
			favourites = favourites.filter(id => id !== pokemonid)
		}
		else {
			//add to the fav pokemon array
			favourites.push(pokemonid)
		}
		this.setState({
			pkFavourite: favourites
		});
	}

	activeFav(){
		this.setState({
			onlyFavs: !this.state.onlyFavs
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

		if (this.state.onlyFavs) {
			pokeMonster = pokeMonster.filter(pokemon => this.state.pkFavourite.includes(pokemon.id));
		}

		if(this.state.loading === true){
			return(
				<CircularProgress size={80} thickness={5} />
			);
		}
		else{
			return (
				<GridList className="grid" cellHeight={'auto'} >
					{pokeMonster.map((pokemon, i) =>
						<Pokemon key={i} poke={pokemon} fav={this.state.pkFavourite.includes(pokemon.id)} handlePokemonFav={this.handlePokemonFav}/>
					)}
				</GridList>
			);
		}
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className='box__container'>
					<Header />
					<PokeFilter pokefilter={this.handleText} activeFav={this.activeFav}/>
					{this.showPokemons()}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
