import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.Parent}>
            <View style={[styles.Child, { backgroundColor: 'skyblue' }]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.Child, { backgroundColor: 'mediumaquamarine' }]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles.Child, { backgroundColor: 'red' }]}>
                <Text>Square 3</Text>
            </View>
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
  Parent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    marginTop: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  Child: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
