import { createAction } from 'redux-actions'
import * as actionTypes from './constants'
// defines common action creators for the bento box app. 
// action creators for individual widgets should be defined in the widget, not here. 
export const search = createAction(actionTypes.BENTO_SEARCH)
export const beginSearch = createAction(actionTypes.BENTO_SEARCH_BEGIN)
export const cancelSearch = createAction(actionTypes.BENTO_SEARCH_CANCEL)
export const finishSearch = createAction(actionTypes.BENTO_SEARCH_SUCCESS)
export const failSearch = createAction(actionTypes.BENTO_SEARCH_ERROR)
