import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
// import { Switch } from 'react-native-paper'
import supabase from "../../screens/Utilities/SupabaseAuth";
import SwitchButton from "./SwitchButton";


const MemberList = ({ item, onPress, backgroundColor, textColor }) => {
  const attendance = async () => {
    try {
      const { data, error } = await supabase
        .from("attendance")
        .insert([{ uuid: item.uuid }])
        .select();
      if (error) {
        console.log(error);
      }
      // throw new Error(error);
      if (data) {
        console.log("Attendance marked in!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity
      
      style={[
        styles.item,
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
            src={props.item.avatarUrl}
          />
        </View>
        <View
          style={{ flex: 1, flexDirection: "column" }}>
          <Text onPress={()=>{console.log("ths is props",props); props.item.nav(props.item);}} >{props.item.name}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>{props.item.subscription}</Text>
        </View>
        <View style={{ flex: 1.2 }}>
          <Text>{props.item.phone}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <SwitchButton Attendance={attendance} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MemberList;

const styles = StyleSheet.create({});
