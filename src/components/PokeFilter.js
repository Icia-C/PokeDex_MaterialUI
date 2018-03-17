import React from 'react';

class PokeFilter extends React.Component {
	render(){
		return(
			<div>
				<input className="box__input" onChange={this.props.pokefilter} placeholder="Filtra pokemon por nombre..."></input>
			</div>
		)
	}
}

export default PokeFilter;
