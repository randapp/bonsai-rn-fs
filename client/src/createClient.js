import client from 'apollo-boost';
import {Platform} from 'react-native';
import {SERVER_IP, PORT} from 'react-native-dotenv';

const apolloClient = new client({
  uri: Platform.select({
    // android: 'http://10.0.2.2.xip.io:8080/graphql',
    android: `http://${SERVER_IP}:${PORT}/graphql`,
    // android: 'http://localhost:8080/graphql', //run on an Android device connected through usb
    ios: 'http://localhost:8080/graphql',
  }),
});

export default apolloClient;
