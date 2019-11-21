import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Text>{(this.state && this.state.status) || 'test'}</Text>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error');
              console.log(error);
              this.setState({status: 'error'});
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
              this.setState({status: 'no'});
            } else {
              this.setState({status: 'ok'});
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
      </View>
    );
  }
}
