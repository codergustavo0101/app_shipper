import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

import {PageArea, TabBarHeader, TabScreenTitle} from '../../components';
import {
  Container,
  TopTitleArea,
  BackButtonArea,
  BackButton,
  SelectLocalsOrCoupons,
  SelectLocalsOrCouponsButton,
  SelectLocalsOrCouponsButtonText,
  ContentArea,
  FilterButton,
} from './styled';

import LocalCard from './localCard';
import LocalDetails from './localDetails';
import Coupon from './coupon';
import CouponDetails from './couponDetails';
import Filter from './filter';
import Rate from './rate';
import Menu from './menu';

import HomeIcon from '../../assets/icons/home.svg';
import TicketIcon from '../../assets/icons/ticket.svg';
import ArrowCircleLeftIcon from '../../assets/icons/arrow-circle-left.svg';
import FilterIcon from '../../assets/icons/filter.svg';
import EstablishmentService from '../../services/EstablishmentService';
import UsersCouponsService from '../../services/UsersCouponsService';
import EstablishmentProfileRankService from '../../services/EstablishmentProfileRankService';

const Page = ({navigation}) => {
  const [showDetalhesLocal, setShowDetalhesLocal] = useState(false);
  const [showDetalhesCupom, setShowDetalhesCupom] = useState(false);
  const [showCouponsArea, setShowCouponsArea] = useState(false);
  const [showMenuArea, setShowMenuArea] = useState(false);

  const [showFilter, setShowFilter] = useState(false);
  const [distance, setDistance] = useState(50);

  const [showRateArea, setShowRateArea] = useState(false);
  const [rate, setRate] = useState(null);

  const [locals, setLocals] = useState([]);
  const [menuPhoto, setMenuPhoto] = useState(null);
  const [selectedLocal, setSelectedLocal] = useState(null);

  const [coupons, setCoupons] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const handleClickOnGoBack = () => {
    setShowDetalhesLocal(false);
    setShowDetalhesCupom(false);
    setShowMenuArea(false);

    if (showDetalhesLocal) {
      setShowCouponsArea(false);
    } else if (showDetalhesCupom) {
      setShowCouponsArea(true);
    } else if (showMenuArea) {
      setShowCouponsArea(false);
    }
  };

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  const refreshFilter = distanceFiltered => {
    setDistance(distanceFiltered);
    setShowFilter(false);
  };

  const rateEstablishment = async starRate => {
    await EstablishmentProfileRankService.rank({
      id: selectedLocal.id,
      rank: starRate,
    });
  };

  const handleRateAreaButton = starRate => {
    setRate(starRate);
    setShowRateArea(false);
    rateEstablishment(starRate);
  };

  const handlePressOnLocalCard = local => {
    setSelectedLocal(local);
    setShowDetalhesLocal(true);
  };

  const fetchLocals = async () => {
    const response = await EstablishmentService.getClosestEstablishments({
      distance,
    });

    setLocals(response);
  };

  const fetchCoupons = async () => {
    const response = await UsersCouponsService.findAll();

    setCoupons(response);
  };

  const handlePressOnCoupon = coupon => {
    if (
      new Date(coupon.expiration) < new Date() ||
      coupon.status !== 'ACTIVE'
    ) {
      if (coupon.status === 'USED') {
        Alert.alert('Este cupom já foi utilizado!');
      } else {
        Alert.alert('Este cupom expirou!');
      }

      return;
    } else {
      setSelectedCoupon(coupon);
      setShowDetalhesCupom(true);
    }
  };

  useEffect(() => {
    if (!showCouponsArea) {
      fetchLocals();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [distance, showCouponsArea]);

  useEffect(() => {
    if (showCouponsArea) {
      fetchCoupons();
    }
  }, [showCouponsArea]);

  return (
    <PageArea
      isTabBar={true}
      statusBarTranslucent={true}
      barStyle="light-content">
      <Container>
        <TabBarHeader navigation={navigation} />
        <TopTitleArea>
          {(showDetalhesLocal || showDetalhesCupom || showMenuArea) && (
            <BackButtonArea>
              <BackButton onPress={() => handleClickOnGoBack()}>
                <ArrowCircleLeftIcon width={28} height={28} color="#FF3F6D" />
              </BackButton>
            </BackButtonArea>
          )}
          {!showDetalhesCupom &&
            !showDetalhesLocal &&
            !showCouponsArea &&
            !showMenuArea && (
              <FilterButton onPress={handleFilter}>
                <FilterIcon width={24} heigth={24} stroke="#FF3F6D" />
              </FilterButton>
            )}
          <TabScreenTitle
            title={
              showDetalhesLocal
                ? 'Detalhes local'
                : showDetalhesCupom
                ? 'Detalhes cupom'
                : showMenuArea
                ? 'Cardápio'
                : 'Cupons e locais'
            }
          />
        </TopTitleArea>
        {!showDetalhesLocal && !showDetalhesCupom && !showMenuArea && (
          <SelectLocalsOrCoupons>
            <SelectLocalsOrCouponsButton
              isActive={!showCouponsArea}
              onPress={() => setShowCouponsArea(false)}>
              <HomeIcon
                width={23}
                height={23}
                color={!showCouponsArea ? '#fff' : '#ff3f6d'}
              />
              <SelectLocalsOrCouponsButtonText isActive={!showCouponsArea}>
                Locais
              </SelectLocalsOrCouponsButtonText>
            </SelectLocalsOrCouponsButton>
            <SelectLocalsOrCouponsButton
              isActive={showCouponsArea}
              onPress={() => setShowCouponsArea(true)}>
              <TicketIcon
                width={28}
                height={28}
                color={showCouponsArea ? '#fff' : '#ff3f6d'}
              />
              <SelectLocalsOrCouponsButtonText isActive={showCouponsArea}>
                Cupons
              </SelectLocalsOrCouponsButtonText>
            </SelectLocalsOrCouponsButton>
          </SelectLocalsOrCoupons>
        )}
        {!showDetalhesLocal && !showCouponsArea && !showMenuArea && (
          <ContentArea
            overScrollMode="never"
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{
              alignItems: 'center',
            }}
            data={locals}
            renderItem={({item, index}) => (
              <LocalCard
                onPress={() => handlePressOnLocalCard(item)}
                showMenuArea={() => setShowMenuArea(true)}
                isFirstCard={index === 0}
                setMenuPhoto={setMenuPhoto}
                data={item}
              />
            )}
            keyExtractor={item => item.id}
          />
        )}
        {showDetalhesLocal && (
          <LocalDetails
            setShowRateArea={setShowRateArea}
            data={selectedLocal}
          />
        )}
        {showMenuArea && <Menu photo={menuPhoto} />}
        {/* //TODO: Integrates CouponArea with API */}
        {!showDetalhesCupom && showCouponsArea && (
          <ContentArea
            overScrollMode="never"
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{
              alignItems: 'center',
            }}
            data={coupons}
            renderItem={({item, index}) => (
              <Coupon
                onPress={() => handlePressOnCoupon(item)}
                isFirstCard={index === 0}
                data={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        {showDetalhesCupom && <CouponDetails data={selectedCoupon} />}
      </Container>
      {showFilter && (
        <Filter
          setShowFilter={setShowFilter}
          distance={distance}
          setDistance={setDistance}
          refreshFilter={refreshFilter}
        />
      )}
      {showRateArea && (
        <Rate
          setShowRate={setShowRateArea}
          name={selectedLocal.name}
          handler={handleRateAreaButton}
          rate={rate}
        />
      )}
    </PageArea>
  );
};

export default Page;
