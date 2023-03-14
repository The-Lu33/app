import React from "react";
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
import { useState } from "react";
import axios from "axios";

export default function RegisterForm({ navigation, setIsLogin }) {
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
  });

  const handleRegister = (name, value) =>
    setRegisterData({ ...registerData, [name]: value });

  const sumit = async () => {
    const register = await axios.post(
      "https://taskback.onrender.com/api/auth/register",
      registerData
    );
    if (register.status === 201) {
      setIsLogin(true);
    }
    console.log(register);
  };
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="indigo.500"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold">
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Stack>
              <FormControl.Label>Username</FormControl.Label>
              <Input
                color="indigo.500"
                onChangeText={(text) => handleRegister("username", text)} // for android and ios
              />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                color="indigo.500"
                type="password"
                onChangeText={(text) => handleRegister("password", text)} // for android and ios
              />
            </Stack>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={sumit}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
