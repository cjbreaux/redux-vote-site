import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';




function PostList(props) {
 console.log(props);


  return(
    <div>
      {Object.keys(props.postList).map(function(postId){
        let post = props.postList[postId];
        return <Post title={post.title}
          text={post.text}
          postId={post.id}
          date={post.date}
          key={postId} />;
      })}
    </div>

  );

}

const mapStateToProps = state => {
  return {
    postList: state
  }
}



export default connect(mapStateToProps)(PostList);
