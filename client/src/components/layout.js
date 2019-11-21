import React from 'react';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Button,
  Text,
  Body,
  Title,
  Right,
  Icon,
  Left,
} from 'native-base';
import Login from './login';

const Layout = ({children}) => (
  <Container>
    <Header searchBar rounded>
      <Left>
        <Login />
      </Left>
      <Item>
        <Icon name="cart" />
        <Input placeholder="Search" />
        <Icon name="search" />
      </Item>
      <Button>
        <Text>Search</Text>
      </Button>
    </Header>
    <Content>{children}</Content>
  </Container>
);
export default Layout;
