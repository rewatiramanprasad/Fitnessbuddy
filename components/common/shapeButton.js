import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function ShapeButton(props) {
    

    return (
      <Pressable onPress={props.pressLiked}>
        <MaterialCommunityIcons
          name={props.isClick ? "heart" : "heart-outline"}
          size={32}
          color={props.isClick ? "red" : "black"}
        />
      </Pressable>
    )
}
const style=StyleSheet.create({})