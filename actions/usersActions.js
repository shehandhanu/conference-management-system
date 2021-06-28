import axios from 'axios';
import CookieService from '../API/Cookie'

import {
    CLEAR_ERRORS,
    USERLIST_REQUEST,
    USERLIST_SUCCESS,
    USERLIST_FAIL,
} from '../constants/usersConstants';

export const getAllUsers = () => async (dispatch) => {
    try {

        dispatch({
            type: USERLIST_REQUEST,
        })

        const { data } = await axios.get('http://localhost:4000/api/v1/admin/getusers', { withCredentials: true })

        dispatch({
            type: USERLIST_SUCCESS,
            payload: data.users
        })

    } catch (error) {
        dispatch({
            type: USERLIST_FAIL,
            payload: error.response
        })
    }
}

export const updateUserByAdmin = (postdata) => async (dispatch) => {
    try {
        console.log(postdata);
        dispatch({
            type: USERLIST_REQUEST,
        })

        const { datax } = await axios.put('http://localhost:4000/api/v1/admin/updateuser', postdata, { withCredentials: true })

        console.log(datax);

        const { data } = await axios.get('http://localhost:4000/api/v1/admin/getusers', { withCredentials: true })

        dispatch({
            type: USERLIST_SUCCESS,
            payload: data.users
        })

    } catch (error) {
        dispatch({
            type: USERLIST_FAIL,
            payload: error.response
        })
    }
}

//Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}