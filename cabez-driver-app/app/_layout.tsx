import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={false} barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
