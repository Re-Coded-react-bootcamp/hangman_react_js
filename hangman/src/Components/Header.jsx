import React, { Component } from 'react';
import logo from "../Images/logo.png";
import '../Styles/Header.css'


export default class Header extends Component {
	render() {
		return (
			<div>
			        <img src={logo} className="App-logo" alt="logo" />
				<h3 class="lead">Use the alphabet below to guess the word, or click hint to get a clue.</h3>
			</div>
		)
	}
}
