import React from 'react';
import moment from 'moment';

const DayWeather = (props) => {
	return (
		<div className="container-fluid my-4 fader">
			<div className="row">
				<div className="col-12">
					<div className="d-flex flex-column align-items-center text-white day-item">
						{props.city && <h1 className="display-2 mb-3 text-capitalize">{props.city}</h1>}

						{props.datetime && <p className="lead">{moment(props.datetime).format('MMMM Do YYYY')}</p>}

						{props.weather_icon && (
							<img src={`img/icons/${props.weather_icon}.png`} alt={props.weather_desc} />
						)}

						{props.temperature && <p className="display-4 mb-0">{Math.round(props.temperature)}&#176;</p>}

						{props.weather_desc && <p className="text-lowercase lead">{props.weather_desc}</p>}

						{props.minTemperature && <p>Min temperature: {props.minTemperature}</p>}

					</div>
				</div>
			</div>
		</div>
	);
};

export default DayWeather;