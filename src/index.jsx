import React, { Component } from "react";
import ReactDOM from "react-dom"
import AppFooter from "./AppFooter.jsx";
import AppContent from "./AppContent";

// we  install bootstrap with NPM and import at the entry point of our application
// after that we're able to use it in other components
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {
	render() {
		return ( 
			/* we use className to create classes in JSX for class is a reserved JS word*/
			<div className="app">			
				<div>
					<h1>Hello, React!</h1>
					<AppContent />
				</div>
				<AppFooter />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"))
