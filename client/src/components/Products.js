import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Image} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components/native';
import {Text} from 'native-base';
import Product from './product';

const Container = styled.View`
  width: 90%;
  background-color: transparent;
  padding: 2px;
  margin: 20px;
  height: 250px;
  flex: 1;
  flex-direction: row;
`;

const DetailsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  background: transparent;
  margin-bottom: 15;
`;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  image: {width: 170, height: 250},
  butttonBuy: {
    margin: 10,
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
  },
});

const GET_PRODUCTS = gql`
  {
    products {
      id
      name
      price
      description
      color
      size
      image
    }
  }
`;

const renderItem = ({item}) => {
  return (
    <Container>
      <DetailsContainer>
        <Product item={item} />
      </DetailsContainer>
    </Container>
  );
};

const keyExtractor = item => item.id;

const ProductsList = () => {
  const {loading, error, data} = useQuery(GET_PRODUCTS);
  const {products} = data || {};
  if (loading) {
    return <Text> Loading... </Text>;
  }
  if (data && data.products) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{
            padding: 10,
          }}
          numColumns={2}
          data={products}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </SafeAreaView>
    );
  } else {
    console.error(error);
  }
};

export default ProductsList;
