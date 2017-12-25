import React from 'react';
import IngredientList from './ingredientlist'
import Instruction from './instruction'

const Recipe = ({name, ingredients, steps})=>
	<section id= {name.toLowerCase().replace(/ /g, '-')}>
		<h1>{name}</h1>
		<IngredientList list={ingredients}/>
		<Instruction title="Cooking Instruction"
			steps={steps}/>
	</section>

export default Recipe