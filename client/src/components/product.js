import React from 'react';
import {Card, CardItem, Text, Button as NButton} from 'native-base';
import styled from 'styled-components/native';
import {StyleSheet, Image} from 'react-native';

const Button = styled(NButton)`
  background-color: gold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2;
  margin-left: 10;
`;

const Product = ({item}) => (
  <Card style={styles.productCard}>
    <Text style={styles.title}>{item && item.name}</Text>
    <CardItem style={{flex: 1}} cardBody>
      <Image source={{uri: item.image}} style={styles.image} />
    </CardItem>
    <CardItem footer style={{justifyContent: 'flex-end'}}>
      <Text style={styles.price}>{item && item.price}$</Text>
      <Button small style={{borderRadius: 5, elevation: 5}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>sepete ekle</Text>
      </Button>
    </CardItem>
  </Card>
);
/**
 *  <Text style={styles.text}>Color: {item && item.color}</Text>
 *  <Text style={styles.text}>Price: {item && item.price}</Text>
 *           <Text style={styles.text}>
            Description: {item && item.description}
          </Text>
 */
export default Product;

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    marginLeft: 10,
    marginVertical: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  price: {
    fontSize: 16,
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {alignSelf: 'center', height: 150, width: '80%'},
  butttonBuy: {
    margin: 10,
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
  },
  productCard: {
    height: 250,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
