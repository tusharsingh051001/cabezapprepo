import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>THIS IS CONTACT INFO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default Contact;
