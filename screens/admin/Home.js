import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({ navigation }) {
  const [user,setUser]=useState("")
const getData=async()=>{
  try {
    const savedUser = await AsyncStorage.getItem("user");
    const currentUser = JSON.parse(savedUser);
    console.log(currentUser);
    setUser(currentUser)
  } catch (error) {
    console.log(error);
  }
}

const logout = async () => {
  try {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("session");
    await AsyncStorage.setItem("isUserLogin",false);
    // navigation.navigate("Login")           

  } catch (error) {
    console.log(error);
  }
};
  
  return (
    <View
      // style={{
      //   flex: 1,
      //   flexDirection: "row",
      // padding:20,
      
// }}
     
    >
      <Text>{user.id}</Text>
       <Button title="get data" onPress={getData}/>
       <Button title="Logout" onPress={logout}/>

      {/* <View
        style={{ margin:20,flex: 1, flexDirection: "column",border:2,borderWidth:4 }}
      >
        <View style={[styles.flex,styles.border]}> </View>
        <View style={[styles.flex,styles.border]}></View>
      </View> */}

      {/* <View style={styles.flex}>
        <View style={[styles.flex,styles.border]}></View>
        <View style={[styles.flex,styles.border]}></View>
      </View> */}
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
