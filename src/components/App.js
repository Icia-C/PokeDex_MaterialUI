import React, { Component } from 'react';
//import Screen from './Screen';

class App extends Component {
	constructor(props){
		super(props);

		//this.handleText = this.handleText.bind(this);

		this.state = {
			pokemons: [], //(1) Tenemos un array de criaturas

			//pkName: '', //recogemos el valor del filtro
		}
	}

	componentDidMount(){
		const URL = 'https://pokeapi.co/api/v2/pokemon/';

		for (let i=1; i < 3; i++){
			let URL2 = URL + i ;
			fetch(URL2)// (2) llamada a la api limitada a 2 pokemons
				.then(response=> response.json())//transformamos a json
				.then(json => {
					this.setState({
						pokemons: json
					});
					console.log(this.state.pokemons);
				})
		}

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
	// showPokemons(){
	// 	let poketMonster = this.state.pokemons;
	//
	// 		// wizardsToShow = this.state.characters.filter(wizard =>     wizard.name.toLowerCase().includes(this.state.nameFilter));//include devuelve true si nameFilter es una subcadena de name en minúsculas
	// 		// //console.log(wizardsToShow.length);
	//
	//
	// 	return (
	// 		<div className="">{
	// 			poketMonster.map(//recorro el array y pinto los elementos que necesito de cada objeto
	// 				(pokemon) =>//i es un parámetro añadido para evitar un warning
	// 					<Screen key={pokemon.name} id={pokemon.id} name={pokemon.name} />
	// 			)
	// 		}</div>
	// 	);
	// }

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
				<input className="box__input" onChange={this.handleText} placeholder="Filtra pokemons por nombre..."></input>
			</div>
		);
	}
}

export default App;
