import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.Parent}>
            <Text style={[styles.Child, { backgroundColor: 'powderblue' }]}>Child One</Text>
            <Text style={[styles.Child, { backgroundColor: 'skyblue' }]}>Child Two</Text>
            <Text style={[styles.Child, { backgroundColor: 'steelblue' }]}>Child Three</Text>
        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
  Parent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5fcff',
    borderColor: '#0099AA',
    borderWidth: 5,
  },
  Child: {
    flex: 1,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,
  },
});
