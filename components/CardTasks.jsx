import { StyleSheet } from "react-native";
import React from "react";
import { Stack, Box, Heading, HStack, Text, Link } from "native-base";

const CardTasks = ({ item, navigation }) => {
  return (
    <Link
      onPress={() => {
        navigation.navigate("TasksView", {
          data: item.item,
        });
      }}>
      <Box
        width="100%"
        height={"150px"}
        padding="2"
        marginTop="3"
        _web={{
          width: "150px",
        }}>
        <Box
          width="90%"
          // maxW={"150px"}
          height="100%"
          rounded="2xl"
          overflow="hidden"
          margin={"1"}
          bg="orange.500"
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading color="black" size="md" ml="-1">
                {item.item.title}
              </Heading>
            </Stack>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.600" fontWeight="400">
                  {item.item.description}
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Link>
  );
};

export default CardTasks;

const styles = StyleSheet.create({});
