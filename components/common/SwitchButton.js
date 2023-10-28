import { Alert, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Switch } from "react-native-paper";
export default function SwitchButton({ Attendance }) {
  const [clickSwitch, setClickSwitch] = useState(false);

  return (
    <View>
      <Switch
        value={clickSwitch}
        onValueChange={() => {
          setClickSwitch(!clickSwitch);
          Attendance();
          console.log("i'm switch button");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
