import React from "react";
import { AppContext } from "../App";

export default React.memo(() => {
    React.useEffect(() => { console.log('Component B rerendering...') })

    const { states } = React.useContext(AppContext);

    return (
        <>
            <h1>Component B</h1>
        </>
    )
})