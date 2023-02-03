import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
  return (
    <SafeAreaView>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={email}
        placeholder="Email adress"
        keyboardType="email-address"
        />
        <TextInput
         style={styles.input}
         onChangeText={onChangeText}
         value={password}
         placeholder="Password"
         keyboardType="default"
         maxLength={10}
         secureTextEntry
        />
    </SafeAreaView>
  )
}

export default Login 

const styles = StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingTop : Platform.OS === "android" ? 20:0,

    }
});