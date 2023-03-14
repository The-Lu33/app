import * as React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  Stack,
} from "native-base";
import { StyleSheet } from "react-native";
import { useState } from "react";
import axios from "axios";
export default function LoginForm({ navigation }) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const handleLogin = (name, value) =>
    setLoginData({ ...loginData, [name]: value });
  const sumit = async () => {
    const login = await axios.post(
      "https://taskback.onrender.com/api/auth/login",
      loginData
    );
    console.log(login);

    if (login.status === 200) {
      localStorage.setItem("dataUser", JSON.stringify(login.data.id));

      navigation.navigate("Tasks");
    }
  };
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="orange.500"
          _dark={{
            color: "warmGray.50",
          }}>
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                color="orange.500"
                onChangeText={(text) => handleLogin("username", text)}
              />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                color="orange.500"
                type="password"
                onChangeText={(text) => handleLogin("password", text)}
              />
            </Stack>
          </FormControl>
          <Button mt="2" colorScheme="orange" onPress={sumit}>
            Sign in
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

// const style = StyleSheet.create({

// })
