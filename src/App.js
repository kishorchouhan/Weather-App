import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';


const API_KEY = '104ec94c9efb96e5545065b88c1f59c1';

export default class App extends Component {
	state = {
		errorMessage: '',
		weatherData: {},
	}

	componentDidMount() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(((position) => {
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;
				console.log(`${latitude}, ${longitude}`);

				// Get Weather Data
				(async () => {
					const getWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`);
					const weatherData = await getWeatherData.json();
					console.log(weatherData);
					this.setState({ weatherData });
				})().catch(err => {
					console.error('error', err);
				});

			}), () => {
				this.setState({ errorMessage: 'Allow browser to access your location', });
			})
		} else {
			this.setState({ errorMessage: 'Geolocation is not supported by your browser', });
		}
	};

  render() {
		const { errorMessage, weatherData } = this.state;

    return (
			<div>
				<p>{errorMessage}</p>
				<Weather weatherData = {weatherData}/>
			</div>
		);
  };
};