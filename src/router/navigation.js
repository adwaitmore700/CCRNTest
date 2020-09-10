import * as React from 'react';

import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    title: 'Posts',
                    headerStyle: {
                        backgroundColor: 'grey'
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation