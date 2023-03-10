import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Pictures from './screens/Pictures';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Pictures />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ebebeb",
    flex: 1,
    paddingBottom: 80
  },
});
