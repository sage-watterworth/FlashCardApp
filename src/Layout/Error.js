import React from "react"
//set error message
export const Error = ({error, children}) => (
    <main className="container">
        <p style={{ color: "red"}}>ERROR: {error.message}</p>
        {children}
    </main>
)

export default Error;
