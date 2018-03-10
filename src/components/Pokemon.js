import React from 'react';

class Pokemon extends React.Component{
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
			<span> {type} </span>
		)
	}


	render(){

		return(
			<div className="pk__box">
				<img className={`pk__img pk__img--${this.state.pkType[this.state.pkType.length - 1].type.name}`} src={ this.props.image } alt="pokemon"/>
				<p>#{ this.props.id } { this.props.name }</p>
				{this.selectType()}
			</div>
		)
	}
}

export default Pokemon;
