import React, {Component} from 'react';
import {Platform} from 'react-native';
import {BorderlessButton, RectButton} from 'react-native-gesture-handler';
import {Icon, Item, Input} from 'native-base';
import Products from '../components/Products';
import Layout from '../components/layout';
import SearchLayout from 'react-navigation-addon-search-layout';

class Home extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerRight: (
      <RectButton
        onPress={() => navigation.navigate('Product')}
        style={{marginRight: 15}}>
        <Item>
          <Icon name="cart" />
          <Input placeholder="Search" />
          <Icon name="search" />
        </Item>
      </RectButton>
    ),
  });
  render() {
    return (
      <Layout>
        <Products />
      </Layout>
    );
  }
}

export default Home;
