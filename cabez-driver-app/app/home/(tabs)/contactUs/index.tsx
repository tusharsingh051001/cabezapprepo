import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import Tac from "@/components/appComponents/contactComponents/tac";
import Contact from "@/components/appComponents/contactComponents/contact";
import Faq from "@/components/appComponents/contactComponents/faq";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const [openTab, setOpenTab] = useState(null);

  const toggleAccordion = (tab: any) => {
    setOpenTab(openTab === tab ? null : tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        {/* Terms and Conditions */}
        <TouchableOpacity
          onPress={() => toggleAccordion("tac")}
          style={styles.tab}
        >
          <Text style={styles.tabTitle}>Terms and Conditions</Text>
        </TouchableOpacity>
        <Collapsible collapsed={openTab !== "tac"}>
          <View style={styles.profileContainer}>
            <Tac />
          </View>
        </Collapsible>

        {/* Contact Us */}
        <TouchableOpacity
          onPress={() => toggleAccordion("contact")}
          style={styles.tab}
        >
          <Text style={styles.tabTitle}>Contact Us</Text>
        </TouchableOpacity>
        <Collapsible collapsed={openTab !== "contact"}>
          <View style={styles.profileContainer}>
            <Contact />
          </View>
        </Collapsible>

        {/* FAQs */}
        <TouchableOpacity
          onPress={() => toggleAccordion("faq")}
          style={styles.tab}
        >
          <Text style={styles.tabTitle}>FAQs</Text>
        </TouchableOpacity>
        <Collapsible collapsed={openTab !== "faq"}>
          <View style={styles.profileContainer}>
            <Faq />
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
