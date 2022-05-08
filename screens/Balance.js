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

export function BalanceScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Headline style={{ fontSize: 28, paddingTop: 25, paddingBottom:25 }}>Balance</Headline>
      <Card style={styles.card}>
      <Card.Content>
      <Caption2 style={styles.balanceDeets}>Amount: 12.50$</Caption2>
      <Image style={styles.logo} source={require('../assets/img.png')}/>
      </Card.Content>
      </Card>
      <Caption1 style={{ textAlign: "center", paddingRight: 50, paddingLeft: 50, paddingTop: 12, paddingBottom:25 }}>Choose to set up auto top-up so you’ll never be out of cash to travel on our light rail.</Caption1>
      <TouchableOpacity onPress={() => navigation.navigate("TopUp")}>
      <Card style={styles.miniCard}>
          <Card.Content>
              <Title style={styles.cardTitle}>
                  Top Up Balance
              </Title>
          </Card.Content>
      </Card>
      </TouchableOpacity>
      <Headline style={{ fontSize: 28, paddingTop: 10, paddingBottom:25 }}>Trip Activity</Headline>

      <Card style={styles.wideCard}>
          <Card.Content>
              <Title style={styles.tripTitle}>
                  Trip #
              </Title>
              <Title style={styles.tripCost}>
                  -$2.50
              </Title>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
          <Card.Content>
              <Title style={styles.tripTitle}>
                  Trip #
              </Title>
              <Title style={styles.tripCost}>
                  -$2.50
              </Title>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
          <Card.Content>
              <Title style={styles.tripTitle}>
                  Trip #
              </Title>
              <Title style={styles.tripCost}>
                  -$2.50
              </Title>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
          <Card.Content>
              <Title style={styles.tripTitle}>
                  Trip #
              </Title>
              <Title style={styles.tripCost}>
                  -$2.50
              </Title>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
          <Card.Content>
              <Title style={styles.tripTitle}>
                  Trip #
              </Title>
              <Title style={styles.tripCost}>
                  -$2.50
              </Title>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
          <Card.Content>
              <Title style={styles.tripTitle}>
                  Trip #
              </Title>
              <Title style={styles.tripCost}>
                  -$2.50
              </Title>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
          <Card.Content>
              <Title style={styles.tripTitle}>
                  Trip #
              </Title>
              <Title style={styles.tripCost}>
                  -$2.50
              </Title>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
          <Card.Content>
              <Title style={styles.tripTitle}>
                  Trip #
              </Title>
              <Title style={styles.tripCost}>
                  -$2.50
              </Title>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
          <Card.Content>
              <Title style={styles.tripTitle}>
                  Trip #
              </Title>
              <Title style={styles.tripCost}>
                  -$2.50
              </Title>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
          <Card.Content>
              <Title style={styles.tripTitle}>
                  Trip #
              </Title>
              <Title style={styles.tripCost}>
                  -$2.50
              </Title>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
          </Card.Content>
      </Card>
    </View>
    </ScrollView>
  );
}

export default function BalanceNav() {
  return (
    <BottomNavigation />
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
    height: 150,
    width: 128,
    marginLeft: 85,
    marginRight: 'auto',
    position: 'absolute',
    zIndex: 1,
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
