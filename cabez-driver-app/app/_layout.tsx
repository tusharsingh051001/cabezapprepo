import store from "@/store/store";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { View } from "react-native";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar hidden={false} barStyle="dark-content" />
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </Provider>
  );
}
