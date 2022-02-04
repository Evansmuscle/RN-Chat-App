import React from "react";
import { SafeAreaView } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// TODO: Start making the UI and fix removeUser issue from back-end. Also connect the back-end and add Redux

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <SafeAreaView>
          <Text style={{ color: "black" }}>Hello</Text>
        </SafeAreaView>
      </NavigationContainer>
    </ApplicationProvider>
  );
};
export default App;
