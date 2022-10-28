import { createContext } from 'react';
import { Category } from 'screens/ChooseCategory';
import { HottestPodcast } from 'screens/discover/models/HomeResponse';

type AppContextType = {
  isSignedIn: boolean,
  isLoading: boolean,
  isBusy: boolean,
  setIsBusy: (_: boolean) => void,
  hasSelectedCategories: boolean,
  categories: Array<Category>,
  selectedPodCast?: HottestPodcast,
  showPlayerFragment: boolean,
  isPlaying: boolean,
  progressTime: number,
  seekValue: number,
  setIsSignedIn: (_: boolean) => void,
  setIsLoading: (_: boolean) => void,
  setCategories: (_: Array<Category>) => void,
  setHasSelectedCategories: (_: boolean) => void,
  setSelectedPodCast: (_: HottestPodcast) => void
  setShowPlayerFragment: (_: boolean) => void,
  setIsPlaying: (_: boolean) => void,
  setProgressTime: (_: number) => void,
  setSeekValue: (_: number) => void,
}

const defaultValue: AppContextType = {
  isSignedIn: false,
  isLoading: false,
  hasSelectedCategories: false,
  categories: [],
  selectedPodCast: undefined,
  showPlayerFragment: false,
  isPlaying: false,
  isBusy: false,
  progressTime: 0,
  seekValue: 0,
  setIsBusy: (_: boolean) => {},
  setIsSignedIn: (_: boolean) => {},
  setIsLoading: (_: boolean) => {},
  setCategories: (_: Array<Category>) => {},
  setHasSelectedCategories: (_: boolean) => {},
  setSelectedPodCast: (_: HottestPodcast) => {},
  setShowPlayerFragment: (_: boolean) => false,
  setIsPlaying: (_: boolean) => false,
  setProgressTime: (_: number) => {},
  setSeekValue: (_: number) => {}
}

export const AppContext = createContext(defaultValue);

export default AppContext;