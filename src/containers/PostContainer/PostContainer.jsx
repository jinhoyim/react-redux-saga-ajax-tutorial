import React, {Component} from 'react';
// import { bindActionCreators } from 'redux';
import { PostWrapper, Navigator, Post, Warning } from '../../components';
import { connect } from 'react-redux';
import {fetchPost} from '../../actions/post';

class PostContainer extends Component {
  handleNavigatorClick = (type) => {
    const postId = this.props.postId;
    if(type === 'NEXT'){
      this.props.fetchPost(postId+1);
    } else {
      this.props.fetchPost(postId-1);
    }
  };

  componentDidMount(){
    this.props.fetchPost(1);
  }

  render(){
    const { postId, fetching, post, comments, warningVisibility } = this.props;
    return (
      <PostWrapper>
        <Navigator
          postId={postId}
          disabled={fetching}
          onClick={this.handleNavigatorClick}
        />
        <Post 
          postId={postId}
          title={post.title}
          body={post.body}
          comments={comments}
        />
        <Warning visible={warningVisibility} message="That post does not exist"/>
      </PostWrapper>
    );
  }
}

// export default PostContainer;
const mapStateToProps = (state) => {
  return {
    postId: state.postInfo.postId,
    fetching: state.postInfo.fetching,
    post: {
      title: state.postInfo.post.title,
      body: state.postInfo.post.body
    },
    comments: [...state.postInfo.comments],
    warningVisibility: state.postInfo.warningVisibility
  }
};

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators({
//     fetchPostInfo: actions.fetchPost
//   }, dispatch)
// });

export default connect(mapStateToProps, {
  fetchPost
})(PostContainer);
