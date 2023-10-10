import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Modal,
  Image,
  ScrollView,
} from "react-native";

import supabase from "../../screens/Utilities/SupabaseAuth";

export default function RegisterMember(props,{ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subscription, setSubscription] = useState("");
  const [aadhar, setAadhar] = useState("");
  const setTextAsEmpty = () => {
    setName("");
    setAge("");
    setEmail("");
    setPhone("");
    setWeight("");
    setPassword("");
    setSubscription("");
    setAadhar("");
  };
  const insertData = async () => {
    const { data, error } = await supabase
      .from("members")
      .insert([
        {
          name: name,
          age: age,
          weight: weight,
          phone: phone,
          email: email,
          password: password,
          subscription: subscription,
          aadhar: aadhar,
        },
      ])
      .select();
    if (error) {
      console.log(error);
    }
    console.log(data, error);
    if (data.length) {
      console.log(data);
      console.warn("New member added successfully.Check mail and verify it");
      navigation.navigate("Members");
    }
  };
  // useEffect(() => {

  // }, []);

  return (
    <Modal visible={props.visible} animationType="slide">
      <ScrollView style={styles.inputContainer}>
        {/* <Image style={styles.image} source={require('../assets/image/target.png')}/> */}
        <Text style={{ paddingLeft: 90, color: "white", fontSize: 24 }}>
          Add Member
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={(e) => {
            setName(e);
          }}
          value={name}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Age"
          onChangeText={(e) => {
            setAge(e);
          }}
          value={age}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Weight"
          onChangeText={(e) => {
            setWeight(e);
          }}
          value={weight}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone"
          onChangeText={(e) => {
            setPhone(e);
          }}
          value={phone}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(e) => {
            setEmail(e);
          }}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(e) => {
            setPassword(e);
          }}
          value={password}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Subscription"
          onChangeText={(e) => {
            setSubscription(e);
          }}
          value={subscription}
        />
        <TextInput
          style={styles.textInput}
          placeholder="AadharNo"
          onChangeText={(e) => {
            setAadhar(e);
          }}
          value={aadhar}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Submit"
              onPress={() => {
                insertData();
                setTextAsEmpty();

                props.endModal();
              }}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.endModal} color="#f31282" />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // marginBottom: 24,
    padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    backgroundColor: "orangered",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    // marginRight: 8,
    padding: 8,
    marginTop: 15,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    paddingLeft: 50,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
