import React from 'react';
import { Button, Text } from './DefaultButton.styles';

const DefaultButton = ({title, onCLick}) => {
    return (
        <Button onPress = {() => onCLick()} activeOpacity={0.5}>
            <Text>{title}</Text>
        </Button>
    );
}

export default DefaultButton;