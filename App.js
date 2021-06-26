import { staticBlock } from '@babel/types';
import React from 'react';
import {
  SafeAreaView,
  TextInput,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Image,
  PixelRatio,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Footer from './src/footer';
import Header from './src/Header';

 
 
const App = () => {
  return (
     <View style={styles.body}>
       <Header />
       <ScrollView style={styles.scrollView}>
         <View style={styles.additional}>
       <TextInput 
       placeholder="Search for products and brands"
       style={styles.inputBox}
       />
       <View style={styles.search}>
       <Image 
       source={require('./assets/Search.png')} />
       </View>
       <View style={styles.cover}>
         <Image 
         source={require('./assets/cover1.png')}/>
       </View>
       </View>
       <LinearGradient colors={['#FFEA79','#FFFFFF']} style={styles.linearGradient}>
        <Image 
        source={require('./assets/Frame.png')}/>
       </LinearGradient>
       <Image 
       source={require('./assets/image.png')} style={styles.image}/>
       </ScrollView>
       <Footer />
     </View>
     
  );
};

const styles=StyleSheet.create({
  body:
  {
   flex:1,
   zIndex:0
  },
  
  inputBox:{
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    padding: 16,
    width: 328,
    height: 48,
    marginLeft: 16,
    marginTop: 69,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  search:
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    width: 24,
    height: 24,
    marginLeft: 300,
    marginTop: -34.67,
    flex:0,
  },
  cover:
  {
    height: 142,
    width: 328,
    marginLeft: 16,
    marginTop: 128,
    position:"absolute"
  },
  linearGradient:{
    height: 65,
    width: 328,
    marginLeft: 16,
    marginTop:  180,
    borderRadius: 20,
    padding: 8,
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center",
    
  },

  image:{
    height: 78,
    width: 326,
    marginLeft: 19,
    marginTop: 180,
    borderRadius: 10,
  },
  additional:{
    backgroundColor:"#E93732",
    width:'100%',
    height:264
  }
 
})
 
export default App;