import React from 'react';
import {TextField, Toggle} from 'material-ui';

class PokeFilter extends React.Component {
	render(){
		return(
			<div>
				<TextField
					hintText="Pokemon"
					floatingLabelText="Find your favourite Pokemon"
					onChange={this.props.pokefilter}
				/>
				<Toggle
					label="Favourites"
					labelPosition="right"
					onClick={this.props.activeFav}
				/>
			</div>
		)
	}
}

export default PokeFilter;
