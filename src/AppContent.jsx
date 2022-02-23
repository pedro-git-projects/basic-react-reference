import React, { Component } from 'react';

export default class AppContent extends Component {
	render() {
		return (
			<p>This is the content.
				<br/>
				<button className="btn btn-primary" href="#">My button</button>
			</p>
		)
	}
}
