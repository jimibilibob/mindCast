import { getPrimary, getObject } from '../lib';
import { StorageConstants } from 'shared/StorageConstants';
import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { CATEGORIES, Category } from 'screens/ChooseCategory';

export const useApp = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [categories, setCategories] = useState(Array<Category>);
  const [hasSelectedCategories, setHasSelectedCategories] = useState(false);

  const loadApplication = async () => {
    try {
      const hasSelectedCategories = (await getPrimary(StorageConstants.hasSelectedCategories)) as Boolean;
      const selectedCategories = (await getObject(StorageConstants.categories)) as Array<Category>;
      console.log('categories', selectedCategories)
      console.log('hasSelectedCategories', hasSelectedCategories)

      if (auth().currentUser) {
        setIsSignedIn(true);
      }
    
      setCategories(selectedCategories ?? CATEGORIES)
    
      if (hasSelectedCategories) {
        setHasSelectedCategories(true)
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
    hasSelectedCategories,
    setHasSelectedCategories,
    categories,
    setCategories
  };
}
