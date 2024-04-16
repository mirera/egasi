
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const styles = StyleSheet.create({
    poweredBy: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    poweredByText: {
        fontSize: 12,
        color: '#888888',
    },
  });
  

const PrivacyPolicyLink = () => {
    const handlePress = () => {
      Linking.openURL('https://loginit.co.ke/egasi-privacy-policy.html');
    };
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.poweredBy}>
          <Text style={styles.poweredByText}>Privacy Policy</Text>
        </View>
      </TouchableOpacity>
    );
  };
  
  export default PrivacyPolicyLink;