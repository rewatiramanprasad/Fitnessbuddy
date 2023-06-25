import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { StrictMode, useState } from "react";
import PrimaryButton from "../../components/common/PrimaryButton";
import RegisterMember from "../../components/common/RegisterMember";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Home() {
  const [isVisible,setVisible]=useState(false);
  function endModal() {
    setVisible(false);
  }
  function startModal() {
    setVisible(true);
  }
  return (
    <View style={styles.outerContainer}>
      <PrimaryButton onPress={startModal}>Add member</PrimaryButton>
      <RegisterMember visible={isVisible} endModal={endModal}/>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "yellow",
    padding:20,
    margin:20,
    flexdirection:'column',
  },
});
