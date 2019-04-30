import React from 'react';
import { connect } from 'react-redux';




function Post(props) {


  function voteUp() {
    const { dispatch } = props;
    const action = {
      type: 'VOTE_UP',
      id: props.id,
      title: props.title,
      text: props.text,
      date: props.date,
      upVotes: props.upVotes,
      downVotes: props.downVotes
    };
    dispatch(action);
  }

  function voteDown() {
    const { dispatch } = props;
    const action = {
      type: 'VOTE_DOWN',
      id: props.id,
      title: props.title,
      text: props.text,
      date: props.date,
      upVotes: props.upVotes,
      downVotes: props.downVotes
    }
    dispatch(action)


  }

  return(
    <div>
      <h1>HALLO</h1>
      <div>
        <h2>title: {props.title}</h2>
        <p>content: {props.text}</p>
        <p>date: {props.date}</p>
        <button onClick={voteUp}>Up Boatz {props.upVotes}</button>
        <button onClick={voteDown}>Down Boatz {props.downVotes}</button>
      </div>
    </div>




  );

}

export default connect()(Post);
