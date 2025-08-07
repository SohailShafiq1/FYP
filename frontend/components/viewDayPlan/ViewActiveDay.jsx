import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

export default function ViewActiveDay() {
  const { width, height } =  useWindowDimensions();
  const dynamicStyles = {
    container: 
    {
      width: width / 3,
      height: width / 3,
      borderRadius: width /3,
      marginLeft: (width/3),
      marginRight: width/3 
    },

    
    FullScreen: 
    {
      width: width,
      height: height,
    }
  };
  console.log("Width "+width + " height: "+ height);
  return (

    <View style={[dynamicStyles.FullScreen, styles.fullScreen]}>
    <View style={[dynamicStyles.container, styles.container]}>
      <Text>75%</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  );
}
//useEffect(()=>{

//},[])
const styles = StyleSheet.create({
  fullScreen:
  {
  },
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
});
