import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.greenBox}>
            <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
        </View>

        <View style={styles.greenBox}>
            <Text style={[styles.boxText, styles.title]}>Our People</Text>
        </View>

        <View style={styles.greenBox}>
            <Text style={[styles.boxText, styles.title]}>Our Campus</Text>
        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  greenBox: {
    width: 100,
    height: 100,
    marginTop: 30,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black',
  },
  boxText: {
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
});
