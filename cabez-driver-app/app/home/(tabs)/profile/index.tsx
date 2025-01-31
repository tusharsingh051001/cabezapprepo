import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import DriverProfile from "@/components/appComponents/profileComponents/DriverProfile";
import ParentProfile from "@/components/appComponents/profileComponents/ParentProfile";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const [openTab, setOpenTab] = useState(null);

  const toggleAccordion = (tab: any) => {
    setOpenTab(openTab === tab ? null : tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        {/* Parent Profile */}
        <TouchableOpacity
          onPress={() => toggleAccordion("parent")}
          style={styles.tab}
        >
          <Text style={styles.tabTitle}>My Details</Text>
        </TouchableOpacity>
        <Collapsible collapsed={openTab !== "parent"}>
          <View style={styles.profileContainer}>
            <ParentProfile />
          </View>
        </Collapsible>

        {/* Driver Profile */}
        <TouchableOpacity
          onPress={() => toggleAccordion("driver")}
          style={styles.tab}
        >
          <Text style={styles.tabTitle}>My Driver Details</Text>
        </TouchableOpacity>
        <Collapsible collapsed={openTab !== "driver"}>
          <View style={styles.profileContainer}>
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
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // Android shadow
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 6,
    borderLeftColor: "orange",
  },
  tabTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  profileContainer: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginTop: 5,
  },
});

export default Profile;
