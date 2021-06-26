import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

 
 
const Header = () => {
  return (
    <View style={styles.header}>
    <View style={styles.logo}>
    <Image 
    source={require('../assets/logo.png')}/>
    </View>
    <View  style={styles.text}>
      <Image 
      source={require('../assets/Group.png')}/>
      </View>
      <View  style={styles.text1}>
      <Image 
      source={require('../assets/Group1.png')}/>
    </View>
    <View style={styles.rightSide}>
      <Image 
      source={require('../assets/ic_notify.png')}/>
    </View>
    </View>
  );
};

const styles=StyleSheet.create({
  header:
  {
    width:'100%',
    height:'10%',
    flex:1,
    zIndex:1,
    backgroundColor:'#E93732',
    position:'absolute'
  },
  text:
  {
   position:"absolute",
    height: 15.999666213989258,
    width: 36.48543167114258,
    marginLeft: 91,
    marginTop: 33.000244140625,
  },
  text1:
  {
    height: 12.889958381652832,
    width: 137.5319366455078,
    marginLeft: 132.12353515625,
    marginTop: 33,
    position:"absolute",
   
  },
  logo:{
    position:"absolute",
    height: 26.0357770919799805,
    width: 25.293727874755859,
    marginLeft: 16.706298828125,
    marginTop: 24.27,

  },
  rightSide:
  {
    height: 24,
    width: 24,
    marginLeft: 320,
    marginTop: 29,
    position:"absolute"
  },
})
 export default Header;
