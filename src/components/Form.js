import React from 'react';

const Form = (props) => {
	return (
		<div className="container-fluid">
			<div className="row">
				<form className="form col-12 d-flex justify-content-center py-2" onSubmit={props.getWeather}>
					<input className={props.error ? 'error' : ''} type="text" name="city" placeholder="City name..." />
					<button className="btn btn-outline-light ml-sm-4 ml-auto">Show weather</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
