import React from 'react';
import { View, Text } from 'react-native';
import { Wrapper, ImageView, TextView, Title, Footer } from './Item.styles';

const Item = ({item}) => {
    return(
        <Wrapper>
            <ImageView />
            <TextView>
                <Title>{item.title}</Title>
                <Text>{item.Author}</Text>
                <Footer>{item.Year}</Footer>
            </TextView>
        </Wrapper>
    );
};

export default Item;
