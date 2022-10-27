import {SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import auth from '@react-native-firebase/auth';
import CustomInput from '@components/CustomInput';
import {Text} from '@rneui/themed';
import {View} from 'react-native';
import CustomButton from '@components/CustomButton';
import CustomBackgroundImage from '@components/CustomBackgroundImage';
import { lightTheme } from '../styles/index';
import OrText from '../components/OrText';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import SocialMediaButtons from 'components/SocialMediaButtons/SocialMediaButtons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/RootStack';
import { setEncryptedItem } from 'lib';
import { StorageConstants } from 'shared/StorageConstants';
import { useContext } from 'react';
import AppContext from 'shared/AppContext';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>

const Signup = ({ navigation } : SignUpProps) => {

    const { control, handleSubmit, watch } = useForm()
    const password = watch('password')

    const { setIsSignedIn } = useContext(AppContext)

    const signUpWithEmailPassword: SubmitHandler<FieldValues> = async (data) => {
        try {
            const userCredential = await auth().createUserWithEmailAndPassword(data['email'], data['password'])

            console.log('User account created & signed in!', userCredential);
            setIsSignedIn(true)
            navigation.navigate('ChooseCategory')
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                }
    
                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                }
                console.error(error);
        }
    }

    const emailPattern = () => new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')

    const goToSignIn = () => navigation.goBack();

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
                                A new way to boost your &nbsp;
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
                        <CustomInput
                            control={control}
                            name={'re-password'}
                            iconName={'lock'}
                            placeholder={'Confirm Password'}
                            type={'password'}
                            rules={{required: true, validate: (val: string) => {
                                if (watch('password') != val) {
                                  return "Your passwords do no match";
                                }
                              },}}/>
                            
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text
                                    style={{color: '#FFF', fontSize: 18}}>
                                    Has account?  &nbsp;
                                </Text>
                                <Text
                                    style={{color: lightTheme.primaryColor, fontSize: 18}}
                                    onPress={goToSignIn}>
                                    Login!
                                </Text>
                                </View>
                            <CustomButton
                                onPress={handleSubmit(signUpWithEmailPassword)}
                                title={'REGISTER'}
                                color={lightTheme.primaryColor}/>
                        </View>
                    </View>
                    
                    <View>
                        <OrText/>
                        <SocialMediaButtons navigation={navigation}/>
                    </View>
                </ScrollView>
            </CustomBackgroundImage>
        
        </SafeAreaView>
    );
};

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    title: {
        paddingVertical: 50
    }
});