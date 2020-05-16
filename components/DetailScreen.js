import * as React from 'react';
import { Text, View, StyleSheet, Image ,Button} from 'react-native';

function DetailScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetailScreen </Text>
      <Button
      title="Jump to Next Screen push"
      onPress={()=> navigation.push("Details")        }
      />
      <Button
      title="Jump to Home Screen"
      onPress={()=> navigation.navigate("MemeGen")}
      />
      <Button
      title="Jump to Next Screen"
      onPress={()=> navigation.goBack()}
      />
      <Button
      title="Jump to Next Screen"
      onPress={()=> navigation.popToTop()}
      />
    </View>
  );
}

export default DetailScreen;
