import React from 'react';
import {ScrollView} from 'react-native';
import {Container, Header, Content, Item, Text, Badge, Body} from 'native-base';

const MenuItem = ({item}) => (
  <Item
    style={{
      paddingTop: 15,
      paddingBottom: 15,
      marginHorizontal: 15,
      borderBottomWidth: 0,
    }}>
    <Badge
      style={{
        backgroundColor: item.color,
        borderWidth: 0.5,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
      }}>
      <Text style={{color: 'black', textTransform: 'capitalize'}}>
        {item.title}
      </Text>
    </Badge>
  </Item>
);
const menu = [
  'fırsat',
  'kadın',
  'erkek',
  'giyim',
  'ayakkabı',
  'non',
  'one',
  'oklm',
  'en çok beğenilen',
].map((title, idx) => ({
  title,
  color: idx === 0 ? 'orange' : 'white',
}));
const Layout = ({children}) => (
  <Container>
    <Header
      style={{
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 3,
      }}>
      <Body>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {menu.map(item => (
            <MenuItem key={item.title} item={item} />
          ))}
        </ScrollView>
      </Body>
    </Header>
    <Content>{children}</Content>
  </Container>
);
export default Layout;
