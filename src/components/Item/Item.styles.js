import styled from 'styled-components/native';

export const Wrapper = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    background-color: #808080;
    border-radius: 20px;
    margin: 5px 16px;
    height: 140px;
    border: solid 2px;
    border-color: #120A8F;
`;
export const ImageView = styled.Image`
    height: 100%;
    padding-right: 10px;
    width: 40%;
    display: flex;
    justify-content: center;
    border-radius: 20px;

`;
export const TextView = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    width: 40%;
`;
export const Title = styled.Text`
    display: flex;
    font-size: 18px;
    font-weight: bold;
    color: #000;
    text-align: center;
    
`;
export const Author = styled.Text`
    display: flex;
    font-size: 16px;
    color: #000;
    text-align: center;

    
`;

export const Footer = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #120A8F;
    text-align: center;
`;