import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph } from "react-native-paper";

export class Dashboard extends Component {
    render() {

        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Image
                source = {require('../assets/img.png')}
                style = {styles.trLogo}
                />
                <View style={styles.cardContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Balance")}>
                        <Card style={styles.optCard}>
                            <Card.Content>
                                <Title style={styles.cardTitle}>
                                    Balance and Activity
                                </Title>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Trip")}>
                        <Card style={styles.optCard}>
                            <Card.Content>
                                <Title style={styles.cardTitle}>
                                    Find a Route
                                </Title>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("RouteScreen")}>
                        <Card style={styles.optCard}>
                            <Card.Content>
                                <Title style={styles.cardTitle}>
                                    Saved Routes
                                </Title>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Account")}>
                        <Card style={styles.optCard}>
                            <Card.Content>
                                <Title style={styles.cardTitle}>
                                    Account
                                </Title>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("TopUp")}>
                        <Card style={styles.optCard}>
                            <Card.Content>
                                <Title style={styles.cardTitle}>
                                    Top Up Balance
                                </Title>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Alerts")}>
                        <Card style={styles.optCard}>
                            <Card.Content>
                                <Title style={styles.cardTitle}>
                                    Alerts and Weather
                                </Title>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("TapOn")}>
                        <Card style={styles.optCardWide}>
                            <Card.Content>
                                <Title style={styles.cardTitleBig}>
                                    Tap On!
                                </Title>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>

                </View>


            </View>
        )
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
        flex: 1,
        width: 150,
        height:150,
        resizeMode: 'contain',
        position: 'absolute',
        top: 0,
    },

    cardContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 125,
        alignItems: 'center',
        justifyContent: 'center'
    },

    optCard: {
        borderRadius: 8,
        width: 120,
        height: 120,
        //padding: 10,
        backgroundColor: 'white',
        borderWidth:0,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        borderColor:'#808080',
        marginTop:10,
        elevation: 10
    },

    optCardWide: {
        borderRadius: 8,
        width: 280,
        height: 120,
        //padding: 10,
        backgroundColor: 'white',
        borderWidth:0,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        borderColor:'#808080',
        marginTop:40,
        elevation: 10
    },

    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 0
    },

    cardTitleBig: {
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 30,
    }

});

export default Dashboard
