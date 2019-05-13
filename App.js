import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


import {AppLoading, Asset} from 'expo';

import {navigation} from './navigation';
import  {Block} from './components';
//import * as constants from './constants';

// import all used images
const images = [
  require('./assets/icons/back.png'),
  require('./assets/icons/plants.png'),
  require('./assets/icons/seeds.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/pots.png'),
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/avatar.png'),
];

export default class App extends React.Component {
state = {
isLoadingCOmplete: false,
}

handleResourcesAsync = async () => {
  //We are caching all the images
  // for better  performance on the app
const cacheImages = images.map(img => {
return Asset.fromModule(images).downloadAsync();
});
return Promise.all(cacheImages);  
}

  render () {
if(!this.stateisLoadingComplete && !this.props.skipLoadingScreen){
  return {
startAsync={this.handleResourcesAsync}
onError = {error => console.warn(error)}
onFinish = {() => this.setState({isLoadingCOmplete: true})}

  }
}

    return (
      <View style={styles.container}>
        <Text>
         Plant App
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
