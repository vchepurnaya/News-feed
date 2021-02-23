import { NewFeed } from '../entity/NewFeed';
import { defaultFeeds } from '../assets/variables';

export const getFeeds = (): Array<NewFeed> => {
    let feedsJson = localStorage.getItem('feeds');

    let feeds: Array<NewFeed>;
    if (feedsJson === null) {
        feeds = defaultFeeds;
    } else {
        feeds = JSON.parse(feedsJson);
    }

    return feeds;
};

export const getNewFeedById = (id: number) => {
    let feeds: Array<NewFeed> = getFeeds();
    return feeds.find(newFeed => newFeed.id === id);
};

export const setFeeds = (feeds: Array<NewFeed>) => {
    localStorage.setItem('feeds', JSON.stringify(feeds));
};

export const addNewFeed = (newFeed: NewFeed) => {
    let feeds: Array<NewFeed> = getFeeds();
    feeds.push(newFeed);
    setFeeds(feeds);
};

export const removeNewFeed = (id: number) => {
    let feeds: Array<NewFeed> = getFeeds();
    feeds = feeds.filter(newFeed => newFeed.id !== id);
    setFeeds(feeds);
};
