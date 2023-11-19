import styled from 'styled-components/native';
import {
  Light,
  MediumText,
  RegularText,
  SemiBold,
} from '../../components/TextComponents';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const TopTitleArea = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 23px;
  justify-content: center;
  align-items: center;
`;

export const NewMatchesArea = styled.View`
  width: 100%;
  padding-left: 15px;
  margin-top: 34px;
`;

export const BackButtonArea = styled.View`
  width: 28px;
  height: 28px;
  position: absolute;
  left: 26px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 28px;
  height: 28px;
`;

export const NewMatchTitle = styled(SemiBold)`
  font-size: 17px;
  letter-spacing: -0.110526px;
  color: #ff3f6d;
  margin-left: 13px;
`;

export const NewPeopleHorizontalList = styled.ScrollView`
  flex-direction: row;
  margin-top: 18px;
`;

export const NewLikesItem = styled.TouchableOpacity`
  align-items: center;
  margin-right: 22px;
`;

export const NewLikesItemBackground = styled.View`
  width: 57px;
  height: 57px;
  border-radius: 28px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`;

export const NewLikesItemAvatar = styled.Image`
  width: 57px;
  height: 57px;
  align-self: center;
  border-radius: 28px;
  position: absolute;
  opacity: 0.5;
`;

export const NewLikesItemText = styled(MediumText)`
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: #ff3f6d;
`;

export const NewMatchItem = styled.TouchableOpacity`
  align-items: center;
  margin-right: 22px;
`;

export const NewMatchItemBackground = styled.View`
  width: 57px;
  height: 57px;
  border-radius: 28px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
`;

export const NewMatchItemAvatar = styled.Image`
  width: 57px;
  height: 57px;
  align-self: center;
  border-radius: 28px;
  position: absolute;
`;

export const NewMatchItemText = styled(Light)`
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: #4a4a4a;
  max-width: 70px;
`;

export const ChatArea = styled.ScrollView`
  flex: 1;
  width: 100%;
  margin-top: 49px;
  padding: 0 16px;
`;

export const ChatItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 13px;
  border-bottom-width: ${props => (props.isLastItem ? 0 : 1)}px;
  border-bottom-color: #d0d0d0;
  margin-bottom: 19px;
`;

export const ChatItemAvatarArea = styled.View`
  width: 58px;
  height: 58px;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  border-radius: 28px;
`;

export const ChatItemAvatar = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 28px;
  resize-mode: cover;
`;

export const ChatItemTextArea = styled.View`
  flex: 1;
  margin-left: 12px;
`;

export const ChatItemTitle = styled(SemiBold)`
  font-size: 17px;
  line-height: 26px;
  color: #4a4a4a;
`;

export const ChatItemSubtitleArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ChatItemSubtitle = styled(RegularText)`
  flex: 1;
  margin-top: 1px;
  font-size: 14px;
  line-height: 21px;
  color: #9b9b9b;
`;

export const NotificationIcon = styled.View`
  margin-left: 6px;
  width: 25px;
  height: 25px;
  border-radius: 13px;
  background-color: #f65e7f;
  justify-content: center;
  align-items: center;
`;

export const NotificationText = styled(RegularText)`
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.0736842px;
  color: #feffff;
`;

export const NewLikesArea = styled.View`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  padding: 0 19px;
  margin-top: 24px;
`;

export const NewLikesTitle = styled(MediumText)`
  font-size: 17px;
  text-align: center;
  color: #ff3f6d;
`;
