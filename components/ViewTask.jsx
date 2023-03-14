import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Box, Button, TextArea } from "native-base";

const ViewTask = ({ route, navigation }) => {
  const dataTask = route.params.data;
  const [taskValue, setTaskValue] = useState({
    title: dataTask.title,
    description: dataTask.description,
  });
  const handleTask = (name, value) =>
    setTaskValue({ ...taskValue, [name]: value });

  const handleSumit = () => {
    console.log(taskValue);
    
  };
  return (
    <Box>
      <Button onPress={handleSumit}>Save</Button>
      <Box
        height={"100%"}
        width="100%"
        alignItems="center"
        justifyContent={"space-evenly"}>
        <TextInput
          value={taskValue.title}
          onChangeText={(text) => handleTask("title", text)} // for android and ios
          style={{
            width: "30%",
            height: "4",
          }}
        />
        <TextInput
          value={taskValue.description}
          onChangeText={(text) => handleTask("description", text)} // for android and ios
          style={{
            width: "50%",
            height: "75%",
            padding: "1",
          }}
        />
      </Box>
    </Box>
  );
};

export default ViewTask;
