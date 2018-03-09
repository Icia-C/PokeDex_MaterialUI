import React from 'react';

class Screen extends React.Component{
	constructor(props){
		super(props);

		this.selectType = this.selectType.bind(this);

		this.state = {
			pkType: this.props.type //esto es un array
		}
	}

	//Función que recorre los tipos y los pinta.
	selectType(){
		let type = '';

		for (let i = 0; i < this.state.pkType.length; i++) {
			type = type + ' ' + this.state.pkType[i].type.name
		}
		return (
			<p> {type} </p>
		)
	}

	render(){

		return(
			<div className="pk__box">
				<img className="pk__img" src={ this.props.image } alt="pokemon"/>
				<h2>#{ this.props.id }</h2>
				<h3>{ this.props.name }</h3>
				{this.selectType()}
			</div>
		)
	}
}

export default Screen;
