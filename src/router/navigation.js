import * as React from 'react';

import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import WeatherDetails from '../screens/WeatherDetails';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: 'grey'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: '500'
                    }
                }} />
                <Stack.Screen name="CountryDetails" component={DetailsScreen} options={{
                    title: 'Country Details',
                    headerStyle: {
                        backgroundColor: 'grey'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: '500'
                    }
                }} />
                <Stack.Screen name="WeatherDetails" component={WeatherDetails} options={{
                    title: 'Weather Details',
                    headerStyle: {
                        backgroundColor: 'grey'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: '500'
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation