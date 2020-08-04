/*jshint esversion: 6 */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Radio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			radioClick: "name"
		};
	}

	onChange = (el) => {
		this.setState({ radioClick: el.target.value });
		this.props.sortBy(el.target.value);
	}

	render() {
		// Work to do here...

		return (
			<form>
				<div className="radioButtons">
					<div className="left">
						<input
							type="radio"
							name="sortBy"
							value="name"
							id="nameSort"
							onClick={this.onChange}
						></input>
						<label htmlFor="nameSort">&nbsp;&nbsp;Sort by name</label>
					</div>
					<div className="right">
						<input
							type="radio"
							name="sortBy"
							value="age"
							id="ageSort"
							onClick={this.onChange}
						>
						</input>
						<label htmlFor="ageSort">&nbsp;&nbsp;Sort by age</label>
					</div>
				</div>
			</form>
		);
	}
}

Radio.propTypes = {
	sortBy: PropTypes.func
}

export default Radio;

