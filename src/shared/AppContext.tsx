import { createContext } from 'react';
import { Category } from 'screens/ChooseCategory';

type AppContextType = {
  isSignedIn: boolean,
  isLoading: boolean,
  hasSelectedCategories: boolean,
  categories: Array<Category>,
  setIsSignedIn: (_: boolean) => void,
  setIsLoading: (_: boolean) => void,
  setCategories: (_: Array<Category>) => void,
  setHasSelectedCategories: (_: boolean) => void,
  isBusy: boolean,
  setIsBusy: (_: boolean) => void,
}

const defaultValue: AppContextType = {
  isSignedIn: false,
  isLoading: false,
  hasSelectedCategories: false,
  categories: [],
  setIsSignedIn: (_: boolean) => {},
  setIsLoading: (_: boolean) => {},
  setCategories: (_: Array<Category>) => {},
  setHasSelectedCategories: (_: boolean) => {},
  isBusy: false,
  setIsBusy: (_: boolean) => {},
}

export const AppContext = createContext(defaultValue);

export default AppContext;