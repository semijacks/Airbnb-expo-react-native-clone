import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}
