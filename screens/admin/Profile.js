import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-web";

const Profile = () => {
  const Users = {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  return (
    <ScrollView style={styles.Container}>
      <View style={styles.imgContainer}>
        <img style={styles.image} src={Users.avatarUrl} />
        <Text style={{ fontSize: 25, fontWeight: "bold",color:"darkgrey" }}>
          {Users.fullName}
        </Text>
        <Text style={{ fontSize: 20,color:"grey" }}>id: Afkh01</Text>
      </View>
      <View> </View>

      <View >
        <fieldset style={styles.detailsContainer}>
          <legend>Personal Details</legend>
          <table>
            <tr>
                <td>Phone:</td>
                <td>7777777777</td>
            </tr>
            <tr>
                <td>Age:</td>
                <td>77</td>
            </tr>
            <tr>
                <td>Sex:</td>
                <td>Male</td>
            </tr>
            <tr>
                <td>Weight:</td>
                <td>80</td>
            </tr>
          </table>
          
        </fieldset>
      </View>

      <View >
        <fieldset  style={styles.detailsContainer}>
          <legend>Subscription Details</legend>
          <table>
            <tr>
                <td>DOJ:</td>
                <td>25 Jul,2023</td>
            </tr>
            <tr>
                <td>Plan:</td>
                <td>Yearly</td>
            </tr>
            <tr>
                <td>Dues:</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Last Payment:</td>
                <td>25 July,2023</td>
            </tr>
            <tr>
                <td>Next Payment:</td>
                <td>25 July,2024</td>
            </tr>
          </table>
          
        </fieldset>
      </View>
      <View >
        <fieldset style={styles.detailsContainer}>
          <legend>Performance Details</legend>
          <table>
            <tr>
                <td>Attendace:</td>
                <td>27/33</td>
            </tr>
            <tr>
                <td>Goal:</td>
                <td>Weight Loss</td>
            </tr>
            <tr>
                <td>Improvement:</td>
                <td>Bad</td>
            </tr>
            {/* <tr>
                <td>Last Payment:</td>
                <td>25 July,2023</td>
            </tr>
            <tr>
                <td>Next Payment:</td>
                <td>25 July,2024</td>
            </tr> */}
          </table>
          
        </fieldset>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#dbdada",
    flexDirection: "column",
    padding: 10,
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },

  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  detailsContainer: {
    paddingTop: 10,
    margin: 10,
    backgroundColor: "whitesmoke",
    borderRadius:10,
  },
});


