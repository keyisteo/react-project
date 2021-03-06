

import React from 'react'
import Star from './Star'

const StarRating= React.createClass({
	displayName: 'StarRating',
	propTypes:[
		totalStars: React.PropTypes.number,
	],
	getDefaultProps(){
		return {
			totalStars: 5
		}
	},
	getInitialState(){
		return{
			starsSelected: 0
		}
	},
	change(starsSelected){
		this.setState({starsSelected})
	},
	render(){
		const {totalStars} = this.props
		const {starsSelected} = this.state
		return(
			<div className="star-rating">
				{[...Array(totalStars).map((n,i)=>
					<Star key={i}
						selected={i<starsSelected}
						onClick={()=> this.change(i+1)}
					/>
				)]}
				<p>{starsSelected} of [totalStars] stars</p>
			</div>
			)
	}
})

export default StarRating