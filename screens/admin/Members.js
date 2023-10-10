import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

import React, { StrictMode, useState, useEffect } from "react";
import PrimaryButton from "../../components/common/PrimaryButton";
import RegisterMember from "../../components/common/RegisterMember";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MemberList from "../../components/common/MemberList";
import supabase from "../Utilities/SupabaseAuth";

export default function Members() {
  const [isVisible, setVisible] = useState(false);
  const [users, setUsers] = useState([]);
  function endModal() {
    setVisible(false);
  }
  function startModal() {
    setVisible(true);
  }
  // const Users = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     fullName: "Aafreen Khan",
  //     timeStamp: "12:47 PM",
  //     recentText: "Good Day!",
  //     avatarUrl:
  //       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     fullName: "Sujitha Mathur",
  //     timeStamp: "11:11 PM",
  //     recentText: "Cheer up, there!",
  //     avatarUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     fullName: "Anci Barroco",
  //     timeStamp: "6:22 PM",
  //     recentText: "Good Day!",
  //     avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
  //   },
  //   {
  //     id: "68694a0f-3da1-431f-bd56-142371e29d72",
  //     fullName: "Aniket Kumar",
  //     timeStamp: "8:56 PM",
  //     recentText: "All the best",
  //     avatarUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
  //   },
  //   {
  //     id: "28694a0f-3da1-471f-bd96-142456e29d72",
  //     fullName: "Kiara",
  //     timeStamp: "12:47 PM",
  //     recentText: "I will call today.",
  //     avatarUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
  //   },
  // ];

  const [selectedId, setSelectedId] = useState();
  useEffect(() => {
    data();
  }, []);
  const data = async () => {
    const { data, error } = await supabase.from("members").select();
    if (error) {
      console.log(error);
    }
    console.log(data);
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
        <RegisterMember visible={isVisible} endModal={endModal} />
        <FlatList
          data={users}
          renderItem={MemberList}
          keyExtractor={(item) => item.id}
        />
      </View>
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
