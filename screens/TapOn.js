import React, { Component } from 'react'
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




export default class TapOnScreen extends Component {
    render() {
      const { navigation } = this.props;
      return(
      <ThemeProvider>
      <View style={styles.container}>
        <Headline style={{ fontSize: 28, paddingTop: 25, paddingBottom:25 }}>Tap On</Headline>
        <TouchableOpacity onPress={() => navigation.navigate("TapSuccess")}>
          <Image style={styles.pay} source={require('../assets/card.png')}/>
        </TouchableOpacity>
      </View>
      </ThemeProvider>
      );
    }
}



// export default function TapOn() {
//   return (
//     <BottomNavigation />
//   );
// }

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
  pay: {
    //marginTop: 75,
    height: 700,
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card: {
    elevation: 20,
    height: 180,
    width:300 ,
    borderRadius: 8,
  }
});
