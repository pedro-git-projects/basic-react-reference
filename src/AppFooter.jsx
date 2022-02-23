import React, { Component, Fragment } from 'react';
import "./AppFooter.css"

// automatically exports itself when invoked
export default class AppFooter extends Component {
	// every component MUST have at least one function called render
	render() {
		const currentYear = new Date().getFullYear()
		return(
			// the Fragment provides a parent element that does not break presentation 
			<Fragment>			
				{/* all tags must be closed in JSX */}
				<hr/> 
				<p className="footer">Copyright &copy; {currentYear} Abstração Lambda</p>
			</Fragment>
		)
	}
} 
