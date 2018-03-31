import * as actionType from '../actions/ActionType';

const counterReducer = (state = 0, action) => {
    let newState;
    switch(action.type){
        case actionType.ADD_COUNTER:
            console.log("state add: ",state)
            console.log("action add: ",action)
            return newState = state + action.payload;
        case actionType.REMOVE_COUNTER:
            console.log("state remove: ",state)
            console.log("action remove: ",action)                    
            return newState = state - action.payload;
        default:
            console.log("state default: ",state)
            console.log("action default: ",action)            
            return state
    }
}

export default counterReducer;