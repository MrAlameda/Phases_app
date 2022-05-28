import { Action } from "../actions/Actions"
import { Reducer, initialState } from "../reducer/Reducer"

import { useReducer } from "react"


let QuoteBox=()=>{
    
    const [quoState, dispatch] = useReducer(Reducer, initialState)
    
    let {quote,showQuote,color}=quoState
    
    return(
        <section className="cardContent"
            style={{
                backgroundColor:`#${color}`
            }}
        >
            <div className="card">
            <div className="text" 
            style={{
                color:`#${color}`
            }}>
                <p><em>'{quote[showQuote].quote}'</em></p>
                <p>-{quote[showQuote].author}</p>
            </div>
            <button 
                className="btn" 
                onClick={()=>
                dispatch({
                    type:Action.Random
                })}
                style={{
                    backgroundColor:`#${color}`
                }}
                >Next</button>
            </div>
        </section>
    )
}

export { QuoteBox }