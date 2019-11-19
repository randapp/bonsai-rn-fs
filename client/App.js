import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import client from './src/createClient';
import Products from './src/components/Products';
import Layout from './src/components/layout';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Layout>
          <Products />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default App;
