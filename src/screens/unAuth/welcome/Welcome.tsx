import React, { Component } from 'react'
import { View, Text ,StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native'
import { TEXT } from '../../../configs/string'
import { SIGN_IN } from '../../../navigation/ScreenName'



export default class Welcome extends Component {

  // constructor(props: {[key: String] : any}) {
  //   super(props);
  // }
  
  render(){
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor='#000'/>
        <View style={styles.posterContainer}>
          <Image source={require('../../../assets/images/background.png')} style={styles.image}/>
        </View>

        <View style={styles.welcomeContainer}>
          <View style={styles.welcomeField}>
            <Text style={styles.welcomeText}>{TEXT.WELCOME.WELCOME}</Text>
          </View>

          <View style={styles.contentField}>
            <Text style={styles.contenText}>{TEXT.WELCOME.CONTENT}</Text>
          </View>

          <TouchableOpacity style={styles.btnContainer} onPress={()=> this.props.navigation.navigate(SIGN_IN)}>
            <View style={styles.button}>
              <Text style={styles.btnText}>{TEXT.WELCOME.TEXT_BTN}</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    
  },

  posterContainer:{
    height:'70%',
    width: '100%',
  },

  image: {
    height:  '100%',
    width: '100%',
    position: 'absolute',
    top: 0
  }, 

  welcomeContainer:{
    height: '35%',
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0
  },

  welcomeField:{
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 30,
    marginBottom: 10
  },

  welcomeText:{
    fontSize: 40,
    fontWeight: 'bold', 
    color: '#000'
  },

  contentField:{
    alignItems: 'center', 
    justifyContent: 'center',
    paddingHorizontal: 30,

  },

  contenText:{
    fontSize: 15,
    textAlign: 'center',
    color: '#707070'
  },

  btnContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30, 
    
  },

  button:{
    height: 46,
    width: 156,
    backgroundColor:'#ED1B2E',
    borderRadius: 23,
    paddingVertical: 12,
    paddingHorizontal:42
  },

  btnText:{
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center'
  }
})
