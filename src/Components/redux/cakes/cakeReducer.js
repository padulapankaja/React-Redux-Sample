import { BUY_CAKE } from './caketypes'
import { ADD_CAKE } from './caketypes'

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case ADD_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
        default: return state
    }
}

export default cakeReducer;