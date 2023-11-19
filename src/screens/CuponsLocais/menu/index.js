import React, {useState} from 'react';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import {MenuArea, MenuPreviewButton, MenuPreviewImage} from './styled';

const Menu = ({photo}) => {
  const [showModal, setShowModal] = useState(false);

  const images = [
    {
      url: photo,
    },
  ];

  return showModal ? (
    <Modal visible={true} transparent={true}>
      <ImageViewer
        imageUrls={images}
        renderIndicator={() => null}
        enableSwipeDown={true}
        onSwipeDown={() => setShowModal(false)}
        backgroundColor="rgba(0, 0, 0, 0.5)"
        onClick={() => setShowModal(false)}
      />
    </Modal>
  ) : (
    <MenuArea>
      <MenuPreviewButton onPress={() => setShowModal(true)}>
        <MenuPreviewImage source={{uri: photo}} />
      </MenuPreviewButton>
    </MenuArea>
  );
};

export default Menu;
