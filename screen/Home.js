import { StyleSheet } from "react-native";
import React from "react";
import { NativeBaseProvider, Center, Text, HStack } from "native-base";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";

const Home = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" backgroundColor="#0F172A">
        {isLogin ? (
          <LoginForm navigation={navigation} />
        ) : (
          <RegisterForm navigation={navigation} setIsLogin={setIsLogin} />
        )}
        {isLogin ? (
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}>
              I'm a new user.{" "}
            </Text>
            <Text
              onPress={() => setIsLogin(false)}
              color="indigo.500"
              _dark={{
                color: "warmGray.50",
              }}>
              Register
            </Text>
          </HStack>
        ) : (
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}>
              I'm a register.{" "}
            </Text>
            <Text color="orange.500" onPress={() => setIsLogin(true)}>
              Login
            </Text>
          </HStack>
        )}
      </Center>
    </NativeBaseProvider>
  );
};

export default Home;
