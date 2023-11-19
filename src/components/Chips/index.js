import React from 'react';
import {Linking} from 'react-native';

import {
  GradientArea,
  ChipAreaButton,
  ChipArea,
  ChipIcon,
  ChipLabel,
} from './styled';

import InstagramIcon from '../../assets/images/instagram.png';
import LinkedinIcon from '../../assets/images/linkedin.png';
import GenderIcon from '../../assets/images/gender.png';
import UniversityIcon from '../../assets/images/university.png';
import ChildIcon from '../../assets/images/child.png';
import VaccineIcon from '../../assets/images/vaccine.png';
import ScaleIcon from '../../assets/images/scale.png';
import SexualityIcon from '../../assets/images/sexuality.png';
import WhatsappIcon from '../../assets/images/whatsapp.png';
import BookIcon from '../../assets/images/book.png';

const Chips = ({icon, label, url = null, action = null}) => {
  const handlePress = () => {
    if (url) {
      Linking.openURL(url);
    } else if (action) {
      action();
    }
  };

  const renderIcon = () => {
    switch (icon) {
      case 'instagram':
        return InstagramIcon;
      case 'linkedin':
        return LinkedinIcon;
      case 'gender':
        return GenderIcon;
      case 'university':
        return UniversityIcon;
      case 'child':
        return ChildIcon;
      case 'vaccine':
        return VaccineIcon;
      case 'scale':
        return ScaleIcon;
      case 'sexuality':
        return SexualityIcon;
      case 'whatsapp':
        return WhatsappIcon;
      case 'book':
        return BookIcon;
      default:
        return null;
    }
  };

  return (
    <GradientArea>
      {url || action ? (
        <ChipAreaButton onPress={handlePress}>
          <ChipIcon source={renderIcon()} />
          <ChipLabel>{label}</ChipLabel>
        </ChipAreaButton>
      ) : (
        <ChipArea>
          <ChipIcon source={renderIcon()} />
          <ChipLabel>{label}</ChipLabel>
        </ChipArea>
      )}
    </GradientArea>
  );
};

export default Chips;
