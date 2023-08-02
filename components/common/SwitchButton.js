import { Alert, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Switch } from 'react-native-paper'
export default function SwitchButton(props) {
const [clickSwitch,setClickSwitch]=useState(false);

  return (
    <View>
      <Switch value={clickSwitch}
       onValueChange={()=>{
        setClickSwitch(!clickSwitch)
        console.log("clicke me")
        }} />
    </View>
  )
}

const styles = StyleSheet.create({})