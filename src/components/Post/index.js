import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles.js";

const Post = (props) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
      />

      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>1 bed. 1 bedroom</Text>

      {/* Type and Description */}
      <Text style={styles.description} numberOfLines={2}>
        Entire Flat. In Lorem ea nostrud cillum et consectetur magna est cillum
        pariatur tempor ullamco.
      </Text>

      {/* Old Price and new Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.price}> $30</Text>/ night
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
