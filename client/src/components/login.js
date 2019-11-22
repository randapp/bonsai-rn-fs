import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {
  FacebookSocialButton,
  GoogleSocialButton,
} from 'react-native-social-buttons';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';

const fbLogin = async setState => {
  LoginManager.logOut();
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);
  if (result.isCancelled) {
    throw Error('Permission denied');
  }
  try {
    const data = await AccessToken.getCurrentAccessToken();
    requestUserInfo(data.accessToken, setState);
  } catch (error) {
    throw error;
  }
};

function _responseInfoCallback(error, result, setState) {
  if (error) {
    alert('Error fetching data: ' + error.toString());
  } else {
    setState(result);
    alert('Login Success');
  }
}
function requestUserInfo(accessToken, setState) {
  AccessToken.getCurrentAccessToken().then(data => {
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken: data.accessToken.toString(),
        parameters: {
          fields: {
            string: 'email,name,first_name,middle_name,last_name',
          },
        },
      },
      (a, b) => _responseInfoCallback(a, b, setState),
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  });
}
const SocialLoginBtn = () => {
  const [state, setstate] = useState(null);
  return (
    <View>
      <TouchableHighlight style={{marginBottom: 30, marginTop: 10}}>
        <FacebookSocialButton title="Login" onPress={() => fbLogin(setstate)} />
      </TouchableHighlight>
      <TouchableHighlight>
        <GoogleSocialButton />
      </TouchableHighlight>
    </View>
  );
};

export default SocialLoginBtn;
