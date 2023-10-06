import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Searchbar, TextInput } from 'react-native-paper'
import PrimaryButton from '../../components/common/PrimaryButton'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Heart from "react-animated-heart"
// import ShapeButton from '../../components/common/shapeButton';
import ShapeButton from '../../components/common/ShapeButton'
import DescButton from '../../components/common/DescButton';
export default function Social() {
  const Post = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ];
  const [isClick, setClick] = useState(true)
  const [isDesClick, setDesClick] = useState(true)
  // const [clicked, setClicked] = useState(false);
  // const[liked,setLiked]=useState(false);
  function pressLiked(){
    setClick((isClick)=>!isClick);
  }
  function pressDesc(){
    setDesClick((isDesClick)=>!isDesClick);
  }
  return (
    <ScrollView  style={styles.container}>
      <View style={styles.Searchbar}>
      {/* <TextInput 
      style={{flex:2}}
      placeholder=' Search your post here '
      /> */}
      <Searchbar style={{flex:2}} placeholder='Search your post' />
      {/* <PrimaryButton style={{flex:1,padding:10}}>Search</PrimaryButton> */}
      </View>
      <View style={styles.postContainer}>
       {Post.map((value)=>(<View  key={value.id} style={styles.postContainer}>
        <Image src={value.avatarUrl} style={styles.imageContainer} />
        {/* <Heart isClick={isClick} onClick={() => setClick(!isClick)} /> */}
        {/* <MaterialCommunityIcons name="People" color="black" size={26}/> */}
        <View style={styles.ButtonConainer}>
        <ShapeButton isClick={isClick} pressLiked={pressLiked}></ShapeButton>
        <DescButton isDesClick={isDesClick} pressDesc={pressDesc} ></DescButton>
        </View>
        <Text>{value.fullName}</Text>
        <Text>{value.recentText}</Text>
        </View>))}
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    // margin:10,

  },
  Searchbar:{
    flexDirection:"row"
  },
  postContainer:{
    flexDirection:"column",
    BorderWidth:20,
    Border:10,
    borderColor:"black"
  },
  imageContainer:{
    paddingTop:20,
    margin:10,
    height:500,
    

  },
  ButtonConainer:{
    flexDirection:"row",
    paddingLeft:10,
    
  }

})