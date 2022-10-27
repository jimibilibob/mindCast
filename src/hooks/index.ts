import { getEncryptedItem } from '../lib';
import { StorageConstants } from 'shared/StorageConstants';
import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

export const useApp = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [hasChooseCategories, setHasChooseCategories] = useState(false);

  const loadApplication = async () => {
    try {
      const hasChooseCategories = await getEncryptedItem(StorageConstants.hasChooseCategories);
      console.log('hasChooseCategories', hasChooseCategories)

      if (auth().currentUser) {
        setIsSignedIn(true);
      }
    
      if (hasChooseCategories) {
        setHasChooseCategories(true)
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  useEffect(() => {
    loadApplication();
  }, []);

  return {
    isSignedIn,
    setIsSignedIn,
    isLoading,
    setIsLoading,
    isBusy,
    setIsBusy,
    hasChooseCategories,
    setHasChooseCategories
  };
}
