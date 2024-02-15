import React from "react";

const Footer = () => {
    const fStyle = {
        backgroundColor: "lightgrey",
        textAlign: "center",
    };

    const aStyle = {
        display: "inline-block",
        margin: "0 10px",
        textDecoration: "none", // Remove underline from links
        color: "black", // Set link color
    };

    return (
        <footer style={fStyle}>
            <a style={aStyle} href="https://www.linkedin.com/in/tavonnshafie/" target="_blank">LinkedIn</a>
            <a style={aStyle} href="https://github.com/TavonnS" target="_blank">GitHub</a>
            <a style={aStyle} href="/" target="_blank">Profile</a>
        </footer>
    );
}

export default Footer;
