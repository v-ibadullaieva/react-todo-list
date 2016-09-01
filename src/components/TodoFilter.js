import React from 'react';

export default class TodoFilter extends React.Component {
	render() {
		const { filterDone, filterNotDone, filterAll } = this.props;

		return (
			<div>
				<button type='button' className='btn btn--first' onClick={ filterDone }>Done</button>
				<button type= 'button' className='btn btn--no-border' onClick={ filterNotDone }>Not Done</button>
				<button	type='button' className='btn btn--last' onClick={ filterAll }>All</button>
			</div>
		)
	}
}
