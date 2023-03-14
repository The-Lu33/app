import { View, Text } from "react-native";
import React from "react";
import { Center, NativeBaseProvider } from "native-base";
import ViewTask from "../components/ViewTask";

const TasksView = ({ navigation, route }) => {
  return (
    <NativeBaseProvider>
      <Center flex="1" justifyContent="center" padding={'2'}>
        <ViewTask route={route} />
      </Center>
    </NativeBaseProvider>
  );
};

export default TasksView;
