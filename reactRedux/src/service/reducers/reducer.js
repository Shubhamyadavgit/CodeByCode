import {ADD_TO_CART} from '../constants'
const initialState ={
    cartData:[]
}
export default function cardItems(state=initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            console.log("reducer : ",action);
            
            return{
                ...state,
                cartData : action.data
            }
                break;
        default : 
        return state
    }
}