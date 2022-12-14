/* eslint-disable prettier/prettier */
import * as React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

export default class Boxes extends React.Component {
  return () {
    return (
      <ScrollView style={styles.pageContainer}>
      <View style={styles.box}>
          <View style={styles.inner}>
              <Text>Pulse</Text>
          </View>
      </View>

      <View style={styles.box}>
          <View style={styles.inner}>
              <Text>Blood Pressure</Text>
          </View>
      </View>

      <View style={styles.box}>
          <View style={styles.inner}>
              <Text>Weight</Text>
          </View>
      </View>

      <View style={styles.box}>
          <View style={styles.inner}>
              <Text>Temperature</Text>
          </View>
      </View>

      <View style={styles.box}>
          <View style={styles.inner}>
              <Text>Oxygen Saturation</Text>
          </View>
      </View>

      <View style={styles.box}>
          <View style={styles.inner}>
              <Text>Whatever</Text>
          </View>
      </View>

      <View style={styles.lastBox}>
          <View style={styles.inner}>
              <Text>Whatever</Text>
          </View>
      </View>
</ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  backgroundColor: '#fff',
},
box: {
  height: '20%',
  padding: 19,
},
lastBox: {
  height: '20%',
  padding: 19,
  marginBottom: 19,
},
inner: {
  height: '120%',
  width: 350,
  backgroundColor: '#EEEEEE',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 20,
}
});
