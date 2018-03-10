import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Header from './Header';

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
		const URL = 'https://pokeapi.co/api/v2/pokemon/';

		for (let i=1; i <= 25; i++){
			let URL2 = URL + i ;

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
				pokeMonster.map( //recorro el array
					(pokemon, i) =>
						<Pokemon key={i} image={pokemon.sprites.front_default}
										id={pokemon.id}
										name={pokemon.name}
										type={pokemon.types.map((t) => t.type.name)} /> //recorro los tipos
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
