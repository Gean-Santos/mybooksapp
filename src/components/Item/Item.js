import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Wrapper, ImageView, TextView, Title, Footer, Author } from './Item.styles';

const Item = ({item, onClick}) => {
    return(
        <TouchableOpacity onPress={() => onClick()}>
                <Wrapper>
            <ImageView 
                source={{uri: item.url}}
                resizeMethod='resize'
            />
            <TextView>
                <Title>{item.title}</Title>
                <Author>{item.Author}</Author>
                <Footer>Ano da edição : {item.Year}</Footer>
            </TextView>
        </Wrapper>
        </TouchableOpacity>
        
    );
};

export default Item;
