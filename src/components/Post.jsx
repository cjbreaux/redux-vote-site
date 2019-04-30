import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';




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
    };
    dispatch(action);


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
Post.propTypes = {
  dispatch: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  upVotes: PropTypes.number,
  downVotes: PropTypes.number

};

export default connect()(Post);
