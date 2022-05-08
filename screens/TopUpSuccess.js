import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Card, Title, Paragraph, TextInput, Button } from "react-native-paper";
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function TopUpSuccess() {
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 40}}> TOP UP SUCCESSFUL! </Text>
            <AntDesign name="checkcircleo" size={60} color="green" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 75,

    }
});
