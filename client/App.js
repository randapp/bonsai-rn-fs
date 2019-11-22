import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import client from './src/createClient';
import AppNavigation from './src/AppNavigation';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigation />
      </ApolloProvider>
    );
  }
}

export default App;
