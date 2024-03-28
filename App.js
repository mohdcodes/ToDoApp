// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import StartPage from './app/Screens/StartPage';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteScreenn from './app/Screens/NoteScreenn';
import colors from './app/Colors/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoteDetail from './app/components/NoteDetail';
import { NavigationContainer } from '@react-navigation/native';
import NoteProvider from './app/context/NoteProvider';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, SetUser] = useState({});
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    if (result !== null) {
      SetUser(JSON.parse(result));
    }
    console.log(result);
  };
  useEffect(() => {
    findUser();
    // AsyncStorage.clear();
  }, []);

  const RenderNoteScreenn = (props) => <NoteScreenn {...props} user={user} />;

  if (!user.name) return <StartPage onFinish={findUser} />;
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />
      <NavigationContainer>
        <NoteProvider>
          <Stack.Navigator>
            <Stack.Screen
              component={RenderNoteScreenn}
              name="NoteScreenn"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={NoteDetail}
              name="NoteDetail"
              options={{
                headerTitle: '',
                headerTransparent: true,
                headerBackTitle: 'BACK',
                // headerBackTitleStyle={}
              }}
            />
          </Stack.Navigator>
        </NoteProvider>
      </NavigationContainer>
    </>
  );
}
