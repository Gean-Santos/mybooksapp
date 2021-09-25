import styled from 'styled-components/native';

export const Wrapper = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    background-color: grey;
    border-radius: 20px;
    margin: 5px 16px;
    height: 140px;
`;
export const ImageView = styled.View`
    height: 100%;
    padding-right: 10px;
    width: 40%;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    background-color: blue;
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
    font-size: 16px;
    font-family: Montserrat-Regular;
    color: #434343;
    text-align: left;
    
`;

export const Footer = styled.Text`
    font-size: 16px;
    font-family: Montserrat-Bold;
    color: #0E66B4;
`;