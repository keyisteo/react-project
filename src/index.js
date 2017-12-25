import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './components/menu'
import data from './data/recipes'
import Summary from './components/summary'
import StarRating from './components/StarRating'
import Color from './components/AddColorForm'

window.React = React

ReactDOM.render(
	<Menu recipes={data} />,
	document.getElementById("react-container")
)

ReactDOM.render(
	<Summary />,
	document.getElementById('summary-container')
)


ReactDOM.render(
	<Color onNewColor={(title, color)=>{
		console.log(`New New Color: ${title} ${color}`)
	}}/>,
	document.getElementById('color')
	)

ReactDOM.render(
	<StarRating totalStars={7} starsSelected={3}/>,
	document.getElementById('star-rating')
	)