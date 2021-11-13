import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(counter+1)
    }
    const decrease = () => {
        setCounter(counter-1)
    }
    return (
    <>
    <div>
        {counter}
    </div>
        <div>
            <button onClick={increase}>Plus</button>&nbsp;<button onClick={decrease}>Minus</button>
        </div>
    </>
    )

}

export default Counter;