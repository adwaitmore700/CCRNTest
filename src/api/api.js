import axios from 'axios';

export const getCountryDetails = async (countryName)=>{
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`);
        if(response && response.data){
            
            return {
                capital:response.data[0].capital,
                population:response.data[0].population,
                latlng:response.data[0].latlng,
                flag:response.data[0].flag
            }
        }
        else{
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const getWeatherDetails = async (cityName)=>{
    try {
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=6e7ffc24b67081377ad8c648b547a8e3&query=${cityName}`);
        if(response && response.data){
            
            return {
                temperature:response.data.current.temperature,
                weather_icon:response.data.current.weather_icons[0],
                wind_speed:response.data.current.wind_speed,
                precip:response.data.current.precip
            }
        }
        else{
            return null;
        }
    } catch (error) {
        return null;
    }
}