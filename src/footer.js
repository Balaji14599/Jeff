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


const Footer=() =>
{
    return(
      <View style={styles.footer}>
          <View style={styles.home}>
              <Image 
              source={require('../assets/home.png')}/>
              <Text style={styles.text}>Home</Text>
          </View>
          <View style={styles.category}>
            <Image 
            source={require('../assets/category.png')}/><Text style={styles.categoryText}>Categories</Text>
          </View>
          <View style={styles.cart}>
            <Image 
            source={require('../assets/cart.png')}/><Text style={styles.cartText}>Cart</Text>
          </View>
          <View style={styles.profile}>
            <Image 
            source={require('../assets/profile.png')}/><Text style={styles.profileText}>Profile</Text>
          </View>
  
      </View>
    );

}
const styles=StyleSheet.create({
    footer:
    {
        display: 'flex',
        flexWrap:'wrap',
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        width: '100%',
        height: 56,
        marginLeft: 0,
    },
home:
{
    height: 16.825000762939453,
    width: 37,
    marginLeft: "-8.67%",
    marginRight: "16.67%",
    marginTop: "17.09%",
    marginBottom: "17.03%",
},
text:
{
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    justifyContent:'space-around',
    alignItems:'center',
    color:'#444343',
    marginLeft:-10,

},
category:
{
justifyContent:'center',
alignItems:"center",
marginLeft:'-8%',
marginTop: "5.09%",
},
categoryText:
{
 justifyContent:"center",
 alignItems:"center",
 fontFamily: 'Roboto',
 fontStyle: 'normal',
 fontWeight: '500',
 fontSize: 13,
 justifyContent:'space-around',
 alignItems:'center',
 color:'#444343',
},
cart:
{
    justifyContent:'center',
    alignItems:"center",
    marginLeft:'10%',
    marginTop: "5.09%",
},
cartText:
{
    justifyContent:"center",
    alignItems:"center",
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    justifyContent:'space-around',
    alignItems:'center',
    color:'#444343',
},
profile:
{
    justifyContent:'center',
    alignItems:"center",
    marginLeft:'13%',
    marginTop: "5.09%",
},
profileText:
{
    justifyContent:"center",
    alignItems:"center",
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    justifyContent:'space-around',
    alignItems:'center',
    color:'#444343',
}
})

export default Footer;