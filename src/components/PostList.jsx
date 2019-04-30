import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';




function PostList(props) {




  return(
    <div>
      {Object.keys(props.postList).map(function(postId){
        let post = props.postList[postId];
        return <Post title={post.title}
          text={post.text}
          id={post.id}
          date={post.date}
          upVotes={post.upVotes}
          downVotes={post.downVotes}
          key={postId} />;
      })}
    </div>

  );

}

const mapStateToProps = state => {
  return {
    postList: state
  };
};



export default connect(mapStateToProps)(PostList);
