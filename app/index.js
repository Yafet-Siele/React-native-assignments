import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Lab Assignments</Text>
      <Link href="/LabAssignment1" style={styles.link}>
        Lab Assignment 1
      </Link>
      <Link href="/LabAssignment2" style={styles.link}>
        Lab Assignment 2
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
});

export default App;
