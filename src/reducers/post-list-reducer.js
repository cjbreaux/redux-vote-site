export default (state = {}, action) => {
  let newState;
  let newStateSlice;
  switch(action.type) {
  case 'ADD_POST':
    const {title, text, id, upVotes, downVotes, date} = action;
    newState = Object.assign({}, state, {
      [id]: {
        title,
        text,
        id,
        upVotes: 0,
        downVotes: 0,
        date: new Date().toString()
      }
    });
    return newState;
  case 'VOTE_UP':
    newStateSlice = Object.assign({}, state[action.id],
      {
        upVotes: state[action.id].upVotes + 1,
      });
    newState = Object.assign({}, state, {
      [action.id]: newStateSlice
    })
    console.log(newStateSlice)
    return newState;
  default:
    return state;
  }
};
