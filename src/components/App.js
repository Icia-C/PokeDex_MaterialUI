import React, { Component } from 'react';
import Screen from './Screen';

class App extends Component {
	constructor(props){
		super(props);

		//this.handleText = this.handleText.bind(this);

		this.state = {
			pkStore: [], //(1) Tenemos un array de criaturas
			//pkName: '', //recogemos el valor del filtro
		}
	}

	componentDidMount(){

		let pokemons = this.state.pkStore;
		pokemons.push({name: 'bulbasur',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
slot: 1,type: {name: 'grass'}}],
sprites: {front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}}, {name: 'asdf',id: 0,types: [{slot: 2,type: {name: 'poison'}},{
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


		/*const URL = 'https://pokeapi.co/api/v2/pokemon/';

		for (let i=1; i < 2; i++){
			let URL2 = URL + i ;

			fetch(URL2)// (2) llamada a la api limitada a 2 pokemons
				.then(response=> response.json()) // (3) transformamos a json
				.then(json => {
					let pokemons = this.state.pkStore;
					pokemons.push(json); // (4) insertamos el objeto criaturas en el array
					this.setState({
						pkStore: pokemons
					});
					console.log(this.state.pkStore[0].types[0]);
				})
		}*/
	}
	//
	// //Para recoger el valor del box__input
	// handleText(event){
	// 	let inputText = event.target.value.toLowerCase();
	//
	// 	this.setState({
	// 		pkName: inputText
	// 	})
	// }
	//
	showPokemons(){
		var pokeMonster = this.state.pkStore;
		console.log(pokeMonster)

			// pkStore = this.state.pkStore.filter(pokemon =>     po.name.toLowerCase().includes(this.state.nameFilter));//include devuelve true si nameFilter es una subcadena de name en minúsculas
			// //console.log(wizardsToShow.length);

		return (
			<div className="pk__card">{
				pokeMonster.map( // recorro el array y pinto los elementos que necesito de cada objeto
					(pokemon) => //i es un parámetro añadido para evitar un warning
						<Screen image={ pokemon.sprites.front_default }
										id={ pokemon.id }
										name={ pokemon.name }
										type={ pokemon.types } />
				)
			}</div>
		);
	}

			// <ul>
			// {
			// 	// poketMonster.map(
			// 	// 	pokemon =>
			// 		<li>
			// 			<Screen image={pokemon.species.url} id={pokemon.id} name={pokemon.name} //type={pokemon.types.type.name}
			// 			/>
			// 		</li>
			// 	)
			// }</ul>
	// 	);
	// }

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
