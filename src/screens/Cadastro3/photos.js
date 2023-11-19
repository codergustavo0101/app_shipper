import React from 'react';
import {Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

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

const Photos = ({photos = [], setPhotos = () => {}}) => {
  const pickImage = async id => {
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
      } else {
        addPhoto(id, base64);
      }
    }
  };

  const removePhoto = id => {
    setPhotos(
      photos.map(photo => {
        if (photo.id === id) {
          photo.filled = false;
          photo.photo = null;

          PhotosService.removeProfilePicture(id).catch(err => {
            console.log(err);
          });
        }

        return photo;
      }),
    );
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

    PhotosService.updateProfilePicture(base64, id)
      .then(response => {
        setPhotos(
          newPhotos.map(photo => {
            if (photo.id === id) {
              photo.photo = response.photo_url;
            }

            return photo;
          }),
        );
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Erro', 'Não foi possível adicionar a foto');
        removePhoto(id);
      });
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
