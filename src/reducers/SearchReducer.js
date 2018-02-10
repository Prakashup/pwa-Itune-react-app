export default(state=[], action) => { console.log('inside reducer');
  switch(action.type) {
    case 'get_albums':
    return Object.assign({}, state, {
        'albumlist': action.payload.results
      })
    default :
      return state;
  }
}

//return [...state,{albumlist: payload.results}];
