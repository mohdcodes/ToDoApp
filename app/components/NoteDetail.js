import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../Colors/colors';

const NoteDetail = (props) => {
  const { note } = props.route.params;
  return (
    <View
      style={[
        { padding: 20, paddingTop: 100, backgroundColor: colors.PURPLE },
        StyleSheet.absoluteFillObject,
      ]}
    >
      <Text>{note.event}</Text>
      <Text>{note.organiserName}</Text>
      <Text>{note.address}</Text>
      <Text>{note.contact}</Text>
      <Text>{note.email}</Text>
    </View>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({
  container: {},
});
