// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import IntroScreen from './src/screens/IntroScreen';
// import ContactUsScreen from './src/screens/ContactUsScreen';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <IntroScreen /> */}
//       <ContactUsScreen />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });

import { View } from 'react-native';
import MainStackNavigator from './src/components/MainStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavs from './src/components/BottomTabs';

export default function App() {
  return (
    <NavigationContainer >
       <BottomNavs />
    </NavigationContainer>
  );
}
