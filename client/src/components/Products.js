import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Image} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components/native';
import {Button as NButton, Text} from 'native-base';

const Container = styled.View`
  width: 90%;
  background-color: #f6f6f6;
  padding: 2px;
  margin: 20px;
  height: 250px;
  flex: 1;
  flex-direction: row;
`;

const DetailsContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
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

const Button = styled(NButton)`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2;
  margin-left: 10;
`;

const renderItem = ({item}) => {
  return (
    <Container>
      <Image style={styles.image} source={{uri: item.image}} />
      <DetailsContainer>
        <Text style={styles.title}>{item && item.name}</Text>
        <Text style={styles.text}>Size: {item && item.size}</Text>
        <Text style={styles.text}>Color: {item && item.color}</Text>
        <Text style={styles.text}>Price: {item && item.price}</Text>
        <Text style={styles.text}>Description: {item && item.description}</Text>
        <Button>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Add to cart</Text>
        </Button>
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
