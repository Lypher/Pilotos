import { GET_ALL_DRIVERS, GET_DRIVERS_NAME, GET_TEAMS, ORDER } from './actionTypes'

const initialState = {
    allDrivers: [],
    driversByName: [],
    allTeams: [],
    myOrder: []
}

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
                driversByName: action.payload
            }

        case GET_TEAMS:
            return {
                ...state,
                allTeams: action.payload
            }

        case ORDER:
            const orderDrivers = [...state.allDrivers]
            return {
                ...state,
                myOrder:
                    payload === "A"
                        ? orderDrivers.sort((a, b) => a.id - b.id)
                        : orderDrivers.sort((a, b) => b.id - a.id)
            }

        default:
            return { ...state }
    }
}

export default reducer