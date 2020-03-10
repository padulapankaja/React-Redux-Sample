
import { BUY_CAKE } from './caketypes'
import { ADD_CAKE } from './caketypes'

export const buyCake = () => {
    return{
        type: BUY_CAKE
    }
}
export const addCake = () => {
    return{
        type: ADD_CAKE
    }
}