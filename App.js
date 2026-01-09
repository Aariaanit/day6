import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        options={{
          header: () => "Home Screen",
        }}
      >
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            header: () => "Home Screen",
          }}
        />
        <Stack.Screen name="About Screen" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
