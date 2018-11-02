import { createReducer } from "redux-act";
import * as a from "../actions/account";

const DEFAULT_STATE = {
  users: undefined,
  me: {},
};

export default createReducer(
  {
    [a.setMe]: (state, user) => ({
      ...state,
      me: user
    }),
  },
  DEFAULT_STATE
);
