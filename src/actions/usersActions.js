import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS
} from '../constants/users'

import {ajax} from 'jquery'

export function getUsers() {

  return (dispatch) => {
    dispatch({
      type: GET_USERS_REQUEST
    })
  
    ajax({
      type: 'get',
      url: 'users'
    }).then((data) => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: data
      })
    }, (error) => {
      console.error(error)
    })
  }
}