import React from 'react';
import {Link} from 'react-router-dom';
import {Dialog, FlatButton} from 'material-ui';

class PokeCard extends React.Component{

	handleClose = () => {
		this.setState({open: false});
	};

	render(){
		const actions = [
			<Link className="link" to='/'>
				<FlatButton
					label="Close"
					primary={true}
					onClick={this.handleClose}
				/>
			</Link>
		];

		return (
			<Dialog title="Properties"
							actions={actions}
							modal={true}
							open={this.props.open}
			>
				<img className="pk__img--card" src={this.props.poke.sprites.front_default} alt="pokemon"/>
				<h2>#{this.props.poke.id} {this.props.poke.name}</h2>

				<div className="pk__type">
					{this.props.poke.types.map((type, i) =>
						<span key={i} className={`pk__type--box pk__type--${type.type.name}`}> {type.type.name} </span>)}
				</div>

				<div className="pk__type--profile">
					<h2> Profile</h2>
					<p><strong>Height:</strong> {this.props.poke.height} dm.</p>
					<p><strong>Weight:</strong> {this.props.poke.weight} gr.  </p>
					<p ><strong>Abilities:</strong> {this.props.poke.abilities.map((abi, i) => <span className="pk__abi" key={i} >{abi.ability.name} </span>)}</p>
					<p><strong>Evolves from:</strong> {this.props.poke.hasParent ?  `${this.props.poke.parentName}` : '' }</p>
					{(this.props.preEvo  !== null) ? <p><strong>Pre-evolution: {this.props.preEvo.name}</strong> </p> : ''}
					{(this.props.postEvo !== null) ? <p><strong>Evolution: {this.props.postEvo.name} </strong></p> : ''}
				</div>

			</Dialog>
		)
	}
}
export default PokeCard;
