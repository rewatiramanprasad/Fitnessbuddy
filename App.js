import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./screens/admin/Home";
import Social from "./screens/admin/Social";
import Members from "./screens/admin/Members";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Members"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "orangered" }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={"black"} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Members"
          component={Members}
          options={{
            tabBarLabel: "Member",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-child"
                color={"black"}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Social"
          component={Social}
          options={{
            tabBarLabel: "Social",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="post" color={"black"} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Social}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="account"
                color={"black"}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
