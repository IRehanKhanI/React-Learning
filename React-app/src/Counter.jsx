import React, { useState } from "react"
import "./Counter.css"

function Counter() {
    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0)

    return (
        <div className="counter-root">
            <div className="counter-card">
                <div className="counter-value">Count: <span className="count-number">{count}</span></div>

                <div className="counter-controls">
                    <button className="btn btn-increment" onClick={increment}>Increment</button>
                    <button className="btn btn-decrement" onClick={decrement}>Decrement</button>
                    <button className="btn btn-reset" onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Counter