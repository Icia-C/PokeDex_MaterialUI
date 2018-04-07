import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class PokeFilter extends React.Component {

	render(){
		return(
			<div>
				<TextField
					hintText="Pokemon"
					floatingLabelText="Find your favourite Pokemon"
					onChange={this.props.pokefilter}
				/>
				<FlatButton label="My ♥ Pokemon" primary={true} />
			</div>
		)
	}
}

export default PokeFilter;
