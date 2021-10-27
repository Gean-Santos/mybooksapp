import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    position: absolute;
    right: 1px;
    bottom: 10px;
    justifyContent: center;
    alignItems: center;
    background-color: ${({ isDark }) => (isDark ? 'black' : 'rgba(255, 255, 255, 1)')};
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    
`;

export const Text = styled.Text`
    color: ${({ isDark }) => (isDark ? 'white' : 'rgba(0, 0, 0, 1)')};
    font-size: 20px;
    font-weight: bold;
`;