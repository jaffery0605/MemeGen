import * as React from 'react';
import { Text, View,ActivityIndicator } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RootStackScreen from './components/RootStackScreen';
import TabNav from './components/TabNav';


export default function App() {
  // const [isLoading, setLoading] = React.useState(true);

  // if(isLoading){
  //   return(
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //       <ActivityIndicator size="large"/>
  //     </View>
  //   );
  // }
  
  return (
    <NavigationContainer>
    <RootStackScreen/>
      {/* <TabNav/> */}
    </NavigationContainer>
  );
}
