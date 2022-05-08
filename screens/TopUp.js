import React, { Component, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Card, Title, Paragraph, TextInput, Button } from "react-native-paper";
import { Fontisto } from '@expo/vector-icons';


export class TopUp extends Component {

    state = {
        isEnabled: false
    }

    toggleSwitch = (value) => {
        this.setState({isEnabled: value})
    }

    render() {
        const { navigation } = this.props;

        
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Title
                style={{ fontSize: 30, fontWeight: 'bold' }}
                >
                    Top Up Balance
                </Title>
                <Paragraph style={{ fontSize: 16, padding: 25}}>
                    Your total card balance includes the
                    current balance, any pending balance
                    and the selected top up amount. Online
                    top ups show as 'pending' until the card
                    is tapped on at a reader.
                </Paragraph>
                <Paragraph style={{ fontSize: 16, padding: 25}}>
                    It may take up to 60 minutes for this top
                    up to be available to tap on with.
                </Paragraph>
                {/* <Text style={{ fontSize: 20, borderRadius: 8 }}>
                    Auto Top-Up
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        ios_backgroundColor="#3e3e3e"
                    />
                </Text> */}
                <Card style={styles.switchContainer}>
                    <Text style={{ alignSelf: 'flex-start', fontWeight: '300', fontSize:  15 }}>AUTO TOP-UP</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="white"
                        onValueChange={this.toggleSwitch}
                        value={this.state.isEnabled}
                        style={{ alignSelf: 'flex-end', transform: [{scale: .9}], bottom: 24 }}
                    />
                </Card>

                <Text style={{ alignSelf: 'flex-start', paddingLeft: 20, fontWeight: 'bold'}}>Top Up Amount</Text>
                <TextInput
                mode="outlined"
                placeholder="$0.00"
                onChangeText={(text) => this.setState({input: text})}
                style={styles.inputStyle}
                />

                <Text style={{ alignSelf: 'flex-start', paddingLeft: 20, paddingTop: 20, fontWeight: 'bold'}}>Pay With</Text>
                <TextInput style={styles.inputStyle}
                mode="outlined"
                />


                <Text
                style={{ textAlign: 'left', color: 'blue' }}
                onPress={() => navigation.navigate("Payment")}
                >
                    CHANGE PAYMENT METHOD
                </Text>

                <Button
                mode="contained"
                style={{ marginTop: 40, backgroundColor: 'blue', color: 'white'}}
                onPress={() => navigation.navigate("TopUpSuccess")}
                >
                    TOP UP NOW
                </Button>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 75,

    },

    switchContainer: {
        width: 350,
        height: 40,
        borderRadius: 25,
        padding: 10,
        backgroundColor: '#D3D3D3',
        marginBottom:50
    },

    searchIcon: {
        padding: 10,
    },

    inputStyle: {
        width:350,
        height: 50,
        borderRadius: 8,
    },

    visaWrap: {
        borderBottomWidth: 30,
        position:'relative',
        zIndex:2,
        paddingTop:10,
        paddingLeft:5,
      },

    inStyle: {
        //flex: 1,
        zIndex:0,
        width:400,
        height:50,
        paddingRight: 210,
        paddingBottom: 50,
        position:'absolute',
      },
})

export default TopUp
