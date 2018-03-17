import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Header from './Header';
import PokeFilter from './PokeFilter';
import { Router, Switch } from 'react-router-dom';

class App extends Component {
	constructor(props){
		super(props);

		this.handleText = this.handleText.bind(this);

		this.state = {
			pkStore: [], //Mi array de criaturas
			pkName: '' //Recojo el valor del filtro
		}
	}

	componentDidMount(){
		let pokemons = this.state.pkStore;
		pokemons.push({name: 'bulbasur',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
		slot: 1,type: {name: 'grass'}}],
		sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'asdf',id: 0,types: [{
		 slot: 1,type: {name: 'grass'}}],
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'asfad',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'dafasf',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'rewhgfdg',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'kjhgkgkgh',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'trettwtgrwe',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'sfdgdsgds',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
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
		// for (let i=1; i <= 25; i++){
		// 	let URL2 = URL + i ;
		//
		// 	fetch(URL2) //llamada a la api limitada a 2 pokemons
		// 		.then(response => response.json()) //transformamos a json
		// 		.then(json => {
		// 			let pokemon = this.state.pkStore;
		// 			pokemon.push(json);//Insertamos el objeto criaturas en el array
		// 			pokemon.sort((poka, pokb) => {
		// 				if (poka.id < pokb.id)
		// 					return -1;
		// 				else if (poka.id > pokb.id)
		// 					return 1;
		// 				else
		// 					return 0;
		// 			})
				// 	this.setState({
				// 		pkStore: pokemon
				// 	});
				// })
		// }
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
						<Pokemon key={i} image={pokemon.sprites.front_default}
										id={pokemon.id}
										name={pokemon.name}
										type={pokemon.types.map((t) => t.type.name)} />//recorro los tipos
				)
			}</div>
		);
	}

	render() {
		return (
			<div className="box__container">
				<Header />
				<PokeFilter pokefilter= { this.handleText}
				/>
				{this.showPokemons()}
			</div>
		);
	}
}

export default App;
// <Switch>
// 	<Router exact path='/' component= {  } />
// </Switch>
