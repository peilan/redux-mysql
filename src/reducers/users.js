import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS
} from '../constants/users'

const initialState = {
  source: [],
  fetching: false
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, fetching: true }

    case GET_USERS_SUCCESS:
      return { ...state, source: action.payload, fetching: false }

    default:
      return state;
  }

}