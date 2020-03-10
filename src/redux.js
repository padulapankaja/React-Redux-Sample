const redux = require('redux')
const createstore = redux.createStore
const BUY_CAKE = "BUY_CAKE"

//action
function buyCake() {
    return {
        type: BUY_CAKE,
        infor: 'First redux action'
    }
}

//(previousState, action) => newState
const initialState = {
    numOfCakes: 10
}

//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, //create copy of state object
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}


const store = createstore(reducer)
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => console.log("Update State", store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()