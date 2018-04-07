import React from 'react';
import {Link} from 'react-router-dom';
import {Dialog, FlatButton} from 'material-ui';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

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
				<Checkbox
					onClick={this.handleLike}
					checkedIcon={<ActionFavorite />}
					uncheckedIcon={<ActionFavoriteBorder />}
					label="Like"
				/>
				<div className="pk__modal">
					<Paper className="pk__modal--paper" zDepth={3} circle={true}>
						<img className="pk__img--card" src={this.props.poke.sprites.front_default} alt="pokemon"/>
					</Paper>
					<h2 className="pk__title" >#{this.props.poke.id} {this.props.poke.name}</h2>
				</div>

				<div className="pk__type">
					{this.props.poke.types.map((type, i) =>
						<span key={i} className={`pk__type--box pk__type--${type.type.name}`}> {type.type.name} </span>)}
				</div>

				<div className="pk__type--profile">
					<h2> Profile</h2>
					<p><strong>Height:</strong> {this.props.poke.height} dm.</p>
					<p><strong>Weight:</strong> {this.props.poke.weight} gr.  </p>
					<p ><strong>Abilities:</strong> {this.props.poke.abilities.map((abi, i) => <span className="pk__title" key={i} >{abi.ability.name} </span>)}</p>
					<p className="pk__title"><strong>Evolves from:</strong> {this.props.poke.hasParent ?  `${this.props.poke.parentName}` : 'First evolution' }</p>
				</div>
			</Dialog>
		)
	}
}
export default PokeCard;
