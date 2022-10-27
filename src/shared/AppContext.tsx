import { createContext } from 'react';

type AppContextType = {
  isSignedIn: boolean,
  isLoading: boolean,
  hasChooseCategories: boolean,
  setIsSignedIn: (_: boolean) => void,
  setIsLoading: (_: boolean) => void,
  setHasChooseCategories: (_: boolean) => void,
  isBusy: boolean,
  setIsBusy: (_: boolean) => void,
}

const defaultValue: AppContextType = {
  isSignedIn: false,
  isLoading: false,
  hasChooseCategories: false,
  setIsSignedIn: (_: boolean) => {},
  setIsLoading: (_: boolean) => {},
  setHasChooseCategories: (_: boolean) => {},
  isBusy: false,
  setIsBusy: (_: boolean) => {},
}

export const AppContext = createContext(defaultValue);

export default AppContext;