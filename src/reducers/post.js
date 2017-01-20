
const initialState = {
  postId: 1,
  fetching: false,
  post: {
    title: null,
    body: null
  },
  comments: [],
  warningVisibility: false
};

const postInfo = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_POST':
      return {
        ...state,
        fetching: true
      };
    case 'RECEIVE_POST':
      return {
        ...state,
        fetching: false,
        postId: action.post.id,
        post: {
          title: action.post.title,
          body: action.post.body
        },
        comments: [...action.comments]
      };
    case 'RECEIVE_POST_FAILED':
      return {
        ...state,
        fetching: false,
        warningVisibility: true
      }
    case 'HIDE_WARNING':
      return {
        ...state,
        warningVisibility: false
      }
    default:
      return state;
  }
};

export default postInfo;
