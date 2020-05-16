import * as React from 'react';
import { Text, View, StyleSheet, Image ,Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
      title="Jump to Next Screen"
      onPress={()=> navigation.navigate("Details")}
      />
    </View>
  );
}

export default HomeScreen;
