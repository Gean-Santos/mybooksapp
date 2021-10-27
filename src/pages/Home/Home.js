import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Item, PlusButton } from '../../components';

import { Wrapper, ImageView, Image, Input, ItemsView, DarkIcon } from './Home.styles';

import axios from 'axios';
import config from '../../services/api/config';


const Home = ({navigation}) => {
    const [books, setBooks] = useState([]);
    const [darkScreen, setDarkScreen] = useState(false);
    const url = config.url_dev+'books';

    useEffect(async() => {
        return axios(url, {method: 'GET'})
        .then(data => setBooks(data.data));
    }, []);


    const bookClick = (synopsis, title) => {Alert.alert(title, synopsis)}
    const onDarkClick = () => {
        setDarkScreen(!darkScreen);
    };
    return(
        <Wrapper isDark={darkScreen}>
            <ImageView>
                <Image 
                    source={{uri: 'https://user-images.githubusercontent.com/37232748/134752470-85b65c9b-b909-49f4-98da-65c085b785f3.jpeg'}}
                />
                
            </ImageView>
            {darkScreen ? 
                <DarkIcon name='lightbulb' size={30}  onPress={() => onDarkClick()} isDark={true} /> : 
                <DarkIcon name='lightbulb-outline' size={30}  onPress={() => onDarkClick()} isDark={false} />
            }
            
            <Input isDark={darkScreen} 
                placeholder='Procurar por livro'
                placeholderTextColor='yellow'
            />
            
            <ItemsView isDark={darkScreen}>
                <View style={{display: 'flex', flex: 1, height: '100%'}}>
                    {books.map((livro, index) => (<View style={{padding: 5, width: '100%'}} key={index}><Item item={livro} onClick={() => bookClick(livro.synopsis, livro.title)} /></View>))}
                </View>
                
            </ItemsView>
            <View style={{display: 'flex', width: '100%', alignItems: 'flex-start'}}>
            <PlusButton
                isDark={darkScreen}
                title='+'
                onCLick={() => navigation.navigate('AddBook')}
            />
            </View>
            
        </Wrapper>
        
    );
};

export default Home;