import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Header from './Header';
import PokeFilter from './PokeFilter';

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
		slot: 1,type: {name: 'grass'}}],"abilities": [
    {
      "slot": 3,
      "is_hidden": true,
      "ability": {
        "url": "https://pokeapi.co/api/v2/ability/34/",
        "name": "chlorophyll"
      }
    },
    {
      "slot": 1,
      "is_hidden": false,
      "ability": {
        "url": "https://pokeapi.co/api/v2/ability/65/",
        "name": "overgrow"
      }
    }
  ],"weight": 130,
		sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'asdf',id: 4,types: [{
		 slot: 1,type: {name: 'grass'}}],
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'asfad',id: 3,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],"abilities": [
    {
      "slot": 3,
      "is_hidden": true,
      "ability": {
        "url": "https://pokeapi.co/api/v2/ability/34/",
        "name": "chlorophyll"
      }
    },
    {
      "slot": 1,
      "is_hidden": false,
      "ability": {
        "url": "https://pokeapi.co/api/v2/ability/65/",
        "name": "overgrow"
      }
    }
  ],"weight": 130,
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'dafasf',id: 2,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'rewhgfdg',id: 1,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'kjhgkgkgh',id: 8,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'trettwtgrwe',id: 7,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'sfdgdsgds',id: 6,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'sfgdsgd',id: 5,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],"weight": 130,
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'bulbasur',id: 90,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],"weight": 130,
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'sfdg',id:98,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'bulbafsdssur',id: 34,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'fgsdfqwewr',id: 67,types: [{slot: 2,type: {name: 'poison'}},{
		 slot: 1,type: {name: 'grass'}}],
		 sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'bulbasurtewtgtrr',id: 33,types: [{slot: 2,type: {name: 'poison'}},{
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
						<Pokemon key={i} poke={pokemon} />//recorro los tipos
				)
			}</div>

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
