import { StyleSheet, Text, View } from 'react-native';

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Not Found</Text>
      {/* <Link href="/" style={styles.button}>Go back to Home screen</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
      fontSize: 24,
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
      },
  });