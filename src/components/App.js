import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Header from './Header';

class App extends Component {
	constructor(props){
		super(props);

		this.handleText = this.handleText.bind(this);

		this.state = {
			pkStore: [], //(1) Tenemos un array de criaturas
			pkName: '' //recogemos el valor del filtro
		}
	}

	componentDidMount(){

		let pokemons = this.state.pkStore;
		pokemons.push({name: 'ivysaur',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'sapo concho',id: 1,types: [{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'mi plantita',id: 2,types: [{slot: 2,type: {name: 'fire'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'vamo ninio',id: 3,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'Legucha',id: 6,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'ambrosio',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'normal'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'chiquetete',id: 41,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'bug'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'vamo ninio',id: 35,types: [{slot: 2,type: {name: 'water'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'sfgdsgd',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'bulbasur',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'sfdg',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'bulbafsdssur',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'fgsdfqwewr',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'bulbasurtewtgtrr',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}});
		this.setState({
			pkStore: pokemons
		});


		// const URL = 'https://pokeapi.co/api/v2/pokemon/';
		//
		// for (let i=1; i < 5; i++){
		// 	let URL2 = URL + i ;
		//
		// 	fetch(URL2)// (2) llamada a la api limitada a 2 pokemons
		// 		.then(response => response.json()) // (3) transformamos a json
		// 		.then(json => {
		// 			let pokemon = this.state.pkStore;
		// 			pokemon.push(json);// (4) insertamos el objeto criaturas en el array
		// 			pokemon.sort((poka, pokb) => {
		// 				if (poka.id < pokb.id)
		// 					return -1;
		// 				else if (poka.id > pokb.id)
		// 					return 1;
		// 				else
		// 					return 0;
		// 			})
		// 			this.setState({
		// 				pkStore: pokemon
		// 			});
		// 		})
		// }
	}

	//Recogemos el valor del input
	handleText(event){
		let inputText = event.target.value.toLowerCase();

		this.setState({
			pkName: inputText
		})
	}

	showPokemons(){
		let pokeMonster = this.state.pkStore;

		//Realizamos el filtrado
		pokeMonster = this.state.pkStore.filter(pokemon =>     pokemon.name.toLowerCase().includes(this.state.pkName));

		return (
			<div className="pk__card">{
				pokeMonster.map( // recorro el array
					(pokemon, i) =>
						<Pokemon key={i} image={pokemon.sprites.front_default}
										id={pokemon.id}
										name={pokemon.name}
										type={pokemon.types.map((t) => t.type.name)} />
				)
			}</div>
		);
	}

	render() {
		return (
			<div className="box__container">
			<Header />
			<div>
				<input className="box__input" onChange={this.handleText} placeholder="Filtra pokemon por nombre..."></input></div>
				{this.showPokemons()}
			</div>
		);
	}
}

export default App;
