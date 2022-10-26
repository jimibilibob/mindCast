import { getEncryptedItem } from '../lib';
import { StorageConstants } from 'shared/StorageConstants';
import { useState, useEffect } from 'react';

export const useApp = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBusy, setIsBusy] = useState(false);

  const loadApplication = async () => {
    const user = await getEncryptedItem(StorageConstants.user);

    if (user) {
      setIsSignedIn(true);
    }
  }

  useEffect(() => {
    loadApplication();
  }, []);

  return { isSignedIn, setIsSignedIn, isLoading, setIsLoading, isBusy, setIsBusy };
}
