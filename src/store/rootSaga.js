import { all } from 'redux-saga/effects';
/** the commented code is a sample of how it would look like */

// import { timeLineSagas } from '../components/timeLine';

export default function* rootSaga() {
    yield all([
        // timeLineSagas(),
    ]);
}
