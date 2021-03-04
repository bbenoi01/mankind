import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import { setNavigator } from './src/util/navigationRef';
import rootStore from './src/rootStore';

import Cart from './src/components/ShoppingCart';
import Menu from './src/components/Menu';
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
import OrdersScreen from './src/screens/OrdersScreen';
import OrderDetailScreen from './src/screens/OrderDetailScreen';

const homeFlow = createStackNavigator({
  topFlow: createMaterialTopTabNavigator({
    Flower: FlowerScreen,
    // Cartridge: CartridgeScreen,
    // Edible: EdibleScreen,
    // Extract: ExtractScreen,
    // // Misc: MiscScreen,
    // Preroll: PrerollScreen,
    // Topical: TopicalScreen,
    // Merch: MerchScreen,
    // Beverage: BeverageScreen,
    // Pill: PillScreen,
    // Tincture: TinctureScreen
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
    }
  }),
  Detail: DetailScreen
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'green'
    },
    headerTitle: 'ManKind Cannibis',
    headerTitleAlign: 'center',
    headerTintColor: '#f5f5f5',
    // headerLeft: props => <Menu {...props}/>,
    headerRight: props => <Cart {...props}/>
  }
})

homeFlow.navigationOptions = () => {
  return {
    title: 'Menu'
  }
}

// const orderFlow = createMaterialTopTabNavigator({
//   Orders: OrdersScreen,
//   OrderDetails: OrderDetailScreen
// },
// {
//   initialRouteName: 'Orders',
//   tabBarOptions: {
//     style: { display: 'none' },
//     scrollEnabled: false
//   }
// })

const accountFlow = createStackNavigator({
  Account: AccountScreen,
  // orderFlow,
  Orders: OrdersScreen,
  OrderDetails: OrderDetailScreen
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
      <App ref={(navigator) => { setNavigator(navigator) }}/>
    </Provider>
  );
};
