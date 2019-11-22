import React from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';
import SocialLoginBtn from './../components/login';

const Cart = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Icon name="user" size={25} type="FontAwesome5" />
      <SocialLoginBtn />
    </View>
  );
};

export default Cart;
