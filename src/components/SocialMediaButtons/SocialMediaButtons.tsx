import { StyleSheet, View } from 'react-native';
import React, { useContext } from 'react'
import CustomButton from 'components/CustomButton';
import { lightTheme } from 'styles';

import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AppContext from 'shared/AppContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/RootStack';

type SocialMediaButtonsProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "SignIn" | "SignUp", undefined>
}

const SocialMediaButtons = ({navigation}: SocialMediaButtonsProps) => {
    const { setIsSignedIn } = useContext(AppContext)

    const signInFacebook = async () => {
        try {
            await LoginManager.logOut()
            const result = await LoginManager.logInWithPermissions(["public_profile", "email"])

            if (result.isCancelled) {
                console.log("Login cancelled");
                return;
            } 
            const data = await AccessToken.getCurrentAccessToken();
            if (!data) {
                console.log("Something went wrong obtaining access token");
                return;
            }

            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            auth().signInWithCredential(facebookCredential);
            setIsSignedIn(true)
            navigation.navigate('ChooseCategory')
        } catch (error: any) {
            console.error(error);
        }
    }

   const signInGoogle = async () => {
       try {
            await GoogleSignin.signOut()
            GoogleSignin.configure({
                webClientId: '514071825815-i2l8tuhh4ijpl8fc3uprfmvnlb94bvfi.apps.googleusercontent.com',
              });

            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();
        
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        
            // Sign-in the user with the credential
            auth().signInWithCredential(googleCredential);

            setIsSignedIn(true)
            navigation.navigate('ChooseCategory')
        } catch (error: any) {
            console.error(error);
        }
    }

    return (
        <View>
            <CustomButton
                title={'Register with'}
                color={lightTheme.facebookColor}
                iconName={'facebook-official'}
                iconColor={'#fff'}
                style={styles.socialMediaButtons}
                onPress={signInFacebook}/>
            <CustomButton
                title={'Register with'}
                color={lightTheme.googleColor}
                iconName={'google'}
                iconColor={'#fff'}
                style={styles.socialMediaButtons}
                onPress={signInGoogle}/>
        </View>
    )
}

export default SocialMediaButtons

const styles = StyleSheet.create({
    container: {
        height: 150,
    },
    text: {
        flex: 1,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    socialMediaButtons: {
        marginBottom: 15
    }
})