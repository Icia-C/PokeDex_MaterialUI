import React from 'react';
import pokeball from '../img/pokeball.png';

class Header extends React.Component{
	render(){
		return (
			<div className="box__header">
				<div className="box__circle--ext">
					<p className="box__circle--int"></p>
				</div>
				<div className="box__tittle">
					<p>POKÉDEX OF ANOMALIES</p>
					<img className="img__pokeball" src={pokeball} alt="POKEBALL"/>
				</div>
			</div>
		)
	}
}

export default Header;
