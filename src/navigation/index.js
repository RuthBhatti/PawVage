import React, {Fragment, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// -------------------Auth Screens------------------
import Welcome from '../screens/auth/welcome';
import Signin from '../screens/auth/signin';
import Signup from '../screens/auth/signup';
import Forgot from '../screens/auth/forgot';
import Otp from '../screens/auth/otp';
import Confirm from '../screens/auth/confirm';
import Home from '../screens/main/home';
import Location from '../screens/main/map';
import Noc from '../screens/main/noc';
import Health from '../screens/main/health';
import {useSelector} from 'react-redux';

export default function index() {
  const Stack = createNativeStackNavigator();
  const user = useSelector(state => state?.user.login);
  console.log('firsut', user);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="location" component={Location} />
            <Stack.Screen name="noc" component={Noc} />
            <Stack.Screen name="health" component={Health} />
          </>
        ) : (
          <>
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="signin" component={Signin} />
            <Stack.Screen name="signup" component={Signup} />
            <Stack.Screen name="forgot" component={Forgot} />
            <Stack.Screen name="otp" component={Otp} />
            <Stack.Screen name="confirm" component={Confirm} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
