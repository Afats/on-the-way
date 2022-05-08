import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import {
  TabBar,
  ThemeProvider,
  Headline,
  NavigationRow,
  Icon,
  RowItem,
  ArrowRight,
  Caption2,
  Caption1 } from 'react-native-ios-kit';
import Constants from 'expo-constants';
import { MaterialIcons, MaterialCommunityIcons, Foundation, FontAwesome5 } from '@expo/vector-icons';
import {
  NavigationContainer,
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
} from '@react-navigation/native';

import { Card, Title } from 'react-native-paper';
import BottomNavigation from "./BottomNav";

export default function Trip({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Headline style={{ fontSize: 28, paddingTop: 25, paddingBottom:25 }}>Find a Route</Headline>
      <Card style={styles.card}>
      <Card.Content>
      <Image style={styles.logo} source={require('../assets/loc_picker.png')}/>
      </Card.Content>
      </Card>
      <Caption1 style={{ textAlign: "center", paddingRight: 50, paddingLeft: 50, paddingTop: 12, paddingBottom:25 }}>Pick a start location and a destination. Set a tag if you wish, and save to add it to your saved routes.</Caption1>

      <Image style={styles.params} source={require('../assets/params.png')}/>

      <TouchableOpacity onPress={() => navigation.navigate("TripDetails")}>
        <Image style={styles.trip} source={require('../assets/irp.png')}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("TripDetails")}>
        <Image style={styles.trip} source={require('../assets/nirp.png')}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("TripDetails")}>
        <Image style={styles.trip} source={require('../assets/nirp1.png')}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("TripDetails")}>
        <Image style={styles.trip} source={require('../assets/nirp2.png')}/>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    marginTop:10,
    height: 150,
    width: 300,
    position: 'absolute',
    zIndex: 1,
  },
  params: {
    marginBottom:20,
    //width:'78%',
  },
  trip: {
    marginBottom:10,
  },
  card: {
    elevation: 20,
    height: 180,
    width:300 ,
    borderRadius: 8,
  },
  miniCard: {
      borderRadius: 8,
      width: 300,
      height: 50,
      //padding: 10,
      backgroundColor: 'white',
      borderWidth:0,
      marginBottom:30,
      //marginLeft:20,
      //marginRight:20,
      borderColor:'#808080',
      //marginTop:10,
      elevation: 5,
  },

  wideCard: {
      borderRadius: 8,
      width: 300,
      height: 90,
      //padding: 10,
      backgroundColor: 'white',
      borderWidth:0,
      marginBottom:8,
      //marginLeft:20,
      //marginRight:20,
      borderColor:'#808080',
      //marginTop:10,
      elevation: 10
  },

  cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: -10
  },

  tripTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: -10,
      marginBottom: 10,
      alignSelf: "flex-start",
      color: "#00008B"
  },

  tripCost: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: -45,
      marginBottom: 15,
      marginRight: -5,
      alignSelf: "flex-end",
      color: "#FF7F50"
  },

  tripDeets: {
      fontSize: 14,
      alignSelf: "flex-start",
      color: "gray",
      marginBottom: 5
  },

  balanceDeets: {
      fontSize: 14,
      alignSelf: "flex-start",
      fontWeight: 'bold',
      color: "gray",
      marginLeft: 157,
      marginTop: 138,
      zIndex: 2,
  }
});
