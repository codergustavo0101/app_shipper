import styled from 'styled-components/native';

export const TabBarArea = styled.View`
  height: 69px;
  background-color: #f7f7f7;
`;

export const TabBarContent = styled.View`
  height: 100%;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;

export const TabBarItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  height: 30px;
  width: 30px;
  border-radius: 15px;
`;
