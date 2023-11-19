import styled from 'styled-components/native';

export const MenuArea = styled.View`
  flex: 1;
  margin: 35px 0 40px;
  padding: 0 18px;
`;

export const MenuPreviewButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  shadow-radius: 14px;
  shadow-offset: 0px 1px;
  shadow-color: #000;
  shadow-opacity: 0.25;
  elevation: 7;
  background-color: #efefef;
`;

export const MenuPreviewImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;
