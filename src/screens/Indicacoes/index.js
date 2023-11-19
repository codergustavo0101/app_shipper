import React, {useState, useEffect} from 'react';
import {Share, Alert} from 'react-native';
import * as Clipboard from 'expo-clipboard';

import {PageArea, TabBarHeader, TabScreenTitle} from '../../components';
import {
  Container,
  ScrollableViewHeader,
  ScrollableView,
  SelectIndicationsOrPixData,
  SelectIndicationsOrPixDataButton,
  SelectIndicationsOrPixDataText,
} from './styled';

import Indications from './indications';
import PixData from './pixData';

import DollarIcon from '../../assets/icons/dollar.svg';
import BankIcon from '../../assets/icons/bank.svg';
import ReferralCodeService from '../../services/ReferralCodeService';
import {urls} from '../../services/api';
import ReferralsService from '../../services/ReferralsService';

const Page = ({navigation}) => {
  const [showPixDataArea, setShowPixDataArea] = useState(false);
  const [indicationLinkText, setIndicationLinkText] = useState('');
  const [indications, setIndications] = useState([]);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(indicationLinkText);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: indicationLinkText,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
      Alert.alert('Erro', error.message);
    }
  };

  const getMyReferralCode = async () => {
    try {
      const response = await ReferralCodeService.getMyReferralCode();

      const link = __DEV__
        ? urls.development + '/referral-code/' + response.code
        : urls.production + '/referral-code/' + response.code;

      setIndicationLinkText(link);
    } catch (error) {
      console.log(error);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);
    }
  };

  const getReferrals = async () => {
    try {
      const response = await ReferralsService.getReferrals();

      setIndications(response);
    } catch (error) {
      console.log(error);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);
    }
  };

  useEffect(() => {
    getMyReferralCode();
    getReferrals();
  }, []);

  return (
    <PageArea
      isTabBar={true}
      statusBarTranslucent={true}
      barStyle="light-content">
      <Container>
        <TabBarHeader navigation={navigation} />
        <ScrollableView showsVerticalScrollIndicator={false}>
          <ScrollableViewHeader>
            <TabScreenTitle title="Indicações" />
            <SelectIndicationsOrPixData>
              <SelectIndicationsOrPixDataButton
                isActive={!showPixDataArea}
                onPress={() => setShowPixDataArea(false)}>
                <DollarIcon
                  width={23}
                  height={23}
                  color={!showPixDataArea ? '#fff' : '#ff3f6d'}
                />
                <SelectIndicationsOrPixDataText isActive={!showPixDataArea}>
                  Indicações
                </SelectIndicationsOrPixDataText>
              </SelectIndicationsOrPixDataButton>
              <SelectIndicationsOrPixDataButton
                isActive={showPixDataArea}
                onPress={() => setShowPixDataArea(true)}>
                <BankIcon
                  width={23}
                  height={23}
                  color={showPixDataArea ? '#fff' : '#ff3f6d'}
                />
                <SelectIndicationsOrPixDataText isActive={showPixDataArea}>
                  Dados Pix
                </SelectIndicationsOrPixDataText>
              </SelectIndicationsOrPixDataButton>
            </SelectIndicationsOrPixData>
          </ScrollableViewHeader>
          {showPixDataArea ? (
            <PixData />
          ) : (
            <Indications
              copyToClipboard={copyToClipboard}
              onShare={onShare}
              indications={indications}
            />
          )}
        </ScrollableView>
      </Container>
    </PageArea>
  );
};

export default Page;
