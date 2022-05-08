import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';

export class Account extends Component {
    render() {

        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <MaterialIcons name="account-circle" size={150} color="grey" style={styles.trLogo} />

                

                <Card style={styles.acctCard}>
                    <Card.Content>
                    <Title style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10, alignSelf: 'center' }}>
                        Account
                    </Title>
                    <Text style={styles.textStyle}>Account Name: Iceman</Text>
                    <Text style={styles.textStyle}>Balance: 12.058$</Text>
                    <Text style={styles.textStyle}>Fare Type:  Adult</Text>
                    </Card.Content>
                </Card>

                <TouchableOpacity onPress={() => navigation.navigate("TopUp")}>
                    <Card style={styles.cardStyle}>
                        <Card.Content>
                            <Title style={{ fontSize: 20, fontWeight: 'bold' }}>
                                Top Up Balance
                            </Title>
                        </Card.Content>
                    </Card>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
        alignItems: 'center',
    },

    trLogo: {
        flex: 1,
        position: 'absolute',
        top: 50,
    },
    cardStyle: {
        width: 350,
        height: 100,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        elevation: 40
    },

    acctCard: {
        width: 350, 
        height: 150,
        marginTop: 200,
        alignItems: 'center',
    },

    textStyle: {
        fontSize: 16,
        fontWeight: '300',
        alignSelf: 'center',
    }
})


export default Account
