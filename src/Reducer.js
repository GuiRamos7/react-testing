import { combineReducers } from "redux";

import commentsReducer from "./reducers/CommentsReducer";

export default combineReducers({
  comments: commentsReducer,
});
