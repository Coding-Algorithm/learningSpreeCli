import { StyleSheet, Text, View } from 'react-native';
import { DonutChat } from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <DonutChat />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
