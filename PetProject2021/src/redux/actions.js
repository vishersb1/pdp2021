import {
  HIDE_LOADER,
  SHOW_LOADER,
  FETCH_POSTS,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "./types";

import env from "react-dotenv";

import axios from "axios";

export function openModal() {
  return {
    type: OPEN_MODAL,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

export function showPreloader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hidePreloader() {
  return {
    type: HIDE_LOADER,
  };
}

export function addSubscriber(body) {
  return async (dispatch) => {
    try {
      await axios.post(`${env.NOTIFY_SERVICE_URL}/addUser`, body);
    } catch (e) {
      console.log(`error`, e);
    }
  };
}

export function fetchNews() {
  return async (dispatch) => {
    dispatch(showPreloader());
    const response = await fetch(`${env.POST_SERVICE_URL}/getPosts`);
    const json = await response.json();
    setTimeout(() => {
      dispatch({ type: FETCH_POSTS, payload: json });
      dispatch(hidePreloader());
    }, 2000);
  };
}

export function addPost(post) {
  return async (dispatch) => {
    dispatch(showPreloader());
    await axios.post(`${env.POST_SERVICE_URL}/addPost`, post);
    setTimeout(() => {
      dispatch(hidePreloader());
    }, 2000);
  };
}
