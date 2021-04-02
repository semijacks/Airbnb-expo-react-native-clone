import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/Home";
import Post from "./src/components/Post";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <Post />
      </SafeAreaView>
    </>
  );
}
