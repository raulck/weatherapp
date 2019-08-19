import React from 'react';
import moment from 'moment';

const ExtendedWeather = (props) => {
	return (
		<div className="extended-day-item d-flex flex-column align-items-center px-5 py-4 mb-3 mb-xl-0 fader">
			<p className="small">{moment(props.datetime).format('MMMM Do YYYY')}</p>
			<img className="icon" src={'img/icons/' + props.weather_icon + '.png'} alt={props.weather_desc} />
			<p className="lead mb-3">
				Min: {Math.round(props.minTemperature)}&#176; <br /> Max: {Math.round(props.maxTemperature)}&#176;
			</p>
			<p className="extended-day-item-description text-lowercase text-center mb-0">{props.weather_desc}</p>
		</div>
	);
};

export default ExtendedWeather;
