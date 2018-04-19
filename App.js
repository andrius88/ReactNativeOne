import React from 'react';
import { AppRegistry, StyleSheet, View, Text, Image, Button, TextInput, Alert, AsyncStorage,} from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Constants, WebBrowser } from 'expo';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff', }}>
        <Text></Text>
        <Text style={styles.bigblue} >ANDRIUS</Text>
        <Text></Text>
        <Image source={require('./pic01.png')} style={{width: 200, height: 200}}/>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Button title="My profile" onPress={() => this.props.navigation.navigate('Details')} />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {

 constructor(props) {
  super(props);
  var tmp;
  AsyncStorage.getItem('aboutme').then((value) => tmp );  //this.state.text
  //Alert.alert('tmp' + tmp );
  if (tmp === null ||  tmp === undefined) {
    this.state = {text: 'Now looking for new challenges in the IT industry. Has extremely strong desire to be admitted to the Zenitech Java and JavaScript internship.'};
    //Alert.alert('AsyncStorage is empty');
  } else {
    this.state = {text: tmp};
   // Alert.alert('AsyncStorage has text');
  }
}

 _handlePressButtonAsync = async () => {
  let result = await WebBrowser.openBrowserAsync('https://github.com/andrius88');
  this.setState({ result });
}

_handleAboutMe = (text) => {
  this.setState({ text: text });
  AsyncStorage.setItem('aboutme', text);
  //Alert.alert('You changed the text !');
  //Alert.alert(this.state.text);
}

/*setName = (value) => {
AsyncStorage.setItem('aboutme', value);
this.setState({ 'aboutme': value });
}*/

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff',}}>
        
        <Text style={{ height: 40, backgroundColor: 'steelblue', fontSize: 20, paddingLeft: 50, paddingTop: 5}}>My profile</Text>

        <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, paddingBottom: 10, }}>
          <Image source={require('./pic01.png')} style={{width: 60, height: 60, }}/>
          <Text style={style={fontSize: 20, paddingLeft: 20, paddingTop: 15, backgroundColor: '#fff',}} >
            ANDRIUS
          </Text>
        </View>
        
        <View style={{ flexDirection: 'column', paddingLeft: 10, paddingTop: 0,}}>
          <Text style={style={fontSize: 13, color: 'darkgray', paddingLeft: 10, paddingTop: 0}} >Abaut me</Text>
          <TextInput style = {style={fontSize: 15, color: 'black', backgroundColor: '#fff', paddingLeft: 5, paddingTop: 0}}
               underlineColorAndroid = "transparent"
               placeholderTextColor = "#9a73ef"
               multiline = {true}
               numberOfLines = {4}
               maxLength = {150}
               autoCapitalize = "none"
               value={this.state.text}
               onChangeText = {(text) => this._handleAboutMe(text)}
          />
          <Text></Text>
        </View>
        <View style={{ height: 2, backgroundColor: 'steelblue'}} />

        <View style={{ flexDirection: 'column', paddingTop: 20, alignItems: 'center'}}>
          <Image source={require('./weather_fcast.jpg')} style={{width: 250, height: 100, paddingTop: 10, }}/>
          <Text></Text>
          <Text></Text>
          <Button onPress={this._handlePressButtonAsync} title="My GitHub profile" color="steelblue" value="Go to Google" />
          <Text></Text>
        </View>

      </View>
      
    );
  }

 
}


const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
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

