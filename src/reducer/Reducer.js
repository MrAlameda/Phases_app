import { Action } from "../actions/Actions";

import quotes from "../db/quotes.json"

let initialState={
    quote:quotes,
    showQuote:[0],
    color:[199]
}


let Reducer=(state,action)=>{
    switch(action.type){
        case Action.Random:{
            let num=quotes.length+1;
            let numRandom=Math.floor(Math.random() * num);
            let colorRandom=Math.floor(Math.random() * 99)+100;

            return {
                ...state,
                showQuote:numRandom,
                color:colorRandom
            }
        }
        default:
            return {
                ...state,
                showQuote:state.showQuote
            }
    }
}

export { Reducer , initialState }