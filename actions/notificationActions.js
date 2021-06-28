import axios from 'axios';
import CookieService from '../API/Cookie'

import {
    NOTIFICATION_REQUEST,
    NOTIFICATION_SUCCESS,
    NOTIFICATION_FAIL,
    CLEAR_ERRORS,
} from '../constants/notificationConstants';

export const getNotification = () => async (dispatch) => {
    try {

        dispatch({
            type: NOTIFICATION_REQUEST,
            payload: []
        })

        const { data } = await axios.get('http://localhost:4000/api/v1/notifications', { withCredentials: true })

        dispatch({
            type: NOTIFICATION_SUCCESS,
            payload: data.outNotifications
        })


    } catch (error) {
        dispatch({
            type: NOTIFICATION_FAIL,
            payload: error.response
        })
    }
}

export const removeNotifications = (id) => async (dispatch) => {
    try {

        dispatch({
            type: NOTIFICATION_REQUEST,
            payload: []
        })

        const { datax } = await axios.get('http://localhost:4000/api/v1/marknotification/' + id, { withCredentials: true })

        const { data } = await axios.get('http://localhost:4000/api/v1/notifications', { withCredentials: true })

        dispatch({
            type: NOTIFICATION_SUCCESS,
            payload: data.outNotifications
        })


    } catch (error) {
        dispatch({
            type: NOTIFICATION_FAIL,
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