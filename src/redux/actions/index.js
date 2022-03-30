import { getUser, addUser, updateUser } from "../../services/index";

export const GET_USER_LOAD = "[USER] GET_USER_LOAD";
export const GET_USER = "[USER] GET_USER";
export const USER_ERROR = "[USER] USER_ERROR";
export const ADD_USER = "[USER] ADD_USER";
export const UPDATE_USER = "[USER] UPDATE_USER";

export function handleGetUser() {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_USER_LOAD,
        payload: true,
      });
      const response = await getUser();
      dispatch({
        type: GET_USER,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: { errorMessage: error.message },
      });
    }
  };
}

export function handleAddUser(value) {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_USER_LOAD,
        payload: true,
      });
      const response = await addUser(value);
      dispatch({
        type: ADD_USER,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: { errorMessage: error.message },
      });
    }
  };
}

export function handleUpdateUser(value) {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_USER_LOAD,
        payload: true,
      });
      const response = await updateUser(value);
      dispatch({
        type: UPDATE_USER,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: USER_ERROR,
        payload: { errorMessage: error.message },
      });
    }
  };
}
