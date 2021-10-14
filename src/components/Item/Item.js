import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Wrapper, ImageView, TextView, Title, Footer, Author } from './Item.styles';

const Item = ({item, onClick}) => {
    return(
        <TouchableOpacity onPress={() => onClick()}>
                <Wrapper>
            <ImageView 
                source={{uri: 'https://user-images.githubusercontent.com/37232748/134752470-85b65c9b-b909-49f4-98da-65c085b785f3.jpeg'}}
                resizeMethod='resize'
            />
            <TextView>
                <Title>{item.title}</Title>
                <Author>{item.author}</Author>
                <Footer>Ano : {item.year}</Footer>
            </TextView>
        </Wrapper>
        </TouchableOpacity>
        
    );
};

export default Item;
