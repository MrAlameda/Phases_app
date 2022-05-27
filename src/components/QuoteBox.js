import { Action } from "../actions/Actions"
import { Reducer, initialState } from "../reducer/Reducer"

import { useReducer } from "react"


let QuoteBox=()=>{
    
    const [quoState, dispatch] = useReducer(Reducer, initialState)
    let {quote,showQuote}=quoState
    return(
        <section className="card">
            <div className="text">
                <p><em>{quote[showQuote].quote}</em></p>
                <p>{quote[showQuote].author}</p>
            </div>
            <button className="btn" onClick={()=>
                dispatch({
                    type:Action.Random
                })
            }>hola</button>
        </section>
    )
}

export { QuoteBox }