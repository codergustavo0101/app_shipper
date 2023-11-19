import styled from 'styled-components/native';
import {SemiBold} from '../TextComponents';

export const NewLikesList = styled.FlatList`
  flex: 1;
  width: 100%;
  margin-top: 19px;
`;

export const NewLikesCardArea = styled.View`
  width: 50%;
  height: 208px;
  margin-bottom: 20px;
`;

export const NewLikesCard = styled.View`
  height: 208px;
  width: 95%;
  align-self: ${props => (props.isEven ? 'flex-start' : 'flex-end')};
  border-radius: 10px;
  justify-content: flex-end;
`;

export const NewLikesCardAvatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  resize-mode: cover;
  position: absolute;
`;

export const NewLikesCardName = styled(SemiBold)`
  font-size: 17px;
  color: #ffffff;
  margin-left: 17px;
  text-shadow: 0px 0px 2px #000000;
`;

export const NewLikesCardActionsArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* height: 47px; */
  padding: 0 21px;
  margin-top: 11px;
  margin-bottom: 19px;
`;

export const RefuseLikeButton = styled.TouchableOpacity`
  width: 47px;
  height: 47px;
  border-radius: 24px;
  background-color: #ff2d2d;
  justify-content: center;
  align-items: center;
`;

export const AcceptLikeButton = styled.TouchableOpacity`
  width: 47px;
  height: 47px;
  border-radius: 24px;
  background-color: #ff3f6d;
  justify-content: center;
  align-items: center;
`;
