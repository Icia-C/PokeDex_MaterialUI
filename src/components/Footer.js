import React from 'react';
import control from '../img/control.png';
import ok from '../img/ok.png';
import x from '../img/x.png';

class Footer extends React.Component{
	render(){
		return (
			<div className="box__footer">
				<input className="box__footer--input" placeholder="POKÉMON NAME"></input>
				<div className="box__footer--components">
					<img className="img__control" src={control} alt="control"/>
					<div className="box__footer--descrition"><p></p></div>
					<div className="button__footer">
						<button className="btn__footer--delete btn__footer" type="button" name="button delete">
							<img className="img__x" src={x} alt="delete"/>
						</button>
						<button className="btn__footer--ok btn__footer" type="button" name="button ok">
							<img className="img__ok" src={ok} alt="ok"/>
						</button>
					</div>
				</div>
				<span className="box__footer--creator">Made by <br/><a href="https://github.com/Icia-C" target="_blank">@Icia-C <br/></a> 2018</span>
			</div>
		)
	}
}

export default Footer;
