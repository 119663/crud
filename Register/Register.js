import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Register = () => {
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
           value={text}
           placeholder="Full name"
           keyboardType="default"
           maxLength={30}
   />
   <TextInput
           style={styles.input}
           onChangeText={onChangeNumber}
           value={number}
           placeholder="Phone number"
           keyboardType="phone-pad"
           maxLength={13}
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
      <TextInput
           style={styles.input}
           onChangeText={onChangeText}
           value={password}
           placeholder="Confirm password"
           keyboardType="default"
           maxLength={10}
           secureTextEntry
        
   />
</SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingTop : Platform.OS === "android" ? 20:0,

    }
});