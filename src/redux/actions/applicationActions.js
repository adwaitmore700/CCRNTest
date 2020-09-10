import {getCountryDetails, getWeatherDetails} from '../../api/api';

import {REDUX_CONSTANTS} from '../../utils/constants';

export const GET_COUNTRY_DETAILS = (countryName)=>{
    return async (dispatch)=>{
        try {
            let countryDetails = await getCountryDetails(countryName);
            
            if(countryDetails){
                dispatch({
                    type:REDUX_CONSTANTS.GET_COUNTRY_DETAILS,
                    countryDetails
                });
                return true;
            }
            else{
                //handle
                return false;
            }
        } catch (error) {
            return false;
        }
    }
}

export const GET_WEATHER_DETAILS = (city)=>{
    return async (dispatch)=>{
        try {
            let weatherDetails = await getWeatherDetails(city);
            
            if(weatherDetails){
                dispatch({
                    type:REDUX_CONSTANTS.GET_WEATHER_DETAILS,
                    weatherDetails
                });
                return true;
            }
            else{
                //handle
                return false;
            }
        } catch (error) {
            return false;
        }
    }
}