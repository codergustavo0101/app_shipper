import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, StatusBar, Alert} from 'react-native';
import {Camera} from 'expo-camera';
import {BarCodeScanner} from 'expo-barcode-scanner';

import {
  Container,
  PageTitleArea,
  PageTitle,
  QrCodeCoverArea,
  QrCodeCoverImage,
  BarCodeScannerArea,
  DescriptionText,
  BackButtonArea,
  BackButton,
} from './styled';

import QRCodeCover from '../../assets/images/qr-code-cover.png';
import ArrowCircleLeftIcon from '../../assets/icons/arrow-circle-left.svg';

const Page = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const alertInvalidCoupon = () => {
    Alert.alert(
      'Erro',
      'O QR code não é válido. Por favor, tente novamente.',
      [
        {
          text: 'OK',
          onPress: () => {
            setScanned(false);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);

    try {
      const dataObj = JSON.parse(data);

      const {id, userCouponId} = dataObj;

      if (id && userCouponId) {
        navigation.replace('QRCodeData', {
          couponId: id,
          userCouponId,
        });
      } else {
        alertInvalidCoupon();
      }
    } catch (error) {
      console.log(error);

      alertInvalidCoupon();
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <PageTitleArea>
        <PageTitle>Scanear QR code</PageTitle>
      </PageTitleArea>
      <QrCodeCoverArea>
        <QrCodeCoverImage source={QRCodeCover} />
        <BarCodeScannerArea>
          <Camera
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            ratio="1:1"
            barCodeScannerSettings={{
              barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
          />
        </BarCodeScannerArea>
      </QrCodeCoverArea>
      <DescriptionText>
        Escaneie o QR code para poder dar{'\n'} baixa no cupom de desconto
      </DescriptionText>
      <BackButtonArea>
        <BackButton onPress={() => navigation.goBack()}>
          <ArrowCircleLeftIcon
            width={28}
            height={27}
            color="#FF3F6D"
            fill="#fff"
          />
        </BackButton>
      </BackButtonArea>
    </Container>
  );
};

export default Page;
