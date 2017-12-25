import React from 'react'

class AddColorForm extends React.Component{
	constructor(props){
		super(props)
		this.submit= this.submit.bind(this)
	}

	submit(e){
		const {_title, _color}= this.refs
		e.preventDefault()
		this.props.onNewColor(_title.value, _color.value)
		_title.value = ''
		_color.value = '#00000'
		_title.focus()
	}

	render(){
		return (
			<form onSubmit={this.submit}>
				<input ref="_title" type="text" placeholder="Color Title" required/>
				<input ref="_color" type="color" required />
				<button>ADD</button>
			</form>
			)
	}
}

export default AddColorForm