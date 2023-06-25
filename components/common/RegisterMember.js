import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Modal,Image, ScrollView } from "react-native";

export default function RegisterMember(props) {
  const [message, setMessage] = useState("");

  return (
    <Modal visible={props.visible} animationType="slide">
      <ScrollView style={styles.inputContainer}>
        {/* <Image style={styles.image} source={require('../assets/image/target.png')}/> */}
        <Text style={{paddingLeft:90,color:'white',fontSize:24}}>Add Member</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={(e) => {
            setMessage(e);
          }}
          value={message}/>
    
    <TextInput
          style={styles.textInput}
          placeholder="Age"
          onChangeText={(e) => {
            setMessage(e);
          }}
          value={message}/>
          <TextInput
          style={styles.textInput}
          placeholder="Weight"
          onChangeText={(e) => {
            setMessage(e);
          }}
          value={message}/>
          <TextInput
          style={styles.textInput}
          placeholder="Phone"
          onChangeText={(e) => {
            setMessage(e);
          }}
          value={message}/>
          <TextInput
          style={styles.textInput}
          placeholder="Email"
          onChangeText={(e) => {
            setMessage(e);
          }}
          value={message}/>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          onChangeText={(e) => {
            setMessage(e);
          }}
          value={message}/>
          <TextInput
          style={styles.textInput}
          placeholder="Subscription"
          onChangeText={(e) => {
            setMessage(e);
          }}
          value={message}/>
    <TextInput
          style={styles.textInput}
          placeholder="Aadhar no"
          onChangeText={(e) => {
            setMessage(e);
          }}
          value={message}/>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Submit"
              onPress={() => {
                props.onSetArr((arr) => [
                  ...arr,
                  { text: message, id: Math.random().toString() },
                ]);
                setMessage("");
                props.endModal();
              }}
              color='#b180f0'
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.endModal} color='#f31282' />
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
    padding:16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    backgroundColor:'orangered'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    color:'#120438',
    borderRadius:6,
    width: "100%",
    // marginRight: 8,
    padding: 8,
    marginTop:15
  },
  buttonContainer:{
    marginTop:16,
    flexDirection:'row',
    paddingLeft:50

  },
  button:{
    width:100,
    marginHorizontal:8,
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
});
