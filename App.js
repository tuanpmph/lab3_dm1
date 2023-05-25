import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginAPI  from './screens/LoginAPI';
import ListProduct from './screens/ListProduct';
const StackMain = createNativeStackNavigator();

const App= () => {
  return (
    
     <NavigationContainer>
      <StackMain.Navigator initialRouteName='Home'>
        <StackMain.Screen name ='Home' component={ListProduct} options={{title: 'Trang chủ'}}/>
        <StackMain.Screen name ='Login' component={LoginAPI} options={{title: 'Login API'}}/>
      </StackMain.Navigator>
     </NavigationContainer>
  );
}

export default App;
