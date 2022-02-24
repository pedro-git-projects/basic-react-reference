import React, { Component } from "react";
import ReactDOM from "react-dom"
// import AppFooter from "./AppFooter.jsx";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import AppFooterFunctional from "./AppFooterFunctional";

// we  install bootstrap with NPM and import at the entry point of our application
// after that we're able to use it in other components
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./index.css";

class App extends Component {

	constructor(props) {
		super(props) // required
		this.handlePostChange = this.handlePostChange.bind(this)
		this.state = {posts: []}
	}

	handlePostChange(posts) {
		this.setState({posts : posts})
	}

	render() {
		// creating a JS object to store props
		const myProps = {
			title: "My App",
			subject: "My subject",
			favorite_color: "green",
		}
		return (			
		/* we use className to create classes in JSX for class is a reserved JS word*/
		<div className="app">			
			{/*Lifting state trough this.state.posts and handlePostChange*/}
			<AppHeader {...myProps} posts={this.state.posts} handlePostChange={this.handlePostChange}/>
			<AppContent handlePostChange={this.handlePostChange}/>
			<AppFooterFunctional myProperty={"Hello, world"}/>
			{/*	<AppFooter /> */}
		</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"))
