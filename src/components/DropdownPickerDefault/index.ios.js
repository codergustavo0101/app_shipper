import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const Component = ({
  placeholder = '',
  listMode = 'SCROLLVIEW',
  open = false,
  value = null,
  items = [],
  setOpen = () => {},
  setValue = () => {},
  setItems = () => {},
  maxHeight = 200,
  backgroundColor = '#faf9f9',
  borderRadius = 22,
  borderWidth = 1,
  borderColor = '#EFEFEF',
  zIndex = 0,
  zIndexInverse = 0,
  dropdownIconColor = '#000',
  disabled = false,
}) => {
  return (
    <DropDownPicker
      placeholder={placeholder}
      listMode={listMode}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      zIndex={zIndex}
      zIndexInverse={zIndexInverse}
      maxHeight={maxHeight}
      dropDownDirection="BOTTOM"
      disabled={disabled}
      dropDownStyle={{
        zIndex: zIndex,
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: '100%',
        backgroundColor,
        borderWidth,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        borderColor,
        paddingLeft: 14,
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      textStyle={{
        fontSize: 14,
        color: '#B1B2B2',
        fontFamily: 'Poppins-Medium',
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      dropDownContainerStyle={{
        backgroundColor,
        borderWidth,
        borderTopWidth: 0,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        borderColor,
      }}
    />
  );
};

export default Component;
