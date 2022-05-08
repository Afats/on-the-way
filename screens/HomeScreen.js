import React, { Component } from 'react'
import { StyleSheet, Text, View, Image,TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export class HomeScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View
            style={styles.container}    
            >
                <TouchableHighlight onPress={() => navigation.navigate("DashBoard")}> 
                <Image 
                source = {require('../assets/img.png')}
                style = {styles.trLogo}
                />
                </TouchableHighlight>
        
                <Image
                source = {require('../assets/TfNSW_Light_Rail.png')}
                />
                <Image
                source = {require('../assets/trans.png')}
                style = {styles.transImg}
                />
                <Text style={{ color: '#fff' }}>Notice that the status bar has light text!</Text>
                <StatusBar style="dark" />
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  trLogo: {
    alignSelf: 'flex-start'
  },

  transImg: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    bottom: 0, 
  },
});

export default HomeScreen
