import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../Colors/colors';
const formatDate = (ms) => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
};
const NoteDetail = (props) => {
  const { note } = props.route.params;
  return (
    <View
      style={[
        { padding: 20, paddingTop: 100, backgroundColor: colors.PURPLE },
        StyleSheet.absoluteFillObject,
      ]}
    >
      <Text style={styles.time}>
        {note.isUpdated
          ? `Updated At ${formatDate(note.time)}`
          : `Created At ${formatDate(note.time)}`}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 23,
          color: colors.PRIMARY,
          marginBottom: 15,
        }}
      >
        EVENT:- {note.event}
      </Text>
      <Text style={{ fontWeight: '900', fontSize: 18, marginBottom: 15 }}>
        NAME: {note.organiserName}
      </Text>
      <Text style={{ fontWeight: '900', fontSize: 16, marginBottom: 15 }}>
        ADDRESS:- {note.address}
      </Text>
      <Text style={{ fontWeight: '700', fontSize: 14, marginBottom: 15 }}>
        CONTACT:-{note.contact}
      </Text>
      <Text style={{ fontWeight: '500', fontSize: 14, marginBottom: 15 }}>
        EMAIL:-{note.email}
      </Text>
    </View>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({
  container: {},
  time: {
    textAlign: 'right',
    fontSize: 12,
    opacity: 0.5,
  },
});
