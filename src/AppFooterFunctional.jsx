import React, { Fragment } from 'react';
import "./AppFooter.css"

export default function AppFooterFunctional(props) {
	const currentYear = new Date().getFullYear()
	return(
		// the Fragment provides a parent element that does not break presentation 
		<Fragment>			
			{/* all tags must be closed in JSX */}
			<hr/> 
			<p className="footer">Copyright &copy; {currentYear} Abstração Lambda {props.myProperty}</p>
		</Fragment>
	)
}
