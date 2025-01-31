import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";
import Collapsible from "react-native-collapsible";
import DriverProfile from "@/components/appComponents/profileComponents/DriverProfile";
import ParentProfile from "@/components/appComponents/profileComponents/ParentProfile";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const [openTab, setOpenTab] = useState(null);
  const colorScheme = useColorScheme(); // Detect light or dark mode

  const isDarkMode = colorScheme === "dark";

  const toggleAccordion = (tab) => {
    setOpenTab(openTab === tab ? null : tab);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? "#121212" : "#F9F9F9" }]}>
      <View style={styles.tabContainer}>
        {/* Parent Profile */}
        <TouchableOpacity
          onPress={() => toggleAccordion("parent")}
          style={[styles.tab, isDarkMode && styles.darkTab]}
        >
          <Text style={[styles.tabTitle, isDarkMode && styles.darkTabTitle]}>My Details</Text>
        </TouchableOpacity>
        <Collapsible collapsed={openTab !== "parent"}>
          <View style={[styles.profileContainer, isDarkMode && styles.darkProfileContainer]}>
            <ParentProfile />
          </View>
        </Collapsible>

        {/* Driver Profile */}
        <TouchableOpacity
          onPress={() => toggleAccordion("driver")}
          style={[styles.tab, isDarkMode && styles.darkTab]}
        >
          <Text style={[styles.tabTitle, isDarkMode && styles.darkTabTitle]}>My Driver Details</Text>
        </TouchableOpacity>
        <Collapsible collapsed={openTab !== "driver"}>
          <View style={[styles.profileContainer, isDarkMode && styles.darkProfileContainer]}>
            <DriverProfile />
          </View>
        </Collapsible>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
  },
  tabContainer: {
    flexDirection: "column",
    gap: 10,
  },
  tab: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // Android shadow
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 6,
    borderLeftColor: "#FFA500", // Orange accent
  },
  tabTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333", // Dark grey for tab text
  },
  profileContainer: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginTop: 5,
  },

  // Dark Mode Styles
  darkTab: {
    backgroundColor: "#1E1E1E",
    borderColor: "#333",
  },
  darkTabTitle: {
    color: "#FFF",
  },
  darkProfileContainer: {
    backgroundColor: "#1E1E1E",
    borderColor: "#333",
  },
});

export default Profile;
