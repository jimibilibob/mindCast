import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import CustomInput from '@components/CustomInput';
import {Text} from '@rneui/themed';
import {View} from 'react-native';
import CustomButton from '@components/CustomButton';
import CustomBackgroundImage from '@components/CustomBackgroundImage';
import { lightTheme } from '../styles/index';
import OrText from '../components/OrText';

const Signin = () => {

    const { control, handleSubmit } = useForm()

    const signInWithEmailPassword: SubmitHandler<FieldValues> = async (data) => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(data['email'], data['password'])

            console.log('User signed in!', userCredential);
            //TODO: Navigate to home
        } catch (error: any) {
            console.error(error);
        }
    }

    const emailPattern = () => new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')

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
            //TODO: Navigate to home
        } catch (error: any) {
            console.error(error);
        }
    }

   const signInGoogle = async () => {
        try {

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
        } catch (error: any) {
            console.error(error);
        }
    }

    return (
        <SafeAreaView>
        <CustomBackgroundImage
            uri='https://s3-sa-east-1.amazonaws.com/mind-cast/images/background-image.jpg'>
                <ScrollView style={styles.container}>
                    <View style={{flex: 1}}>
                        <View style={styles.title}>
                            <Text
                            h2
                            style={{color: '#FFF', alignSelf: 'center'}}>
                            MINDCAST
                            </Text>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                <Text
                                style={{color: '#FFF', fontSize: 18}}>
                                A new way to boost your 
                                </Text>
                                <Text
                                style={{color: lightTheme.primaryColor, fontSize: 18}}>
                                knowledge
                                </Text>
                            </View>
                        </View>
                        <CustomInput
                            control={control}
                            name={'email'}
                            iconName={'mail'}
                            placeholder={'E-mail'}
                            rules={{required: true, pattern: emailPattern()}}/>
                        <CustomInput
                            control={control}
                            name={'password'}
                            iconName={'lock'}
                            placeholder={'Password'}
                            type={'password'}
                            rules={{required: true, minLength: 5}}/>
                            
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text
                                    style={{color: '#FFF', fontSize: 18}}>
                                    Has account?
                                </Text>
                                <Text
                                    style={{color: lightTheme.primaryColor, fontSize: 18}}>
                                    Register now!
                                </Text>
                                </View>
                            <CustomButton
                                title={'LOGIN'}
                                color={lightTheme.primaryColor}
                                onPress={handleSubmit(signInWithEmailPassword)}/>
                        </View>
                    </View>
                    
                    <View>
                        <OrText/>
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
                </ScrollView>
            </CustomBackgroundImage>
        
        </SafeAreaView>
    );
};

export default Signin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    title: {
        paddingVertical: 50
    },
    socialMediaButtons: {
        marginBottom: 15
    }
});