import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, TextInput, Alert, Image } from 'react-native';
import { Item } from '../../components';
import axios from 'axios';
import config from '../../services/api/config';


const Home = () => {
    const [books, setBooks] = useState([]);
    const url = config.url_dev+'books';

    useEffect(async() => {
        return axios(url, {method: 'GET'})
        .then(data => setBooks(data.data));
    }, []);

    const bookClick = (synopsis, title) => {Alert.alert(title, synopsis)}
    return(
        <SafeAreaView style={{display: 'flex', flex: 1, backgroundColor:'#FFF'}}>
            <View style={{width:'100%', display: 'flex', alignItems: 'center'}}>
                <Image 
                    source={{uri: 'https://user-images.githubusercontent.com/37232748/134752470-85b65c9b-b909-49f4-98da-65c085b785f3.jpeg'}}
                    style={{height: 100, width: 150, display: 'flex', margin:10}}
                />
            </View>
            
            <TextInput  style={{borderColor: 'blue', borderWidth: 2,padding: 10, margin: 10, borderRadius: 10}}/>
            <ScrollView>
                <View>
                    {books.map((livro, index) => (<View style={{padding: 5, width: '100%',}} key={index}><Item item={livro} onClick={() => bookClick(livro.synopsis, livro.title)} /></View>))}
                </View>
            </ScrollView>
        </SafeAreaView>
        
    );
};

export default Home;