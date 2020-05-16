import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './HomeScreen';
import CreditScreen from './CreditScreen';
import DetailScreen from './DetailScreen';
import SettingScreen from './SettingScreen';

const HomeStack = createStackNavigator(); 
const CreditStack = createStackNavigator(); 
const DetailStack = createStackNavigator(); 
const SettingStack = createStackNavigator(); 


export const HomeStackScreen = ()=>(
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#17c0eb'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }

  }}>
  <HomeStack.Screen name="MemeGen"
        component={HomeScreen}/>
  </HomeStack.Navigator>
);

export const CreditStackScreen = ()=>(
  <CreditStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#7158e2'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }

  }}>
  <CreditStack.Screen name="Credits"
        component={CreditScreen}/>
  </CreditStack.Navigator>
);

export const DetailStackScreen = ()=>(
  <DetailStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#00b894'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
  <DetailStack.Screen name="Details"
        component={DetailScreen}/>
  </DetailStack.Navigator>
);

export const SettingStackScreen = ()=>(
  <SettingStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#079992'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
  <SettingStack.Screen name="Settings"
        component={SettingScreen}/>
  </SettingStack.Navigator>
);
