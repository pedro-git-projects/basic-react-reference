import React, { Component, Fragment } from 'react';

export default class AppContent extends Component {

	anotherFunction = () => {
		console.log("Another funcion")
	}

	leftParagraph = () => {
		console.log("left the paragraph")
	}

	fetchList = () => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then(json => {
				console.log(json)
				let posts = document.getElementById("post-list")
				
				// the arrow syntax grants us access to the this of the class, being thus the prefered method
				this.anotherFunction()

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
				<p onMouseEnter = {this.anotherFunction} onMouseLeave={this.leftParagraph}> This is some text </p>
				<hr />
				<button onClick={this.fetchList} className="btn btn-primary" href="#">Fetch Data</button>
				<hr/>
				<ul id="post-list"></ul>
			</Fragment>	
		)
	}
}
