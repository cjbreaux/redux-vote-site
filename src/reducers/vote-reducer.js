// export default (state = {}, action) => {
//   let newState;
//   let newStateSlice;
//   switch(action.type) {
//     case 'VOTE_UP':
//     const {title, text, id, upVotes, downVotes, date} = action;
//       newStateSlice = Object.assign({}, state[action.id],
//         {
//           upVotes: state[action.id].upVotes + 1,
//         });
//       newState = Object.assign({}, state, {
//         [action.id]: newStateSlice
//       });
//       return newState;
//     case 'VOTE_DOWN':
//       newStateSlice = Object.assign({}, state[action.id],
//         {
//           downVotes: state[action.id].downVotes + 1,
//         });
//       newState = Object.assign({}, state, {
//         [action.id]: newStateSlice
//       });
//     return newState;
//   default:
//     return state;
//   }
// };
