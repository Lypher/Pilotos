import {
  GET_ALL_DRIVERS,
  GET_DRIVERS_NAME,
  GET_TEAMS,
  ORDER,
  GET_DRIVERS_NAME_EMPTY,
} from "./actionTypes";
import axios from "axios";
export const URL = "http://localhost:3001";

export const getAllDrivers = () => {
  return async (dispatch) => {
    const response = await axios(`${URL}/drivers`);
    return dispatch({
      type: GET_ALL_DRIVERS,
      payload: response.data,
    });
  };
};

export const getDriversByName = (name) => {
  return async (dispatch) => {
    if (name === "") {
      return dispatch({
        type: GET_DRIVERS_NAME_EMPTY,
        payload: [],
      });
    }
    try {
      const response = await axios(`${URL}/drivers?name=${name}`);
      dispatch({
        type: GET_DRIVERS_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al obtener conductores por nombre:", error);
    }
  };
};

export const getTeams = () => {
  return async (dispatch) => {
    const response = await axios(`${URL}/teams`);
    return dispatch({
      type: GET_TEAMS,
      payload: response.data,
    });
  };
};

export const order = (order) => {
  return { type: ORDER, payload: order };
};
