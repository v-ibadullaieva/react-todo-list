import React from 'react';

export default class TodoForm extends React.Component {
	render() {
		return (
			<div>
				<form className='form' onSubmit={ this.onSubmit.bind(this) }>
					<input className='form__input' type='text' value={ this.state.value } onChange={ this.onChange.bind(this) } placeholder='Enter your todo'/>
					<button className='form__btn btn btn--red' type='submit'>Save</button>
				</form>
			</div>
		)
	}

	constructor(props) {
	    super(props);
	    this.state = {
	    	value: ''
	    };
  	}

	onSubmit(e) {
		e.preventDefault();

		this.props.onSubmit(this.state.value);
		this.setState({
			value: ''
		});
	}

	onChange(e) {
		this.setState({
			value: e.target.value
		});
	}
}
