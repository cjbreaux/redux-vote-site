
export default (state = {}, action) => {
 switch(action.type) {
   case 'ADD_POST':
   const {title, text, id} = action;
   let newState = Object.assign({}, state, {
     [id]: {
       title,
       text,
       id
     }
   });
   return newState;
  default:
  return state;
 }
};
