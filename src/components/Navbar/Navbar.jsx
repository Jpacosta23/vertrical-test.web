import React from "react";
import { Navbar } from "react-bootstrap";

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        src="https://vertrical.com/_next/image?url=%2Flogo.svg&w=256&q=75"
                        height="40px"
                        className="image-logo"
                    />
                </Navbar.Brand>
            </Navbar>
        </>
    );
};

export default Navigation;
