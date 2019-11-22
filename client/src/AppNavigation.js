import React from 'react';
import {View} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './screens/home-screen';
import ProfileScreen from './screens/profile-screen';
import FavoritesScreen from './screens/favorites-screen';
import CartScreen from './screens/cart-screen';
import ProductDetails from './screens/product-details-screen';
import {Item, Input, Icon} from 'native-base';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Product: ProductDetails,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: props => (
        <View
          style={{
            height: 50,
            borderRadius: 50,
            alignItems: 'center',
            alignSelf: 'center',
            paddingLeft: 30,
            paddingRight: 30,
            marginTop: 10,
            marginHorizontal: 30,
            elevation: 2,
            marginBottom: 10,
            backgroundColor: 'white',
          }}>
          <Item style={{borderWidth: 0, borderRadius: 50}}>
            <Icon name="search" />
            <Input placeholder="Ürün bul" />
          </Item>
        </View>
      ),
      headerStyle: {
        backgroundColor: 'transparent',
        alignItems: 'center',
      },
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    home: {
      screen: AppNavigator,
    },
    favorite: {
      screen: FavoritesScreen,
    },
    cart: {
      screen: CartScreen,
    },
    profile: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: 'home',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Icon;
        let iconName;
        let type = '';
        if (routeName === 'home') {
          iconName = 'home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          //IconComponent = HomeIconWithBadge;
        } else if (routeName === 'profile') {
          iconName = 'user';
          type = 'FontAwesome5';
        } else if (routeName === 'favorite') {
          iconName = 'heart';
        } else {
          iconName = 'cart';
        }

        // You can return any component that you like here!
        return (
          <IconComponent
            name={iconName}
            size={25}
            color={tintColor}
            style={{color: tintColor}}
            type={type}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'gold',
      inactiveTintColor: 'black',
    },
  },
);
export default createAppContainer(TabNavigator);
