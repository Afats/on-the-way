import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/HomeScreen";
import DashBoard from "./screens/Dashboard";
import Balance from "./screens/Balance";
import Trip from "./screens/Trip"
import TopUp from "./screens/TopUp";
import TapOn from "./screens/TapOn";
import TapSucc from "./screens/TapSucc";
import Account from "./screens/Account";
import RouteScreen from "./screens/RouteScreen"
import TopUpSuccess from "./screens/TopUpSuccess";
import PayDetails from "./screens/PayDetails";
import TripDetails from "./screens/TripDetails";
import Alerts from "./screens/Alerts";
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';



const Stack = createStackNavigator();


export default class App extends React.Component  {

    state = {
      isReady: false,
    };

    performTimeConsumingTask = async() => {
      return new Promise((resolve) =>
        setTimeout(
          () => { resolve('result')},
          2000
        )
      );
    }

    async componentDidMount() {
      // Preload data from an external API
      // Preload data using AsyncStorage
      const data = await this.performTimeConsumingTask();

      if (data !== null) {
        this.setState({ isReady: !this.isReady });
      }
    }

    render(){
      if(!this.state.isReady){
        return(
          <Home />
        );
      }

      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="DashBoard" screenOptions={{ headerShown: false}}>
            <Stack.Screen options={{ headerShown: true }} name="DashBoard" component={DashBoard} />
            <Stack.Screen name="Balance" component={Balance} />
            <Stack.Screen name="TapOn" component={TapOn} />
            <Stack.Screen name="Trip" component={Trip} />
            <Stack.Screen name="TapSuccess" component={TapSucc} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="TopUp" component={TopUp} />
            <Stack.Screen name="TopUpSuccess" component={TopUpSuccess} />
            <Stack.Screen name="RouteScreen" component={RouteScreen} />
            <Stack.Screen name="TripDetails" component={TripDetails} />
            <Stack.Screen name="Alerts" component={Alerts} />
            <Stack.Screen options={{ headerShown: true }} name="Payment" component={PayDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }


}
