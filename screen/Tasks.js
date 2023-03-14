import { StyleSheet } from "react-native";
import React from "react";
import {
  Center,
  NativeBaseProvider,
  Box,
  FlatList,
  Link,
  Text,
} from "native-base";
import CardTasks from "../components/CardTasks";
const Tasks = ({ navigation }) => {
  const data = [
    {
      id: "1",
      title: "task1",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, vero, cumque perspiciatis ab aliquid ullam ea assumenda rerum corporis incidunt officia quas, quia accusamus dolorum facilis doloribus tempora illo! Delectus?",
    },
    { id: "2", title: "task2", description: "description2" },
    { id: "3", title: "task3", description: "description3" },
    { id: "4", title: "task4", description: "description4" },
    { id: "5", title: "task5", description: "description5" },
    { id: "5", title: "task5", description: "description5" },
  ];

  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        px="3"
        paddingTop={"8"}
        alignItems={"center"}
        backgroundColor="#101114"
        width="100%">
        <Center
          flex
          justifyContent="space-evenly"
          flexDirection="row"
          width={"100%"}>
          <Text color="orange.500">My Tasks</Text>
          <Link>
            <Text color="orange.500">New</Text>
          </Link>
        </Center>
        <Box flex={"1"} justifyContent="center" width="100%">
          <FlatList
            style={{
              width: "100%",
            }}
            _web={{
              numColumns: "5",
            }}
            data={data}
            onPress={() => {
              console.log("press");
            }}
            renderItem={(item) => (
              <CardTasks item={item} navigation={navigation} />
            )}
          />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};

export default Tasks;

const styles = StyleSheet.create({});
