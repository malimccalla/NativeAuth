import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, onChangeText, value }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{ height: 20, width: 100 }}
      />
    </View>
  );
};

export { Input };