import React from 'react'

export const Footer = () => {
    let footerStyle=
    {
        position:"relative",
        width:"100%",
        top:"70vh ",
        

    }
    return (
        <footer className="my-4 text-center bg-dark text-light" style={footerStyle}>
        <p className="my-3">Copyright &copy;
           MyTodosList.com</p> 
        </footer>
    )
}
