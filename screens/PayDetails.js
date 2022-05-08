import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Card, Title, Paragraph, TextInput, Button } from "react-native-paper";
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";

export default function PayDetails() {
    return(
        <View style={styles.container}>
            <Title style={{ marginBottom: 20, fontWeight:'bold'}}>Enter Payment Details</Title>
            <CreditCardInput />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 25,
        
    }
});
