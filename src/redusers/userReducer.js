import ACTION_TYPES from '../actions//actionTypes'
const initState = {
 users: [],
 error: null,
 isFetching: false
}



export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER_REQUEST: {

    }
    case ACTION_TYPES.CREATE_USER_SUCCESS: {

    }
    case ACTION_TYPES.CREATE_USER_ERROR: {
   
    }
    default: {
      return state
    }
  }
}

export default userReducer;