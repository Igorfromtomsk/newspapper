import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class PostsPageComponent extends Component {
  componentDidMount() {
  }

  render() {
    const {posts} = this.props;

    return (
      <>
      <h1>posts page</h1>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link
              to={{
                pathname: `/post/${post.id}`,
                state: post
              }}
            >{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
    )
  }
}

const mapProps = state => {
  return {
    posts: state.PostsReducer.objects
  }
};
const mapAction = {};

const PostsPage = connect(
  mapProps,
  mapAction
)(PostsPageComponent);

export default PostsPage;