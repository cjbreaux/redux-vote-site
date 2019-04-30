import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';




function PostList(props) {
 console.log(props);


  return(
    <Post />

  );

}

const mapStateToProps = state => {
  return {
    abcPostList: state
  }
}



export default connect(mapStateToProps)(PostList);
