import MissionControl from './screens/MissionControl';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../NavigationTypes';

import Profile from './screens/Profile';
import Lifestyle from './screens/Profile/Lifestyle';
import MedicalHistory from './screens/Profile/MedicalHistory';
import MedicalTeam from './screens/Profile/MedicalTeam';
import Personal from './screens/Profile/Personal';
import { NavigationContainer } from '@react-navigation/native';

import Header from './Headers/Header';
import HeaderLeft from './Headers/HeaderLeft';
import Journalling from './screens/Journal/Create';
import JournalPage from './screens/Journal/JournalPage';

export default function RootStack() {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        id="RootStack"
        initialRouteName="MissionControl"
        screenOptions={
          {
            // headerShown: false
            // headerTitle: (props) => {
            //   console.log('props');
            //   console.log(props);
            //   return <Header {...props} />;
            // }
            // headerBackButtonMenuEnabled: true
          }
        }>
        <Stack.Screen
          name="MissionControl"
          component={MissionControl}
          options={{
            headerShown: false
            // headerTitle: (props) => (
            //   <Header {...props} title="Bission" name="nuts" />
            // ),
            // headerLeft: (props) => (
            //   <HeaderLeft name="ass" date="upmyAss" {...props} />
            // )
          }}
        />
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
        <Stack.Screen name="Lifestyle" component={Lifestyle} />
        <Stack.Screen name="MedicalHistory" component={MedicalHistory} />
        <Stack.Screen name="MedicalTeam" component={MedicalTeam} />
        <Stack.Screen name="Personal" component={Personal} />

        <Stack.Screen name="Journalling" component={Journalling} />

        <Stack.Screen name="JournalPage" component={JournalPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
