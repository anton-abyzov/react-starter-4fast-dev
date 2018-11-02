import { put } from "redux-saga/effects";

import { USERS, USER, ME, GROUP_USERS } from "../constants/api";

import { setUsers, setMe } from "../actions/account";
import * as a from '../actions/account'

import { callHttp } from "../utils/api";
import { get, patch, del, post, delBody } from "../utils/httpUtil";
import { toastr } from 'react-redux-toastr';
import * as messageTypes from '../constants/messageTypes';


export function* getMe() {
  const { user } = yield callHttp(get, ME);
  yield put(setMe(user));
}

export function* getUsers() {
  const allUsers = yield callHttp(get, USERS);

  var userList = Object.values(allUsers);

  yield put(setUsers({ users: Object.values(userList) }));
}

export function* patchUser({ payload }) {
  const { user } = payload;

  try {
    yield callHttp(patch, USER(user.id), user);
    yield put(a.getUsers());
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message));
  }
}

export function* deleteUser({ payload }) {
  try {
    const { id } = payload;
    yield callHttp(del, USER(id), "");
    yield put(a.getUsers());
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message));
  }

}

export function* addUser({ payload }) {
  const { user } = payload;
  try {
    yield callHttp(post, USERS, user);
    yield put(a.getUsers());
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message));
  }
}

export function* patchMany({ payload }) {
  const { users } = payload;
  try {
    yield callHttp(patch, GROUP_USERS, users);
    yield put(a.getUsers());
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message));
  }
}

export function* deleteMany({ payload }) {
  const { userIds } = payload;
  try {
    yield callHttp(delBody, GROUP_USERS, userIds);
    yield put(a.getUsers());
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message));
  }
}
