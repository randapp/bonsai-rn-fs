import React from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';

const Cart = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Icon name="heart" size={25} style={{color: 'gray'}} />
    </View>
  );
};

export default Cart;
