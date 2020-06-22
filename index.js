
const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const ADD_CAKE = 'ADD_CAKE'

function buyCake() {

    return {
        type: BUY_CAKE,
        info: 'substract redux action '
    }

}

function addCake() {

    return {
        type: ADD_CAKE,
        info: 'addd redux action '
    }

}

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
// store.dispatch(addCake())
// store.dispatch(addCake())
// store.dispatch(addCake())
unsubscribe()