import React, { Component, Fragment } from 'react';

export default class AppContent extends Component {
	fetchList = () => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then(json => {
				console.log(json)
				let posts = document.getElementById("post-list")

				json.forEach(function(obj) {
					let li = document.createElement("li")
					li.appendChild(document.createTextNode(obj.title))
					posts.appendChild(li)
				})
			})
	}

	render() {
		return (
			<Fragment>				
				<button onClick={this.fetchList} className="btn btn-primary" href="#">Fetch Data</button>
				<hr/>
				<ul id="post-list"></ul>
			</Fragment>	
		)
	}
}
