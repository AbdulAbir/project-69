import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import BarcodeScreen from "./screens/BarcodeScreen";


export default class App extends React.Component {
  render() {
    return(
        <BarcodeScreen />
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});