import React, { Component } from "react";

export default class AppHeader extends Component {
	render() {

		return (
				/*Acessing the title property via the props object*/
				<h1>{this.props.title}</h1>
		)
	}
}
