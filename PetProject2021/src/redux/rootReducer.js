import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { messageReducer } from "./messageReduces";
import { postReducer } from "./postsReducer";
export const rootReducer = combineReducers({
  app: appReducer,
  sendingMessages: messageReducer,
  posts: postReducer,
});
