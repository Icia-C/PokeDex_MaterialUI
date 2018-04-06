import React from 'react';
import TextField from 'material-ui/TextField';

class PokeFilter extends React.Component {

	render(){
		return(
			<TextField
				hintText="Pokemon"
				floatingLabelText="Find your favourite Pokemon"
				onChange={this.props.pokefilter}
			/>
		)
	}
}

export default PokeFilter;
