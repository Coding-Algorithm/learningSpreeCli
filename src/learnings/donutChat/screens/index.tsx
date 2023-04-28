import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';
import Donut from './Donut';

const DonutChat = () => {
  const data = [
    {
      percentage: 8,
      color: 'tomato',
      max: 10,
      radius: 30,
      strokeWidth: 20
    },
    {
      percentage: 14,
      color: 'skyblue',
      max: 20,
      radius: 80,
      strokeWidth: 15
    },   
    {
      percentage: 92,
      color: 'gold',
      radius: 60,
      max: 100,
    },
    {
      percentage: 240,
      color: '#222',
      max: 500,
      radius: 100,
    //   strokeWidth: 30
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {data.map((p, i) => {
          return (
            <Donut
              key={i}
              percentage={p.percentage}
              color={p.color}
              radius={p.radius}
              delay={500 + 100 * i}
              max={p.max}
              strokeWidth={p.strokeWidth}
            />
          );
        })}
      </View>
    </View>
  );
};

export default DonutChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  },
});
