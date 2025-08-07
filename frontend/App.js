import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Topbar } from './components/common/topBar';
import { DayPlan } from './components/dashboard/DayPlan';

export default function App() {
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
  console.log("Width: "+width + " Height: "+ height);
  return (
    <View style={[dynamicStyles.FullScreen]}>
      <DayPlan/>    
    </View>
  );
}
//useEffect(()=>{

//},[])
const styles = StyleSheet.create({
  
});
