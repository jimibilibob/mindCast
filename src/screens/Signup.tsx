import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomInput from '@components/CustomInput';
import {Button, Text} from '@rneui/themed';
import {View} from 'react-native';
import CustomButton from '@components/CustomButton';
import CustomBackgroundImage from '@components/CustomBackgroundImage';
import { lightTheme } from '../styles/index';
import OrText from '../components/OrText';

const Signup = () => {

  return (
    <SafeAreaView>
      <CustomBackgroundImage
        uri='https://s3-sa-east-1.amazonaws.com/mind-cast/images/background-image.jpg'>
            <View style={styles.container}>
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
                        iconName={'mail'}
                        placeholder={'E-mail'}/>
                    <CustomInput
                        iconName={'lock'}
                        placeholder={'Password'}
                        type={'password'}/>
                    <CustomInput
                        iconName={'lock'}
                        placeholder={'Confirm Password'}
                        type={'password'}/>
                        
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text
                                style={{color: '#FFF', fontSize: 18}}>
                                Has account?
                            </Text>
                            <Text
                                style={{color: lightTheme.primaryColor, fontSize: 18}}>
                                Login!
                            </Text>
                            </View>
                        <CustomButton
                        title={'REGISTER'}
                        color={lightTheme.primaryColor}/>
                    </View>
                </View>
                
                <View>
                    <OrText/>
                    <CustomButton
                        title={'Register with'}
                        color={lightTheme.facebookColor}
                        iconName={'facebook-official'}
                        iconColor={'#fff'}
                        style={styles.socialMediaButtons}/>
                    <CustomButton
                        title={'Register with'}
                        color={lightTheme.googleColor}
                        iconName={'google'}
                        iconColor={'#fff'}
                        style={styles.socialMediaButtons}/>
                </View>
            </View>
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
    },
    socialMediaButtons: {
        marginBottom: 15
    }
});