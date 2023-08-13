import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PrimaryButton from "../../components/common/PrimaryButton";

const Login = () => {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.titleConatiner}>
        <Text style={styles.title}>💪ogin</Text>
      </View>
      <View style={styles.titleConatiner}>
        <TextInput placeholder="User Name" style={{ width: 270 }} />
        <TextInput
          placeholder="Password"
          style={{ width: 270, backgroundColor: "yellow" }}
          secureTextEntry={isPasswordSecure}
          right={ 
            <TextInput.Icon
              name={() => (
                <MaterialCommunityIcons
                  name={isPasswordSecure ? "eye-off" : "eye"}
                  size={28}
                  color="black"                />
              )} // where <Icon /> is any component from vector-icons or anything else
              onPress={() => {
                isPasswordSecure
                  ? setIsPasswordSecure(false)
                  : setIsPasswordSecure(true);
              }}
            />
          }
        />
        <PrimaryButton style={styles.Button}>Singin</PrimaryButton>
      </View>
    </View>
  );
};

export default Login;

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
    backgroundColor: "Blue",
  },
});
