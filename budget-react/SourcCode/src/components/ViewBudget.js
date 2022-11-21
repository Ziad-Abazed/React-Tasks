import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: {props.budget}jd</span>
			<button type='button' class='btn btn-warning' onClick={props.handleEditClick}>
				add income
			</button>
		</>
	);
};

export default ViewBudget;