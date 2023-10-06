import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
// import { Switch } from 'react-native-paper'
// import SupabaseAuth from "../Utilities/SupabaseAuth";
import SwitchButton from "./SwitchButton";

const MemberList = ({ item, onPress, backgroundColor, textColor }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        { backgroundColor },
        {
          borderRadius: 50,
          padding: 10,
          borderWidth: 2,
          marginVertical: 8,
          marginHorizontal: 16,
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          border: 2,
          borderColor: "black",
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{ height: 40, width: 40, borderRadius: 100 }}
            src={item.avatarUrl}
          />
        </View>
        <View style={{ flex: 3, flexDirection: "column" }}>
          <Text>{item.recentText}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <SwitchButton />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MemberList;

const styles = StyleSheet.create({});
