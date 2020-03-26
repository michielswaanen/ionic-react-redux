import Axios from 'axios';
import Redux from 'redux';

export const fetchUser = () => async (dispatch: Redux.Dispatch) => {
    const result = await Axios.get("https://psopv.herokuapp.com/user/fetch/all");
    dispatch({ type: "FETCH_USER", payload: result.data});
};

export const updateUserName = (data: any) => async (dispatch: Redux.Dispatch) => {
    dispatch({type: "UPDATE_USERNAME", payload: data});
};