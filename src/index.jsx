import React, { Component } from "react";
import ReactDOM from "react-dom"
import AppFooter from "./AppFooter.jsx";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";

// we  install bootstrap with NPM and import at the entry point of our application
// after that we're able to use it in other components
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./index.css";

class App extends Component {
	render() {
		return ( 
			/* we use className to create classes in JSX for class is a reserved JS word*/
			<div className="app">			
				{/*Passing properties to a component*/}
				<AppHeader title="My App"/>
				<AppContent />
				<AppFooter />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"))
