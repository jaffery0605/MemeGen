import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SwiperScreen from './SwiperScreen';
import AuthScreen from './AuthScreen';

const RootStack = createStackNavigator();

const RootStackScreen=({navigation})=>(
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SwiperScreen" component={SwiperScreen}/>
        <RootStack.Screen name="AuthScreen" component={AuthScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;