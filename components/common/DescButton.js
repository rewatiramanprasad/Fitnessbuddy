import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function DescButton(props) {
    

    return (
      <Pressable onPress={props.pressDesc}>
        <MaterialCommunityIcons
          name={props.isDesClick ? "text-box-check" : "text-box-check-outline"}
          size={32}
          color={props.isDesClick ? "red" : "black"}
        />
      </Pressable>
    )
}
const style=StyleSheet.create({})