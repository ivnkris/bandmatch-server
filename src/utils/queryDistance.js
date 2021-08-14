const axios = require("axios");

const queryDistance = async function (origins, destinations) {
	const API_KEY = "AIzaSyCBKF4t5DY9nczpeG3uxAAHxU1NcNlynh4";

	const formattedDestinations = destinations.map((destination) => {
		destination = destination.replace(/\s/g, "+");
		destination = destination + "+UK" + "%7C";
		return destination;
	});

	const formattedOrigin = origins.map((origin) => {
		origin = origin.replace(/\s/g, "+");
		origin = origin + "+UK";
		return origin;
	});

	const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${formattedOrigin}&destinations=${formattedDestinations}&mode=driving&language=en-En&key=${API_KEY}`;

	console.log(url);

	const headers = {
		"Content-Type": "text/plain",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Credentials": true,
		"Access-Control-Allow-Headers":
			"Origin, X-Requested-With, Content-Type, Accept",
	};

	const locationData = await axios.get(url, { headers }).then((res) => {
		const location = res.data;

		return location;
	});

	return locationData;
};

module.exports = queryDistance;
