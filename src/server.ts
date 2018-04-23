// import express from 'express';
import axios from 'axios';

// const app = express();
// const port: number = 3000;

const encodedAddress= encodeURIComponent('nottingham, UK');
const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA9IOBTC9RCjuTR3QChNOVEu9Ri0yX3k4U`;

const getWeather = async (geocodeURL: string) => {
  try {
    const response: any = await axios.get(geocodeURL);
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address')
    }
    const latitude: number = response.data.results[0].geometry.location.lat;
    const longitude: number = response.data.results[0].geometry.location.lng;
    const weatherURL = `https://api.darksky.net/forecast/7aab4afb7ad387ca11385ced7b3c041e/${latitude},${longitude}`;
    console.log(response.data.results[0].formatted_address);

    const weatherResponse = await axios.get(weatherURL);
    const temperature: number = weatherResponse.data.currently.temperature;
    const apparentTemperature: number = weatherResponse.data.currently.apparentTemperature;
    console.log(`The current temperature is ${temperature} Fahrenheit, it feels like ${apparentTemperature} Fahrenheit`);
  } catch (e) {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers.');
    } else {
      console.log(e.message);
    }
  }
};

getWeather(geocodeURL);

// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });

// export { app };
