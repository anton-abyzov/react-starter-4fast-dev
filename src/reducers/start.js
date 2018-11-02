import { createReducer } from "redux-act";
import * as a from "../actions/startpage";

const DEFAULT_STATE = {
  registrationEmail: "",
  IsRegistrationOpen: false,
  IsRegistrationSend: false,
  IsForgotPassOpen: false,
  IsForgotPassSend: false,
  error: ""
};

export default createReducer(
  {
    [a.closeForgotPass]: state => ({
      ...state,
      IsForgotPassSend: false,
      IsForgotPassOpen: false
    }),
    [a.receiveForgotPass]: state => ({
      ...state,
      IsForgotPassSend: true
    }),
    [a.openForgotPass]: state => ({
      ...state,
      IsForgotPassOpen: true
    }),

    [a.openRegistration]: state => ({
      ...state,
      IsRegistrationOpen: true
    }),
    [a.closeRegistration]: state => ({
      ...state,
      IsRegistrationSend: false,
      IsRegistrationOpen: false
    }),
    [a.receiveRegisterData]: state => ({
      ...state,
      IsRegistrationSend: true
    }),
    [a.setRegistrationEmail]: (state, email) => ({
      ...state,
      registrationEmail: email
    }),
   
   
  },
  DEFAULT_STATE
);
