import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PrimaryButton from "../../components/common/PrimaryButton";

import { createClient } from "@supabase/supabase-js";

const Signup = ({navigation}) => {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const supabaseUrl = "https://zyqpgpdsddwpfzfasjtc.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5cXBncGRzZGR3cGZ6ZmFzanRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzNjk2MDksImV4cCI6MjAwOTk0NTYwOX0.mpZR4-LLwwKKR_ONf_yNZU1dkWy9P_4VI3Cin8CMYQo";
  const supabase = createClient(supabaseUrl, supabaseKey);
  // const signup = async () => {
  //   console.log("signup is calling ");
  //   console.log(email,password)
  //   let { data, error } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //   });
  //   if (error) {
  //     console.log(error);
  //   }
  //   console.log(data);
  // };
// const login=async()=>{
  
// const { data, error } = await supabase.auth.signInWithPassword({
//   email: email,
//   password: password,
// })
// if (error) {
//       console.log(error);
//     }
// console.log(data);
// }
  return (
    <View style={styles.container}>
      <View style={styles.titleConatiner}>
        <Text style={styles.title}>Signup</Text>
      </View>
      <View style={styles.titleConatiner}>
        <TextInput
          placeholder="User Name"
          style={{ width: 270 }}
          onChangeText={(e) => {
            setEmail(e);
          }}
        />
        <TextInput
          placeholder="Password"
          style={{ width: 270, backgroundColor: "yellow" }}
          secureTextEntry={isPasswordSecure}
          onChangeText={(e) => {
            setPassword(e);
          }}
          right={
            <TextInput.Icon
              name={() => (
                <MaterialCommunityIcons
                  name={isPasswordSecure ? "eye-off" : "eye"}
                  size={28}
                  color="black"
                />
              )} // where <Icon /> is any component from vector-icons or anything else
              onPress={() => {
                isPasswordSecure
                  ? setIsPasswordSecure(false)
                  : setIsPasswordSecure(true);
              }}
            />
          }
        />
        <PrimaryButton style={styles.Button}>Signup</PrimaryButton>
        <Text  onPress={() => navigation.navigate("Home")}>Login</Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    flexDirection: "column",
    padding: 50,
  },
  titleConatiner: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  Button: {
    fontWeight: "bold",
    backgroundColor: "Orangered",
  },
});
