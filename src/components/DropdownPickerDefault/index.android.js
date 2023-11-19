import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {View} from 'react-native';

const Component = ({
  placeholder = '',
  value = null,
  items = [],
  setValue = () => {},
  backgroundColor = '#faf9f9',
  borderRadius = 22,
  borderWidth = 1,
  borderColor = '#EFEFEF',
  disabled = false,
}) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: 50,
        width: '100%',
        backgroundColor,
        borderWidth,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        borderColor,
      }}>
      <Picker
        selectedValue={value}
        mode="dropdown"
        enabled={!disabled}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 50,
          width: '100%',
          paddingLeft: 14,
        }}
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}>
        <Picker.Item label={placeholder} value={null} />
        {items.map((item, index) => (
          <Picker.Item label={item.label} value={item.value} key={index} />
        ))}
      </Picker>
    </View>
  );
};

export default Component;
