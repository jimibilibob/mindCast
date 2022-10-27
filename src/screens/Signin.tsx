import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import auth from '@react-native-firebase/auth';

import CustomInput from '@components/CustomInput';
import {Text} from '@rneui/themed';
import {View} from 'react-native';
import CustomButton from '@components/CustomButton';
import CustomBackgroundImage from '@components/CustomBackgroundImage';
import { lightTheme } from '../styles/index';
import OrText from '../components/OrText';
import SocialMediaButtons from 'components/SocialMediaButtons/SocialMediaButtons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/RootStack';
import { useContext } from 'react';
import AppContext from 'shared/AppContext';

type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>

const Signin = ({navigation}: SignInProps) => {

    const { control, handleSubmit } = useForm()
    const { setIsSignedIn } = useContext(AppContext)

    const signInWithEmailPassword: SubmitHandler<FieldValues> = async (data) => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(data['email'], data['password'])

            console.log('User signed in!', userCredential);
            setIsSignedIn(true)
            navigation.navigate('ChooseCategory')
        } catch (error: any) {
            console.error(error);
        }
    }

    const emailPattern = () => new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')

    const goToSignUp = () => navigation.navigate('SignUp');

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
                            
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text
                                    style={{color: '#FFF', fontSize: 18}}>
                                    Has account? &nbsp;
                                </Text>
                                <Text
                                    style={{color: lightTheme.primaryColor, fontSize: 18}}
                                    onPress={goToSignUp}>
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
                        <SocialMediaButtons navigation={navigation}/>
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
    }
});