import React, { Component } from "react";
import ReactDOM from "react-dom"
import AppFooter from "./AppFooter.jsx";
import "./index.css";

class App extends Component {
	render() {
		return ( 
			/* we use className to create classes in JSX for class is a reserved JS word*/
			<div className="app">			
				<div>
					<h1>Hello, React!</h1>
				</div>
				<AppFooter />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById("root"))
