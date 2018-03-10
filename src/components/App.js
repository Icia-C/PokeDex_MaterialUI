import React, { Component } from 'react';
import Pokemon from './Pokemon';

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

// 		let pokemons = this.state.pkStore;
// 		pokemons.push({name: 'bulbasur',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'asdf',id: 0,types: [{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'asfad',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'dafasf',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'rewhgfdg',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'kjhgkgkgh',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'trettwtgrwe',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'sfdgdsgds',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'sfgdsgd',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'bulbasur',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'sfdg',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'bulbafsdssur',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'fgsdfqwewr',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'bulbasurtewtgtrr',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
// slot: 1,type: {name: 'grass'}}],
// sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}});
// 		this.setState({
// 			pkStore: pokemons
// 		});


		const URL = 'https://pokeapi.co/api/v2/pokemon/';

		for (let i=1; i < 5; i++){
			let URL2 = URL + i ;

			fetch(URL2)// (2) llamada a la api limitada a 2 pokemons
				.then(response=> response.json()) // (3) transformamos a json
				.then(json => {
					let pokemon = this.state.pkStore;
					pokemon.concat(this.state.pkStore.id)
					pokemon.push(json);// (4) insertamos el objeto criaturas en el array
					//pokemon[json.id] = json
					this.setState({
						pkStore: pokemon
					});
				})
		}
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
				pokeMonster.map( // recorro el array y pinto los elementos que necesito de cada objeto
					(pokemon) => //i es un parámetro añadido para evitar un warning
						<Pokemon image={ pokemon.sprites.front_default }
										id={ pokemon.id }
										name={ pokemon.name }
										type={ pokemon.types } />
				)
			}</div>
		);
	}

	render() {
		return (
			<div className="box__container">
			<div>
				<input className="box__input" onChange={this.handleText} placeholder="Filtra pokemon por nombre..."></input></div>
				{this.showPokemons()}
			</div>
		);
	}
}

export default App;
