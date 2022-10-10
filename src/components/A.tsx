import React from "react";
import { AppContext } from "../App";

export default React.memo(() => {
    React.useEffect(() => { console.log('Component A rerendering...') })

    const { states } = React.useContext(AppContext);

    const add = () => {
        states.setNumber1(states.number1 + 1)
    }

    return (
        <>
            <h1>Component A</h1>
            <button onClick={add}>add 1 to number1</button>
        </>
    )
})