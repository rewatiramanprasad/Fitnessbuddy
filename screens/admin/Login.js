import { ActivityIndicator, Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PrimaryButton from "../../components/common/PrimaryButton";

import AsyncStorage from "@react-native-async-storage/async-storage";
import SupabaseAuth from "../Utilities/SupabaseAuth";
const Login = ({ navigation }) => {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [email, setEmail] = useState("ramanprasad.0203@gmail.com");
  const [password, setPassword] = useState("Raman@123");
  const [loading, setLoading] = useState(false);

  // const supabaseUrl = "https://zyqpgpdsddwpfzfasjtc.supabase.co";
  // const supabaseKey =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5cXBncGRzZGR3cGZ6ZmFzanRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzNjk2MDksImV4cCI6MjAwOTk0NTYwOX0.mpZR4-LLwwKKR_ONf_yNZU1dkWy9P_4VI3Cin8CMYQo";
  // const supabase = createClient(supabaseUrl, supabaseKey);
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
  const setLoginData = async (data) => {
    try {
      await AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));
      await AsyncStorage.setItem("user", JSON.stringify(data["user"]));
      await AsyncStorage.setItem("session", JSON.stringify(data["session"]));
    } catch (error) {
      console.log(error);
    }

    // console.log(AsyncStorage.getItem('user'))
  };
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      await AsyncStorage.removeItem("session");
    } catch (error) {
      console.log(error);
    }
  };
  const login = async () => {
    setLoading(true);
    const { data, error } = await SupabaseAuth.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      console.log(error);
      console.log("error part");
      Alert.alert(error.message);
      setLoading(false);
    } else {
      setLoading(false);
      console.log(data);
      setLoginData(data);
      navigation.navigate("AdminDashboard");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ elevate: 10, backgroundColor: "rgb(229 225 245)" }}>
        <View style={styles.titleConatiner}>
          <Text style={styles.title}>💪ogin</Text>
        </View>
        <View style={styles.titleConatiner}>
          <TextInput
            placeholder="User Name"
            style={{ width: 270 }}
            value={email}
            onChangeText={(e) => {
              setEmail(e);
            }}
          />
          <TextInput
            placeholder="Password"
            style={{ width: 270 }}
            secureTextEntry={isPasswordSecure}
            value={password}
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
          {loading ? (
            <ActivityIndicator size="large" color="orangered" />
          ) : (
            <PrimaryButton style={styles.Button} onPress={login}>
              Login
            </PrimaryButton>
          )}
          <Text onPress={() => navigation.navigate("AdminDashboard")}>
            Signup
          </Text>
          <Text onPress={logout}>logout</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
    backgroundColor: "Blue",
  },
});
