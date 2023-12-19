import { GET_ALL_DRIVERS, GET_DRIVERS_NAME, GET_TEAMS } from "./actions";

const initialState = {
  allDrivers: [],
  driversByName: [],
  allTeams: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload,
      };

    case GET_DRIVERS_NAME:
      return {
        ...state,
        driversByName: action.payload,
      };

    case GET_TEAMS:
      return {
        ...state,
        allTeams: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
