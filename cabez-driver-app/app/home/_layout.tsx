import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          paddingBottom: 10,
          paddingTop: 10,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color="orange" />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/attendance/index"
        options={{
          title: "Attendance",
          tabBarLabel: "Attendance",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="paper-plane" size={24} color="orange" />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/profile/index"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="person" size={24} color="orange" />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/contactUs/index"
        options={{
          title: "Contact Us",
          tabBarLabel: "Contact Us",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="phone" size={24} color="orange" />
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
