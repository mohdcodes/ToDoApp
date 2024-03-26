import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import colors from '../Colors/colors';

const SearchBar = () => {
  return (
    <View>
      <TextInput placeholder="search event" style={styles.seacrhBar} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  seacrhBar: {
    borderWidth: 0.5,
    borderColor: colors.PRIMARY,
    height: 40,
    borderRadius: 40,
    fontSize: 15,
    paddingLeft: 15,
    marginVertical: 20,
  },
});
