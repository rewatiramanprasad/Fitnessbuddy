import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      padding:20,
      
      }}
    >
      <View
        style={{ margin:20,flex: 1, flexDirection: "column",border:2,borderWidth:4 }}
      >
        <View style={[styles.flex,styles.border]}></View>
        <View style={[styles.flex,styles.border]}></View>
      </View>

      <View style={styles.flex}>
        <View style={[styles.flex,styles.border]}></View>
        <View style={[styles.flex,styles.border]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  border:{
    Border:1,
    borderWidth:5,
    borderColor:'grey',
    borderTopLeftRadius:50,
    borderBottomRightRadius:50
  },
  flex:{
    margin:20,
    flex: 1
  }
});
