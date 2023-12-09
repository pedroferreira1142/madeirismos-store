export const FETCH_COLLECTIONS_REQUEST = "FETCH_COLLECTIONS_REQUEST";
export const FETCH_COLLECTIONS_SUCESS = "FETCH_COLLECTIONS_SUCESS";
export const FETCH_COLLECTIONS_FAILURE = "FETCH_COLLECTIONS_FAILURE";

export const fetchAllCollectionsRequest = () => ({
  type: FETCH_COLLECTIONS_REQUEST,
});

export const fetchAllCollectionsSucess = (payload) => ({
  type: FETCH_COLLECTIONS_SUCESS,
  payload,
});

export const fetchAllCollectionsFailure = (payload) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload,
});
