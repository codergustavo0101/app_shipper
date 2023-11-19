import React from 'react';
import {Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {useSelector, useDispatch} from 'react-redux';

import {
  PhotosArea,
  Photo,
  RemovePhotoIconArea,
  AddPhotoIconArea,
  ImageArea,
  Image,
} from './styled';

import CloseCircleIcon from '../../assets/icons/close-circle.svg';
import AddCicleIcon from '../../assets/icons/add-circle.svg';

import PhotosService from '../../services/PhotosService';

const Photos = ({
  photos = [],
  setPhotos = () => {},
  setIsLoading = () => {},
}) => {
  const dispatch = useDispatch();

  const pickImage = async id => {
    setIsLoading(true);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.2,
      base64: true,
    });

    if (!result.canceled) {
      const tenMegaBytes = 10 * 1024 * 1024;
      const base64 = result?.assets[0]?.base64 || '';

      if (base64.length > tenMegaBytes) {
        Alert.alert(
          'Erro',
          'A imagem selecionada é muito grande, selecione uma imagem com no máximo 10MB',
        );

        setIsLoading(false);
      } else {
        addPhoto(id, base64);
      }
    } else {
      setIsLoading(false);
    }
  };

  const removePhoto = async id => {
    setIsLoading(true);

    let isMoreThanOneFilled = -1;

    photos.map(photo => {
      if (photo.filled) {
        isMoreThanOneFilled++;
      }
    });

    if (isMoreThanOneFilled <= 0) {
      Alert.alert('Erro', 'Você precisa ter pelo menos uma foto cadastrada');
      setIsLoading(false);
      return;
    }

    dispatch({
      type: 'REMOVE_PHOTO',
      payload: id,
    });

    setPhotos(
      photos.map(photo => {
        if (photo.id === id) {
          photo.filled = false;
          photo.photo = null;
        }

        return photo;
      }),
    );

    try {
      await PhotosService.removeProfilePicture(id);
    } catch (error) {
      console.log(error.message);

      let errorMessage = error?.response?.data?.message || error.message;

      if (typeof errorMessage === 'object') {
        errorMessage = Object.values(errorMessage).join('\n');
      }

      Alert.alert('Erro', errorMessage);
    }

    setIsLoading(false);
  };

  const addPhoto = async (id, base64) => {
    const newPhotos = photos.map(photo => {
      if (photo.id === id) {
        photo.filled = true;
        photo.photo = 'data:image/jpeg;base64,' + base64;
      }

      return photo;
    });

    setPhotos(newPhotos);

    try {
      const response = await PhotosService.updateProfilePicture(base64, id);

      setPhotos(
        newPhotos.map(photo => {
          if (photo.id === id) {
            photo.photo = response.photo_url;
          }

          return photo;
        }),
      );

      dispatch({
        type: 'ADD_PHOTO',
        payload: {
          order: id,
          photoUrl: response.photo_url,
        },
      });
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', error.message);
      removePhoto(id);
    }

    setIsLoading(false);
  };

  return (
    <PhotosArea>
      {photos.map(photo => (
        <Photo key={photo.id} filled={photo.filled}>
          {photo.filled ? (
            <RemovePhotoIconArea onPress={() => removePhoto(photo.id)}>
              <CloseCircleIcon width={18} height={18} color="#FF3F6D" />
            </RemovePhotoIconArea>
          ) : (
            <AddPhotoIconArea onPress={() => pickImage(photo.id)}>
              <AddCicleIcon width={27} height={27} color="#FF3F6D" />
            </AddPhotoIconArea>
          )}
          {photo.photo && (
            <ImageArea>
              <Image source={{uri: photo.photo}} />
            </ImageArea>
          )}
        </Photo>
      ))}
    </PhotosArea>
  );
};

export default Photos;
