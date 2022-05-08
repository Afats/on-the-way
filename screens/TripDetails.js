import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import { Title } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export class TripDetails extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Title style={{ fontSize: 30, marginTop: 80, fontWeight: 'bold' }}>
                        Trip Details
                    </Title>

                    <TouchableHighlight> 
                    <Image 
                    source = {require('../assets/Map.png')}
                    style={styles.map}
                    />
                    </TouchableHighlight>

                    <TouchableHighlight> 
                    <Image 
                    source = {require('../assets/loc_details.png')}
                    style={styles.route}
                    />
                    </TouchableHighlight>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
  
    map: {
      borderRadius: 8,
      width: 300,
      height: 300,
      marginTop: 20,
    },

    route: {
        width: 350,
        height: 350,
        marginTop: 20
    }
  
  });

export default TripDetails
