import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridList from 'material-ui/GridList';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import Pokemon from './Pokemon';
import Header from './Header';
import PokeFilter from './PokeFilter';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
		margin: 0,
  },
  gridList: {
    // width: 500,
    // height: 450,
  },
};

class App extends Component {
	constructor(props){
		super(props);

		this.handleText = this.handleText.bind(this);
		this.getPokemon = this.getPokemon.bind(this);
		this.getPokemons = this.getPokemons.bind(this);
		this.updateDimensions = this.updateDimensions.bind(this);

		this.state = {
			pkStore: [],  // Pokemon data array
			pkArrSpecies: [], // Pokemon-species data array
			pkName: '',
			loading: true,
			gridCols: 6
		}
	}

	componentWillUpdate(nextProps, nextState){
		if (this.state.pkStore.length > 0) {
			// to be sure not to overriwrite the state if it is already set
			let pokemonDataLocal = {
				pkStore: this.state.pkStore,
				pkArrSpecies: this.state.pkArrSpecies
			};
			localStorage.setItem('pokemonData', JSON.stringify(pokemonDataLocal));
		}
	}

	componentDidMount(){
		// call updateDimensions when the screen witdh changes
		window.addEventListener("resize", this.updateDimensions);

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

		if (window.innerWidth <= 470){
			nCols = 1;
		} else if (window.innerWidth <= 700) {
			nCols = 2;
		} else if (window.innerWidth <= 1000){
			nCols = 3;
		} else if (window.innerWidth <= 1100){
			nCols = 4;
		} else if (window.innerWidth <= 1400){
			nCols = 5;
		}

		this.setState({gridCols: nCols})
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
				//If has evolution
				if (json.evolves_from_species != null){
					pokemon.hasParent = true;
					pokemon.parentName = json.evolves_from_species.name;
				}
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
				<CircularProgress size={80} thickness={5} />
			);
		}
		else{
			return (
				<GridList style={styles.gridList} cellHeight={270}>
					{pokeMonster.map((pokemon, i) =>
						<Paper className="box__paper" key={i} zDepth={2}>
							<Pokemon key={i} poke={pokemon}/>
						</Paper>
					)}
				</GridList>
						// 			{pokeMonster.map((pokemon,i) => (
						// 	 <GridTile
						// 		 key={i}
						// 		 title={pokemon.name}
						// 		 subtitle={<span>by <b>{pokemon.name}</b></span>}
						// 	 >
						// 		 <img className="pk__img" src={pokemon.sprites.front_default} />
						// 	 </GridTile>
						//  ))}
						// </GridList>
			);
		}
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className='box__container'>
					<Header />
					<PokeFilter pokefilter= {this.handleText} />
					{this.showPokemons()}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
