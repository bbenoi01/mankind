import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import rootStore from './src/rootStore';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppHeader from './src/components/AppHeader';
import FlowerScreen from './src/screens/FlowerScreen';
import CartridgeScreen from './src/screens/CartridgeScreen';
import EdibleScreen from './src/screens/EdibleScreen';
import ExtractScreen from './src/screens/ExtractScreen';
import MiscScreen from './src/screens/MiscScreen';
import PrerollScreen from './src/screens/PrerollScreen';
import TopicalScreen from './src/screens/TopicalScreen';
import MerchScreen from './src/screens/MerchScreen';
import BeverageScreen from './src/screens/BeverageScreen';
import PillScreen from './src/screens/PillScreen';
import TinctureScreen from './src/screens/TinctureScreen';
import DetailScreen from './src/screens/DetailScreen';
import AccountScreen from './src/screens/AccountScreen';

const Flower = createMaterialTopTabNavigator({
  Flower: FlowerScreen,
  FlowerDetail: DetailScreen
},
{
  swipeEnabled: false,
  tabBarOptions: {
    tabStyle: {
      display: 'none',
    }
  }
});

const Cartridge = createMaterialTopTabNavigator({
  Cartridge: CartridgeScreen,
  Detail: DetailScreen
},
{
  swipeEnabled: false,
  tabBarOptions: {
    tabStyle: {
      display: 'none',
    }
  }
});

const Edible = createMaterialTopTabNavigator({
  Edible: EdibleScreen,
  Detail: DetailScreen
},
{
  swipeEnabled: false,
  tabBarOptions: {
    tabStyle: {
      display: 'none',
    }
  }
});

const Extract = createMaterialTopTabNavigator({
  Extract: ExtractScreen,
  Detail: DetailScreen
},
{
  swipeEnabled: false,
  tabBarOptions: {
    tabStyle: {
      display: 'none',
    }
  }
});

const Misc = createMaterialTopTabNavigator({
  Misc: MiscScreen,
  Detail: DetailScreen
},
{
  swipeEnabled: false,
  tabBarOptions: {
    tabStyle: {
      display: 'none',
    }
  }
});

const Preroll = createMaterialTopTabNavigator({
  Preroll: PrerollScreen,
  Detail: DetailScreen
},
{
  swipeEnabled: false,
  tabBarOptions: {
    tabStyle: {
      display: 'none',
    }
  }
});

const Topical = createMaterialTopTabNavigator({
  Topical: TopicalScreen,
  Detail: DetailScreen
},
{
  swipeEnabled: false,
  tabBarOptions: {
    tabStyle: {
      display: 'none',
    }
  }
});

const Merch = createMaterialTopTabNavigator({
  Merch: MerchScreen,
  Detail: DetailScreen
},
{
  swipeEnabled: false,
  tabBarOptions: {
    tabStyle: {
      display: 'none',
    }
  }
});

const Beverage = createMaterialTopTabNavigator({
  Beverage: BeverageScreen,
  Detail: DetailScreen
},
{
  swipeEnabled: false,
  tabBarOptions: {
    tabStyle: {
      display: 'none',
    }
  }
});

const Pill = createMaterialTopTabNavigator({
  Pill: PillScreen,
  Detail: DetailScreen
},
{
  swipeEnabled: false,
  tabBarOptions: {
    tabStyle: {
      display: 'none',
    }
  }
});

const Tincture = createMaterialTopTabNavigator({
  Tincture: TinctureScreen,
  Detail: DetailScreen
},
{
  swipeEnabled: false,
  tabBarOptions: {
    tabStyle: {
      display: 'none',
    }
  }
});

const homeFlow = createStackNavigator({
  topFlow: createMaterialTopTabNavigator({
    Flower,
    Cartridge,
    Edible,
    Extract,
    Misc,
    Preroll,
    Topical,
    Merch,
    Beverage,
    Pill,
    Tincture
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
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    sceneContainerStyle: {
      flex: 1
    }
  })
},
{
  defaultNavigationOptions: {
    // headerShown: true,
    header: props => <AppHeader {...props}/>
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
    // headerShown: true,
    header: props => <AppHeader {...props}/>
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
