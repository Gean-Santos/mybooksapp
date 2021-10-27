import React from 'react';
import { Button, Text } from './PlusButton.styles';

const PlusButton = ({title, onCLick, isDark}) => {
    return (
        <Button onPress = {() => onCLick()} activeOpacity={0.5} isDark={isDark}>
            <Text isDark={isDark}>{title}</Text>
        </Button>
    );
}

export default PlusButton;