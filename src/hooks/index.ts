import { getPrimary, getObject } from '../lib';
import { StorageConstants } from 'shared/StorageConstants';
import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { CATEGORIES, Category } from 'screens/ChooseCategory';

export const useApp = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState(Array<Category>);
  const [hasSelectedCategories, setHasSelectedCategories] = useState(false);
  const [showPlayerFragment, setShowPlayerFragment] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPodCast, setSelectedPodCast] = useState(undefined);
  const [progressTime, setProgressTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);

  const loadApplication = async () => {
    try {
      const hasSelectedCategories = (await getPrimary(StorageConstants.hasSelectedCategories)) as Boolean;
      const selectedCategories = (await getObject(StorageConstants.categories)) as Array<Category>;
      // console.log('categories', selectedCategories)
      // console.log('hasSelectedCategories', hasSelectedCategories)

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
    hasSelectedCategories,
    setHasSelectedCategories,
    categories,
    setCategories,
    showPlayerFragment,
    setShowPlayerFragment,
    selectedPodCast,
    setSelectedPodCast,
    isPlaying,
    setIsPlaying,
    progressTime,
    setProgressTime,
    seekValue,
    setSeekValue
  };
}
