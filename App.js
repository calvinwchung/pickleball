import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style="auto"/>
        <StackNavigator/>
      </NavigationContainer>
  );
};
