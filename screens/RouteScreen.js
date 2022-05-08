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
import { MaterialIcons, MaterialCommunityIcons, Foundation, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import {
  NavigationContainer,
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
} from '@react-navigation/native';

import { Card, Title } from 'react-native-paper';

export default function RouteScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Headline style={{ fontSize: 28, paddingTop: 25, paddingBottom:25 }}>Saved Routes</Headline>
      <Caption1 style={{ textAlign: "center", paddingRight: 50, paddingLeft: 50, paddingTop: 0, paddingBottom:0 }}>Favorite your frequent or important routes.</Caption1>
      <Caption1 style={{ textAlign: "center", paddingRight: 50, paddingLeft: 50, paddingTop: 0, paddingBottom:20 }}>Search routes by tags that you can set.</Caption1>
      <Card style={styles.miniCard}>
          <Card.Content>
              <Title style={styles.cardTitle}>
                  Search By Tag
              </Title>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
      <Card.Content style={styles.starPad}>
        <FontAwesome name="star" size={24} color="black" />
      </Card.Content>
          <Card.Content style={styles.tripPad}>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
              <Caption2 style={styles.tripTag}>#work</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
      <Card.Content style={styles.starPad}>
        <FontAwesome name="star" size={24} color="black" />
      </Card.Content>
          <Card.Content style={styles.tripPad}>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
              <Caption2 style={styles.tripTag}>#home</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
      <Card.Content style={styles.starPad}>
        <FontAwesome name="star" size={24} color="black" />
      </Card.Content>
          <Card.Content style={styles.tripPad}>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
              <Caption2 style={styles.tripTag}>#brother</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
      <Card.Content style={styles.starPad}>
        <FontAwesome name="star-o" size={24} color="black" />
      </Card.Content>
          <Card.Content style={styles.tripPad}>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
              <Caption2 style={styles.tripTag}>#park</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
      <Card.Content style={styles.starPad}>
        <FontAwesome name="star-o" size={24} color="black" />
      </Card.Content>
          <Card.Content style={styles.tripPad}>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
              <Caption2 style={styles.tripTag}>#girlfriend</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
      <Card.Content style={styles.starPad}>
        <FontAwesome name="star-o" size={24} color="black" />
      </Card.Content>
          <Card.Content style={styles.tripPad}>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
              <Caption2 style={styles.tripTag}>#library</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
      <Card.Content style={styles.starPad}>
        <FontAwesome name="star-o" size={24} color="black" />
      </Card.Content>
          <Card.Content style={styles.tripPad}>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
              <Caption2 style={styles.tripTag}>#work</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
      <Card.Content style={styles.starPad}>
        <FontAwesome name="star-o" size={24} color="black" />
      </Card.Content>
          <Card.Content style={styles.tripPad}>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
              <Caption2 style={styles.tripTag}>#work</Caption2>
          </Card.Content>
      </Card>

      <Card style={styles.wideCard}>
      <Card.Content style={styles.starPad}>
        <FontAwesome name="star-o" size={24} color="black" />
      </Card.Content>
          <Card.Content style={styles.tripPad}>
              <Caption2 style={styles.tripDeets}>Start: UNSW Gate 2</Caption2>
              <Caption2 style={styles.tripDeets}>Destination: Centennial Parklands</Caption2>
              <Caption2 style={styles.tripTag}>#easteregg</Caption2>
          </Card.Content>
      </Card>
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

  cardTitle: {
      fontSize: 15,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginTop: -12,
  },

  miniCard: {
      borderRadius: 8,
      width: 300,
      height: 45,
      //padding: 10,
      backgroundColor: '#CCEDFA',
      borderWidth:0,
      marginBottom:30,
      //marginLeft:20,
      //marginRight:20,
      borderColor:'#ADD8E6',
      //marginTop:10,
      elevation: 5,
      borderRadius: 25
  },

  wideCard: {
      paddingTop: -50,
      borderRadius: 8,
      width: 300,
      height: 90,
      backgroundColor: 'white',
      marginBottom:8,
      borderColor:'#808080',
      elevation: 10,
      position: "relative",
      zIndex:0,
  },

  starPad: {
      marginTop: 20,
  },

  tripPad: {
      marginTop: -35,
  },

  tripDeets: {
      fontSize: 14,
      color: "gray",
      marginBottom: 5,
      paddingLeft: 35,
      zIndex:2,
  },

  tripTag: {
      fontSize: 14,
      color: "black",
      marginBottom: 5,
      paddingLeft: 35,
      zIndex:2,
  },
});
