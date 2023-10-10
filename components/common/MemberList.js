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
          padding: 0,
          borderWidth: 1,
          marginVertical: 6,
          marginHorizontal: 2,
          
        },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          border: 1,
          borderColor: "black",
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{ height: 40, width: 40, borderRadius: 100 }}
            src={item.avatarUrl}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text>{item.name}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>{item.subscription}</Text>
        </View>
        <View style={{ flex: 1.2 }}>
          <Text>{item.phone}</Text>
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
