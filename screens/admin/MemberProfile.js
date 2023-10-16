import { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image,Pressable } from "react-native";


export default function MemberProfile({route,navigation}){
    console.log("mem prof inside",route.params.data);
    let item=route.params.data;
    return(
        <View>
            <View><Pressable onPress={()=>{navigation.goBack()}}>↩</Pressable></View>
            <View style={styles.mainContainer}>
                <Text>Mem Prof</Text>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
                <Text>{item.weight}</Text>
                <Text>{item.subscription}</Text>
            </View>
            
        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:2
    }
});