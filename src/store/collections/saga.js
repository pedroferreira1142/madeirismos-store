import { all, call, put, takeLatest } from "redux-saga/effects";
import client from "store/shopifyAPI";
import {
  fetchAllCollectionsSucess,
  fetchAllCollectionsFailure,
  FETCH_COLLECTIONS_REQUEST,
} from "./actions";

const fetchAllCollectionsShopify = async () =>
  await client.collection.fetchAllWithProducts();

function* fetchCollectionsSaga() {
  try {
    const response = yield call(fetchAllCollectionsShopify);
    yield put(fetchAllCollectionsSucess({ collections: response }));
  } catch (e) {
    yield put(fetchAllCollectionsFailure({ error: e.message }));
  }
}

function* collectionSaga() {
  yield all([takeLatest(FETCH_COLLECTIONS_REQUEST, fetchCollectionsSaga)]);
}

export default collectionSaga;
