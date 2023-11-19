import styled from 'styled-components/native';

export const HeaderArea = styled.View`
  width: 100%;
  height: 42px;
  justify-content: flex-start;
  padding: 0px 28px;
  margin-top: 37px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

export const LogoArea = styled.View`
  position: absolute;
  top: 1px;
  width: 200px;
  height: 42px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 42px;
  resize-mode: contain;
`;
