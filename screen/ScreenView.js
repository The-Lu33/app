
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Home";
import Tasks from "./Tasks";
import TasksView from "./TasksView";
export default function ScreenView() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} />}
        </stack.Screen>
        <stack.Screen name="Tasks" options={{ headerShown: false }}>
          {(props) => <Tasks {...props} />}
        </stack.Screen>
        <stack.Screen
          name="TasksView"
          options={{
            headerShown: false,
          }}>
          {(props) => <TasksView {...props} />}
        </stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}
