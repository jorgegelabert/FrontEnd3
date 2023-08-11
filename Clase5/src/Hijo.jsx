import { useState } from 'react'
import './App.css'

function Hijo(props){
    const [count,setCount] = props
    const [count_arr,setCount_arr] = props
    return(
        <div className="card">
            <button onClick={ ()=> setCount((count) => count + 1)}>
            count is {count}
            </button>
        <p>Acà està renderizando con la desestruracion {count}</p>
        <p>Acà està renderizando con las props {props.count}</p>
        </div>
    )
}

export default Hijo