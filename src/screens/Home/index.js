import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./styles";

const HomeScreen = (props) => {
  return (
    <View>
      {/* Search Bar*/}

      <ImageBackground
        source={require("../../../assets/images/wallpaper.jpg")}
        style={styles.image}
      >
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
