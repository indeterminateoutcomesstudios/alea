// @flow
import type { Saga } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects'
import { hydratePreferences } from '../../actions'
import { APP_FINISHED_LOADING, USER_LOGGED_IN } from '../../actions/types'
import getPreferences from '../../firebase/getCurrentUserPreferences'

export default function* loadPreferences(): Saga<void> {
  while (true) {
    yield take(USER_LOGGED_IN)
    const prefs = yield call(getPreferences)
    yield put(hydratePreferences(prefs))
    yield put({ type: APP_FINISHED_LOADING })
  }
}
