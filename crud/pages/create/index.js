import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles'
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import {storage, db} from '../login/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore';

export default function Create({navigation}){
    const [texto, setTexto] = useState()
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [progressPercent, setProgressoPercent] = useState(0)
    const [imgUrl, setImgUrl] = useState()
    const [image, setImage] = useState()
    const [preview, setPreView] = useState()



    return(
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Create
            </Text>
        </View>
    )
}