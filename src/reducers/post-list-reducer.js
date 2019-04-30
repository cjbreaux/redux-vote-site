export default (state = {}, action) => {
  switch(action.type) {
  case 'ADD_POST':
    const {title, text, id, date} = action;
    let newState = Object.assign({}, state, {
      [id]: {
        title,
        text,
        id,
        date: new Date()
      }
    });
    return newState;
  default:
    return state;
  }
};
