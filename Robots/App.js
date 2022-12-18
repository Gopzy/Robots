import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';

import HomeScreen from './screens/HomeScreen';
import {store} from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 62,
    paddingHorizontal: 24,
  },
});

export default App;
