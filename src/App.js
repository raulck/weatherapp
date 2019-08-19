import React from 'react';

import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import DayWeather from './components/DayWeather';
import ExtendedWeather from './components/ExtendedWeather';

//insert valid API key from weatherbit
const API_KEY = 'YOUR API KEY';

class App extends React.Component {
	state = {
		days: [],
		city: undefined,
		error: ''
	};
	getWeather = async (e) => {
		e.preventDefault();

		const city = e.target.elements.city.value;
		let displayDays = 6;
		let data = [];

		if (city) {
			try {
				const api_url = await fetch(
					'https://api.weatherbit.io/v2.0/forecast/daily?city=' +
						city +
						'&days=' +
						displayDays +
						'&key=' +
						API_KEY
				);
				data = await api_url.json();
				if (data) {
					this.setState({ days: data.data, city: city, error: ''});
					return;
				}
			} catch (err) {
				this.setState({ error: 'Please enter valid city name' });
			}
		}
		this.setState({ days: [], error: 'Please enter valid city name' });
	};

	render() {
		return (
			<div>

				<Header />

				<Form getWeather={this.getWeather} error={this.state.error} />

				{this.state.error && <p className="display-4 text-center text-white fader">{this.state.error}</p>}
				{this.state.days.length > 0 ? (
					<DayWeather
						city={this.state.city}
						temperature={this.state.days[0].temp}
						datetime={this.state.days[0].datetime}
						weather_desc={this.state.days[0].weather.description}
						weather_icon={this.state.days[0].weather.icon}
						weather_code={this.state.days[0].weather_code}
					/>
				) : (
					''
				)}

				<div className="container-fluid my-3">
					<div className="row">
						<div className="col-12">
							<div id="days" className="d-flex flex-column flex-xl-row flex-wrap flex- justify-content-around text-white">
								{this.state.days.map((day, i) => {
									if (i === 0) {
										return '';
									}
									return (
										<ExtendedWeather
											key={day.datetime}
											city={this.state.city}
											temperature={day.temp}
											minTemperature={day.app_min_temp}
											maxTemperature={day.app_max_temp}
											datetime={day.datetime}
											weather_desc={day.weather.description}
											weather_icon={day.weather.icon}
											weather_code={day.weather_code}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
