import React from 'react';
import { Image } from 'react-native'
import {createAppContainer, createStackNavigator} from 'react-navigation';

import welcome from '../screens/welcome';
//import login from '../screens/login';
//import explore from '../screens/explore';
//import browse from '../screens/browse';
//import product from '../screens/product';
//import settings from '../screens/settings';


import {theme} from '../constants';

const screens = createStackNavigator({
welcome, 
//login,
//browse,
//product,
//settings,
},{
defaultNavigationOptions: {
  headerStyle:{},
  headerBackImage: <Image />,
  headerBackTitle: null,
  headerLeftContainerStyle: {},
  headerRightContainerStyle: {},
}

});

export default createAppContainer(screens);