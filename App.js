import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Register/Register';
// import Login from './Login/Login';

function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Registration Screen</Text>
      <Button
        style={styles.logbutton}
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        style={style.logbutton}
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

function Registration() {
  return (
    <View style={styles.button}>
      <Register/>
    </View>
  );
}

function LogIn() {
  return (
    <View style={styles.button}>
      <Login/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Welcome" component={Home} />
        <Stack.Screen name="Login" components={LogIn}/>
        <Stack.Screen name="Register" components={Registration}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logbutton: {
    backgroundColor: '#FFFFFF',
    height: 40,
    borderRadius: 20, //rounds the button
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});
