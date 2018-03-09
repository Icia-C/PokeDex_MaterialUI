import React from 'react';

class Screen extends React.Component{
	render(){
		return(
			<div className="pk__box">
				<h2>#{ this.props.id }</h2>
				<h3>{ this.props.name }</h3>
			</div>
		)
	}
}

export default Screen;
// <ul>
// 	{pokemons.map((pokemon, i)=>
// 	<li key={i}>
// 		<Screen id={ pokemon.id } name={ pokemon.name } />
// 	</li>
// }
// </ul>
