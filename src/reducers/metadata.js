import { createReducer } from 'redux-act'
import * as a from '../actions/metadata'

const DEFAULT_STATE = {
  countries: [],
  titles: []
}

export default createReducer(
  {
    [a.setCountries]: (state, { countries }) => ({
      ...state,
      countries: countries,
    }),
    [a.setTitles]: (state, { titles }) => {

      return {
        ...state,
        titles: titles,
      }
    }
  },
  DEFAULT_STATE
)