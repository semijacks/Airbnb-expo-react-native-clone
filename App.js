import React from "react";
import { StatusBar, SafeAreaView, Text } from "react-native";
import HomeScreen from "./src/screens/Home";
import Post from "./src/components/Post";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_900Black,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
