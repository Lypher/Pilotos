import { GET_ALL_DRIVERS, GET_DRIVERS_NAME, GET_TEAMS } from './actionTypes'
import axios from 'axios'
export const URL = 'http://localhost:3001'

export const getAllDrivers = () => {
    return async (dispatch) => {
        const response = await axios(`${URL}/drivers`)
        return dispatch({
            type: GET_ALL_DRIVERS,
            payload: response.data
        })
    }
}

export const getDriversByName = (name) => {
    return async (dispatch) => {
        const response = await axios(`${URL}/drivers?name=${name}`)
        return dispatch({
            type: GET_DRIVERS_NAME,
            payload: response.data
        })
    }
}

export const getTeams = () => {
    return async (dispatch) => {
        const response = await axios(`${URL}/teams`)
        return dispatch({
            type: GET_TEAMS,
            payload: response.data
        })
    }
}