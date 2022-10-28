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
    return value
  } catch(e) {
    console.log(e)
    return null
  }
}

export const getObject = async (key: string): Promise<any> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e)
    return null
  }
}

export const removeItem = AsyncStorage.removeItem;

export const getTimesLabel = (secs: number) => {
  // var sec_num = parseInt(secs, 10)
  var hours   = Math.floor(secs / 3600)
  var minutes = Math.floor(secs / 60) % 60
  var seconds = secs % 60

  return [hours,minutes,seconds]
      .map(v => v < 10 ? "0" + v : v)
      .filter((v,i) => v !== "00" || i > 0)
      .join(":")
}