

import { combineReducers } from 'redux';
import * as common from '../service/common/reducer'

export interface IntRootStore {
  commonReducer: common.IntState
}

export const rootReducer = combineReducers({
  commonReducer: common.default
})

