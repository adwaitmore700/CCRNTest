import {REDUX_CONSTANTS} from '../../utils/constants'

let initialState = {
    countryDetails:null,
    weatherDetails:null
}

export const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case REDUX_CONSTANTS.GET_COUNTRY_DETAILS:
            return {
                ...state,
                countryDetails:action.countryDetails
            }
        case REDUX_CONSTANTS.GET_WEATHER_DETAILS: 
        return {
            ...state,
            weatherDetails:action.weatherDetails
        }
        default:
            return state;
    }
}