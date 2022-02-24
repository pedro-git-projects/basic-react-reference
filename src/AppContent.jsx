import React, { Component, Fragment } from 'react';

export default class AppContent extends Component {
	// defined a single key in the state
	// each component manages it's own state
	// to share component states we need to lift it's state
	state = {posts: []}	

	constructor(props) {
		super(props)
		this.handlePostChange = this.handlePostChange.bind(this)
	}

	handlePostChange(posts) {
		this.props.handlePostChange(posts)
	}

	fetchList = () => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then(json => {
				// local state
				this.setState({posts: json})
				// lifted state change
				this.handlePostChange(json)
			})
	}

	// function that takes one argument and writes to the console
	clickedItem = (x) => {
		console.log("clicked", x)
	}

	render() {
		return (
			<Fragment>				
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
