import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import React, { StrictMode, useState, useEffect } from "react";
import PrimaryButton from "../../components/common/PrimaryButton";
import RegisterMember from "../../components/common/RegisterMember";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MemberList from "../../components/common/MemberList";
import supabase from "../Utilities/SupabaseAuth";

export default function Members({navigation}) {
  const [isVisible, setVisible] = useState(false);
  const [users, setUsers] = useState([]);
  function nav(it){
    console.log("we are rcvng",it);
    
    navigation.navigate("MemberProfile",{"data":it});
  }
  function endModal() {
    setVisible(false);
  }
  function startModal() {
    setVisible(true);
  }

  const [selectedId, setSelectedId] = useState();
  useEffect(() => {
    data();
  }, []);
  const data = async () => {
    const { data, error } = await supabase.from("members").select();
    if (error) {
      console.log(error);
    }
    console.log("this is datta",data);
    for(let i of data){i["nav"]=nav}

    setUsers(data);

  };
  // const render = ({ item }) => {
  //   const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
  //   const color = item.id === selectedId ? "white" : "black";

  //   return (
  //     <Item
  //       item={MemberList}
  //       onPress={() => setSelectedId(item.id)}
  //       backgroundColor={backgroundColor}
  //       textColor={color}
  //       style={{ margin: 30, padding: 20 }}
  //     />
  //   );
  // };

  return (
    <View style={[styles.outerContainer, { flexDirection: "column" }]}>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholderColor="red"
          style={{
            flex: 2,
            borderColor: "orangered",
            backgroundColor: "#f0edf6",
            color: "black",
            borderRadius: 50,
            paddingLeft: 20,
            borderWidth: 1,
          }}
          placeholder="search ..."
        />
        <PrimaryButton
          style={{ flex: 1, borderRadius: 100 }}
          onPress={startModal}
        >
          Add
        </PrimaryButton>
      </View>
      <View>
        <RegisterMember visible={isVisible} endModal={endModal} data={data}/>

        <FlatList
          data={users}
          renderItem={MemberList}
          keyExtractor={(item) => item.id}
          extraData={nav}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "whitesmoke",
    padding: 10,
    margin: 10,
    flexdirection: "column",
  },
});
