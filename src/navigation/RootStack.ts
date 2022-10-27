import { HottestPodcast } from "screens/discover/models/HomeResponse"


export type RootStackParamList = {
    SignIn: undefined,
    SignUp: undefined,
    ChooseCategory: undefined,
    Discover: undefined,
    Search: undefined,
    Library: undefined,
    Settings: undefined,
    PodcastDetail: HottestPodcast,
    PlayerDetail: HottestPodcast,
    DiscoverStack: undefined
}