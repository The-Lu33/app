import React from "react";
import ScreenView from "./screen/ScreenView";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <ScreenView />
    </SafeAreaView>
  );
}
