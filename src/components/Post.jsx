import React from 'react';




function Post(props) {
  return(
    <div>
      <h1>HALLO</h1>
      <div>
        <h2>title: {props.title}</h2>
        <p>content: {props.text}</p>
        <p>date: {props.date}</p>
      </div>
    </div>




  );

}

export default Post;
