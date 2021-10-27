import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    display: flex;
    flex: 1;
    background-color: ${({ isDark }) => (isDark ? 'rgba(0, 0, 0, 0.9)' : 'white')};
    align-items: center;
    width: 100%;
    padding: 16px;
`;