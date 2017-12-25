//Name: Star.js
import React from 'react'
import PropTypes from 'prop-types'

const Star= ({selected=false, onClick=f=>f})=>
	<div className={(selected)?"star selected":"star"}
		onClick={onClick}>
	</div>

Star.propTypes={
	onClick: PropTypes.func,
	selected: PropTypes.bool 
}	

export default Star