
export const fetchPost = (postId) => ({
  type: 'FETCH_POST',
  postId,
});
export const requestPost = () => ({
  type: 'REQUEST_POST',
});
export const receivePost = (post, comments) => ({
  type: 'RECEIVE_POST',
  post,
  comments,
});

export const receivePostFailed = () => ({
  type: 'RECEIVE_POST_FAILED'
});

export const hideWarning = () => ({
  type: 'HIDE_WARNING'
});