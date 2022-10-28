import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import {auth, logInWithEmailAndPassword} from './firebaseConfig'
import styles from './styles'
import Styles from './styles'
import Create from '../create'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigation } from '@react-navigation/native'

export default function Login ({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const [user, loading, error] = useAuthState(auth)
  
  const navigate = useNavigation()

  useEffect(()=>{
    if(loading){
      return;
    }
    if(user) navigate.navigate(Create);
    console.log('Ir para a pg Create...')
  }, [user, loading])

  const loginFirebase = () => {
    console.log(email)
    console.log(password)
    logInWithEmailAndPassword(email, password)
  }

  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.txtInput1}
        placeholder='email'
        keyboardType='text'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput 
        style={Styles.txtInput1}
        placeholder='password'
        secureTextEntry={true}
        keyboardType='password'
        value={password}
        onChangeText={(text)=>setPassword(text)}
      />
      <View style={Styles.botoes}>
        <TouchableOpacity
          style={Styles.botaoLogin}
          onPress={()=>loginFirebase()}
        >
          <Text style={styles.txtButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}