import React, { Component } from 'react';

class App extends Component {
	constructor(props){
		super(props);

		//bindeos

		this.state = {
			//estados
		}
	}

	componentDidMount(){//Llamada a la api
		fetch('aquí va la api')
			.then(response=> response.json())//transformamos a json
			.then(json => {
				this.setState({
					//cambiamos los estados
				})
			})
	}

	//Para recoger el valor del box__input
	handleText(event){
		let inputText = event.target.value.toLowerCase();

	}

	render() {
		return (
			<div className="box__container">
				<input className="box__input" placeholder="Filtra pokemons por nombre..."></input>
			</div>
		);
	}
}

export default App;
