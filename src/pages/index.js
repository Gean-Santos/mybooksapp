import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './Home';
import { AddBook } from './AddBook';

const Stack = createStackNavigator();

export const NavigationStack = () => {
    return(
        <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }} 
          initialRouteName='Home'
        >
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='AddBook' component={AddBook}/>
        </Stack.Navigator>
    );
};