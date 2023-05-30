import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Character from './screens/Character';
import Location from './screens/Location';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TailwindProvider>
    <NavigationContainer
     initialRouteName="Home"
     screenOptions={{headerShown: false}}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Character" component={Character} />
        <Stack.Screen options={{ headerShown: false }}  name="Location" component={Location}/>

      </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>
  );
}

