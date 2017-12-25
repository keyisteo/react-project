import React from 'react'
import PropTypes from 'prop-types'
const { Component } = React    

    class Summary extends Component {

    	static displayName: "Summary"

        static propTypes = {
            ingredients: PropTypes.number,
            steps: PropTypes.number,
            title: (props, propName)=>
                (typeof props[propName] !== 'string')?
                    new Error("A title must be string"):
                    (props[propName].length >20 )?
                        new Error ("Title must be under 20 character"):
                        null
        }

        static defaultProps = {
            ingredients:0,
            steps:0,
            title: "[recipe]"
        }

        render() {
            const {ingredients, steps, title} = this.props
            return (
              <div className="summary">
                <h1>{title}</h1>
                <p>
                  <span>{ingredients} Ingredients | </span>
                  <span>{steps} Steps</span>
                </p>
              </div>
            )
        }
    }

export default Summary
