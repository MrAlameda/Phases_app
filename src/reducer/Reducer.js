import { Action } from "../actions/Actions";

import quotes from "../db/quotes.json"

let initialState={
    quote:quotes,
    showQuote:[0]
}


let Reducer=(state,action)=>{
    switch(action.type){
        case Action.Random:{
            let num=quotes.length+1;
            let random=Math.floor(Math.random() * num);
            
            return {
                ...state,
                showQuote:random
            }
        }
        default:
            return {
                ...state
            }
    }
}

export { Reducer , initialState }