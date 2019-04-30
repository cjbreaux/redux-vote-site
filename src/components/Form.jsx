import React from 'react';
import { v4 } from 'UUID';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Form(props) {
  let _postTitle = null;
  let _postText = null;

  function handleFormSubmission(e) {
    const {dispatch} = props;
    e.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      title: _postTitle.value,
      text: _postText.value
    };
    dispatch(action);
    _postTitle.value = '';
    _postText.value = '';
  }
  return(
    <div>
      <form onSubmit={handleFormSubmission}>

        <h3>Title: </h3>
        <input type="text" ref={(input)=>{_postTitle = input;}}/>
        <p>Post Text: </p>
        <textarea  ref={(textarea)=>{_postText = textarea;}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

Form.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Form);
