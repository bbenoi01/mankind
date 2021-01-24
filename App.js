import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import rootStore from './src/rootStore';

import FlowerScreen from './src/screens/FlowerScreen';
import CartridgeScreen from './src/screens/CartridgeScreen';
import EdibleScreen from './src/screens/EdibleScreen';
import ExtractScreen from './src/screens/ExtractScreen';
// import MiscScreen from './src/screens/MiscScreen';
import PrerollScreen from './src/screens/PrerollScreen';
import TopicalScreen from './src/screens/TopicalScreen';
import MerchScreen from './src/screens/MerchScreen';
import BeverageScreen from './src/screens/BeverageScreen';
import PillScreen from './src/screens/PillScreen';
import TinctureScreen from './src/screens/TinctureScreen';
import DetailScreen from './src/screens/DetailScreen';
import AccountScreen from './src/screens/AccountScreen';

import Cart from './src/components/ShoppingCart';

const homeFlow = createStackNavigator({
  topFlow: createMaterialTopTabNavigator({
    Flower: FlowerScreen,
    Cartridge: CartridgeScreen,
    Edible: EdibleScreen,
    Extract: ExtractScreen,
    // Misc: MiscScreen,
    Preroll: PrerollScreen,
    Topical: TopicalScreen,
    Merch: MerchScreen,
    Beverage: BeverageScreen,
    Pill: PillScreen,
    Tincture: TinctureScreen
  },
  {
    initialRouteName: 'Flower',
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'grey',
      indicatorStyle: { backgroundColor: 'green' },
      style: { backgroundColor: 'inherit' },
      showIcon: true,
      scrollEnabled: true
    },
    // style: {
    //   display: 'flex',
    //   flexDirection: 'column'
    // },
    // sceneContainerStyle: {
    //   flex: 1
    // }
  }),
  Detail: DetailScreen
},
{
  defaultNavigationOptions: {
    headerShown: true,
    headerStyle: {
      backgroundColor: 'green'
    },
    headerTitle: 'ManKind Cannibis',
    headerTitleAlign: 'center',
    headerTintColor: '#f5f5f5',
    headerRight: props => <Cart {...props}/>
  }
})

homeFlow.navigationOptions = () => {
  return {
    title: 'Menu'
  }
}

const accountFlow = createStackNavigator({
  Account: AccountScreen
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'green',

    },
    headerTitle: 'ManKind Cannibis',
    headerTitleAlign: 'center',
    headerTintColor: '#f5f5f5'
  }
})

accountFlow.navigationOptions = () => {
  return {
    title: 'Account'
  }
}

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    homeFlow,
    accountFlow
  },
  {
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'grey'
    }
  })
})

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <Provider store={ rootStore }>
      <App/>
    </Provider>
  );
};
