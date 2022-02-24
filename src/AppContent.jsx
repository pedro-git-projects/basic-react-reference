import React, { Component, Fragment } from 'react';

export default class AppContent extends Component {
	// defined a single key in the state
	state = {posts: []}	

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
				this.setState({posts: json})
			})
	}

	// function that takes one argument and writes to the console
	clickedItem = (x) => {
		console.log("clicked", x)
	}

	render() {
		return (
			<Fragment>				
				<p onMouseEnter = {this.anotherFunction} onMouseLeave={this.leftParagraph}> This is some text </p>
				<hr />
				<button onClick={this.fetchList} className="btn btn-primary" href="#">Fetch Data</button>
				<hr/>
				<p>Posts is {this.state.posts.length} items long</p>
				<ul>
					{/*iterating over posts with the js map*/}
					{this.state.posts.map((c) =>(
						<li key={c.id}>
							<a href="#!" onClick={() => this.clickedItem(c.id)}>
								{c.title}
							</a>
							</li>
					))}
				</ul>
			</Fragment>	
		)
	}
}
