export type HomeResponse = {
    hottestPodcasts: HottestPodcast[];
    trendingAuthors: TrendingAuthor[];
    newReleases:     HottestPodcast[];
}

export type HottestPodcast = {
    title:             string;
    thumbnailImageURL: string;
    description:       string;
    imageURL:          string;
    category:          string;
    stars:             number;
    durationInSeconds: number;
    author:            Author;
    fileName:          string;
    duration:          string;
    id:                string;
}

export type Author = {
    podcasts:                 string[];
    categories:               string[];
    profileImageURL:          string;
    thumbnailProfileImageURL: string;
    about:                    string;
    name:                     string;
    id:                       string;
}

export type TrendingAuthor = {
    _id:                      string;
    podcasts:                 string[];
    categories:               string;
    profileImageURL:          string;
    thumbnailProfileImageURL: string;
    about:                    string;
    name:                     string;
    id:                       string;
}