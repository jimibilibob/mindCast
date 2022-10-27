import AsyncStorage from '@react-native-async-storage/async-storage';

export const storePrimary = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.log(e)
  }
}

export const storeObject = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log(e)
  }
}

export const getPrimary = async (key: string): Promise<any> => {
  try {
    const value = await AsyncStorage.getItem(key)
    console.log('======> getPrimary', value)
    return value
  } catch(e) {
    console.log(e)
    return null
  }
}


export const getObject = async (key: string): Promise<any> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e)
    return null
  }
}


export const removeItem = AsyncStorage.removeItem;