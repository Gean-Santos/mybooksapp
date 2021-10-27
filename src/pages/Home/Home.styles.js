import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Wrapper = styled.SafeAreaView`
    display: flex;
    flex: 1;
    background-color: ${({ isDark }) => (isDark ? 'rgba(0, 0, 0, 0.9)' : 'white')};
    align-items: center;
    width: 100%;
    padding: 16px;
`;

export const ImageView = styled.View`
    width: 100%; 
    display: flex; 
    alignItems: center;
`;

export const Image = styled.Image`
    height: 80px; 
    width: 100px;
    display: flex;
    margin: 5px;
`;

export const DarkIcon = styled(Icon)`
    color: ${({ isDark }) => (isDark ? 'white' : 'black')};
    position: absolute;
    right: 1px;
    top: 20px;
    justifyContent: center;
    alignItems: center;
`;

export const Input = styled.TextInput`
    background-color: rgba(0, 0, 255, 0.8);
    border-color: ${({ isDark }) => (isDark ? 'yellow' : 'black')}; 
    borderWidth: 2px; 
    padding: 10px;
    margin: 10px;
    borderRadius: 10px; 
    width: 100%;
    color: #FFF;
`;

export const ItemsView = styled.ScrollView`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 0, 0.8);
    borderRadius: 16px;
    margin-top: 10px; 
    borderWidth: 2px; 
    border-color: ${({ isDark }) => (isDark ? 'white' : 'black')};
`;
