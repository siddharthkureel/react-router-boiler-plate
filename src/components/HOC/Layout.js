import React from 'react'
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
const Layout = (props) => {
    return (
        <>
            <Header/>
                <div className="container main" >
                    {props.children}
                </div>
            <Footer/>
        </>
    )
}
export default Layout;
