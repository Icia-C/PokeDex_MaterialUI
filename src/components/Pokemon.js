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
				<img className="pk__img" src={ this.props.image } alt="pokemon"/>
				<div className="pk__box--character">
					<p>#{ this.props.id } { this.props.name }</p>
					{this.selectType()}
				</div>
			</div>
		)
	}
}

export default Pokemon;
