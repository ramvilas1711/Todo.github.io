import React from "react";


const Footer = ()=>{

    let date = new Date().getFullYear();

    return(
        <div className="footer-section">
         <h3>© Copyright {date}</h3>
    </div>
    )
}

export default Footer;