import client from 'apollo-boost';
import {Platform} from 'react-native';
//import {SERVER_ADDRESS, PORT} from 'react-native-dotenv';

const apolloClient = new client({
  uri: Platform.select({
    // android: 'http://10.0.2.2.xip.io:8080/graphql',
    // android: `http://${SERVER_ADDRESS}:${PORT}/graphql`,
    android: 'http://localhost:8080/graphql',
    ios: 'http://localhost:8080/graphql',
  }),
});

export default apolloClient;
