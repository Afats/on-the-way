import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { Title } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export class Alerts extends Component {
    render() {
        return (
            <ScrollView style={styles.scrollStyle}>
                <View style={styles.container}>
                    <Title style={{ fontSize: 30, marginTop: 80, fontWeight: 'bold' }}>
                        Alerts
                    </Title>

                    <TouchableHighlight> 
                    <Image 
                    source = {require('../assets/Alerts.png')}
                    style={styles.alerts}
                    />
                    </TouchableHighlight>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
  
    alerts: {
      borderRadius: 8,
      width: 380,
      height:  450,
      marginTop: 20,
    },

    scrollStyle: {
        backgroundColor: 'white'
    }

  });

export default Alerts
