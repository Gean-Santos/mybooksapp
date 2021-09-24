import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { NavigationStack } from './pages';

const App = () => {
    return(
        <View style={{display: 'flex', flex: 1}}>
            <NavigationContainer>
                <NavigationStack />
            </NavigationContainer>
        </View>
        
    );
};

export default App;