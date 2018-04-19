import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button, } from 'react-native';

export default class App extends React.Component {
  _onPressButton(){
	  window.location = 'http://www.google.com';
	  //'./profile.js'
  }
  render() {
    let pic = {uri: 'https://www.metaweather.com/api/location/44418/' };
    return (
      
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff',}}>
        
        <View style={{ height: 20, backgroundColor: 'steelblue'}} />
        <Text style={{ height: 40, backgroundColor: 'steelblue', fontSize: 20, paddingLeft: 50, paddingTop: 10}}>My profile</Text>

        <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, paddingBottom: 10, }}>
          <Image source={require('./pic01.jpeg')} style={{width: 60, height: 60, }}/>
          <Text style={style={fontSize: 20, paddingLeft: 20, paddingTop: 15, backgroundColor: '#fff',}} >
            ANDRIUS
          </Text>
        </View>
        
        <View style={{ flexDirection: 'column', paddingLeft: 10, paddingTop: 0,}}>
          <Text style={style={fontSize: 13, color: 'darkgray', paddingLeft: 10, paddingTop: 0}} >Abaut me</Text>
          <Text style={style={fontSize: 15, color: 'black', backgroundColor: '#fff', paddingLeft: 5, paddingTop: 0}} >
            Now looking for new challenges in the IT industry starting from junior position preferably as JAVA programmer
            and other technologies can be considered as well.
          </Text>
          <Text></Text>
        </View>
        <View style={{ height: 2, backgroundColor: 'steelblue'}} />

        <View style={{ flexDirection: 'column', paddingTop: 20, alignItems: 'center'}}>
          <Image source={require('./weather_fcast.jpg')} style={{width: 250, height: 100, paddingTop: 10, }}/>
          <Text></Text>
          <Text></Text>
          <Button onPress={this._onPressButton} title="My GitHub profile" color="steelblue" value="Go to Google" />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
