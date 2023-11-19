import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {MediumText, SemiBold, Bold} from '../../components/TextComponents';

export const HeaderArea = styled.View`
  padding: 25px 29px 22px;
  ${Platform.OS === 'ios' ? 'padding-top: 50px;' : ''}
  background-color: #fff;
  position: absolute;
  z-index: 1;
  flex-direction: row;
`;

export const LeftHeaderArea = styled.View`
  height: 100%;
  margin-right: 30px;
  padding-top: 12px;
`;

export const BackButton = styled.TouchableOpacity``;

export const RightHeaderArea = styled.View`
  flex: 1;
`;

export const RightTopHeaderArea = styled.View`
  flex-direction: row;
`;

export const RightBottomHeaderArea = styled.View`
  margin-top: 17px;
  flex-direction: row;
  justify-content: space-between;
`;

export const NameAndAvatarArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #333;
`;

export const Name = styled(MediumText)`
  flex: 1;
  font-size: 20px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #4a4a4a;
  margin-left: 16px;
`;

export const RankingAndLogoArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 112px;
`;

export const RankingArea = styled.View`
  width: 46px;
  height: 45px;
`;

export const RankingTitle = styled(SemiBold)`
  font-size: 14px;
  line-height: 21px;
  color: #ff3f6d;
`;

export const RankingNumberAndStarArea = styled.View`
  flex-direction: row;
  margin-top: 1px;
  align-items: center;
`;

export const RankingNumber = styled(Bold)`
  font-size: 15px;
  line-height: 22px;
  color: #ff3f6d;
  margin-right: 7px;
`;

export const RateMatchButtonArea = styled.View`
  justify-content: center;
  align-items: center;
`;

export const RateMatchButton = styled.TouchableOpacity`
  width: 139px;
  padding: 0px 14px;
  height: 35px;
  border-radius: 70px;
  background-color: #ff3f6d;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const RateMatchButtonText = styled(SemiBold)`
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
  margin-left: 7px;
`;

export const ChatArea = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: #faf9f9a3;
  margin-top: ${Platform.OS === 'ios' ? '140px' : '160px'};
`;

export const Chat = styled.FlatList`
  flex: 1;
`;

export const KeyboardEntryArea = styled.View`
  padding: 25px 29px;
  background-color: #fff;
  flex-direction: row;
`;

export const InputKeyboardArea = styled.View`
  flex: 1;
  height: 52px;
  background-color: #f1f1f1;
  border-radius: 30px;
`;

export const InputKeyboard = styled.TextInput`
  flex: 1;
  height: 52px;
  padding-left: 19px;
  background-color: #f1f1f1;
  border-radius: 30px;
  color: #767676;
`;

export const SendButton = styled.TouchableOpacity`
  width: 71px;
  height: 52px;
  border-radius: 45px;
  background-color: #f1f1f1;
  justify-content: center;
  align-items: center;
  margin-left: 19px;
`;

export const MessageArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.isMine ? 'flex-end' : 'flex-start')};
  margin-bottom: 17px;
`;

export const MessageAvatarArea = styled.View`
  height: 41px;
  width: 41px;
  border-radius: 21px;
`;

export const MessageAvatar = styled.Image`
  height: 41px;
  width: 41px;
  border-radius: 21px;
`;

export const MessageTextArea = styled.View`
  width: 234px;
  padding: 14px 19px;
  border-radius: 20px;
  margin-left: ${props => (props.isMine ? '0' : '12px')};
  background-color: ${props => (props.isMine ? '#FF3F6D' : '#f1f1f1')};
`;

export const MessageText = styled(MediumText)`
  font-size: 14px;
  color: ${props => (props.isMine ? '#fff' : '#000')};
`;

export const RateArea = styled.View`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const CloseRateAreaButton = styled.TouchableOpacity`
  flex: 1;
`;
