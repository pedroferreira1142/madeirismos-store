import {createSelector} from 'reselect';

const pending = (state) => state.collections.pending;
const error = (state) => state.collections.error;
const collections = (state) => state.collections.collections;

const getError = createSelector(error, (error) => error);

const getPending = createSelector(pending, (pending) => pending);

const getCollections = createSelector(collections, (collections) => collections);

export const CollectionsSelectors = {
    getError,
    getPending,
    getCollections,
};
