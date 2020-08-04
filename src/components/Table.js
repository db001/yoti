/*jshint esversion: 6 */
import React from 'react';
import { PropTypes } from 'prop-types';

const Table = ({ people }) => {
	// Use appropriate technique to render the desired HTML

	const renderPeople = (people) => {
		return people.map(person => {
			return <tr key={`${person.name}${person.birth}`}><td>{person.name}</td><td>{person.birth}</td></tr>
		});
	}

	return (
		<div className="table-div">
			<table className="table table-striped table-bordered table-hover full-width">
				<thead>
					<tr>
						<th className="course-name">Person Name</th>
						<th className="duration">Date of Birth</th>
					</tr>
				</thead>
				<tbody>
					{renderPeople(people)}
				</tbody>
			</table>
		</div>);
}

Table.propTypes = {
	people: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			birth: PropTypes.string
		})
	)
};

export default Table;