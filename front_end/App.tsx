import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Greeting from './src/screens/Greeting';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';

// TODO: Start making the UI and fix removeUser issue from back-end. Also connect the back-end

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Greeting"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Greeting" component={Greeting} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};
export default App;
