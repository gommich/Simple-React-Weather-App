import axios from 'axios';
const API_KEY = "9aa6652ab9d5ebf51acbd236e187fdfc";
const ROOT_URL ="http://api.openweathermap.org/data/2.5/forecast?APPID="+API_KEY;

export const FETCH_WEATHER="FETCH_WEATHER"

export function fetchWeather(city){
  //const url= `${ROOT_URL}&q=${city},us`;
  const url= `${ROOT_URL}&q=${city}`;
  const request=axios.get(url);

  console.log('Request', request);
  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
