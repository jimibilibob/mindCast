import EncryptedStorage from 'react-native-encrypted-storage';

export async function getEncryptedItem<T>(key: string): Promise<T | null> {
  const stringValue = await EncryptedStorage.getItem(key);

  if (!stringValue) {
    return null;
  }

  const value = JSON.parse(stringValue);
  return value as T;
}

export const setEncryptedItem = async (key: string, value: any): Promise<void> => {
  if (value === null || value === undefined) {
    return;
  }
  
  let encryptedValue = value.toString();

  if (typeof value === 'object') {
    encryptedValue = JSON.stringify(value);
  }

  await EncryptedStorage.setItem(key, encryptedValue);
}

export const removeEncryptedItem = EncryptedStorage.removeItem;