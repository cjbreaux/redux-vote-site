import React from 'react';
import { v4 } from 'UUID';

function Form() {
  let _postTitle = null;
  let _postText = null;

  function handleFormSubmission(e) {
    e.preventDefault();
    console.log('submitted');
    console.log(_postTitle.value);
    console.log(_postText.value);
    console.log(v4());
    _postTitle.value = '';
    _postText.value = '';
  }
  return(
    <div>
      <form onSubmit={handleFormSubmission}>
        <h3>Title: </h3>
        <input type="text" ref={(input)=>{_postTitle = input;}}/>
        <p>Post Text: </p>
        <input type="text" ref={(input)=>{_postText = input;}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
