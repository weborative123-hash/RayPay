// src/components/AppHeader.jsx
import React from "react";

const AppHeader = () => {
    return (
        <div className="appHeader bg-primary text-light">
            <div className="left">
                <a
                    href="#"
                    className="headerButton"
                    data-bs-toggle="modal"
                    data-bs-target="#sidebarPanel"
                >
                    <ion-icon name="menu-outline"></ion-icon>
                </a>
            </div>

            <div className="pageTitle">
                {/* <img src="assets/img/logo.png" alt="logo" className="logo" /> */}
                RayPay
            </div>

            <div className="right">
                <a className="headerButton" href="/wallet">
                    <ion-icon class="icon" name="wallet-outline"></ion-icon>
                </a>
            </div>
        </div>
        
    );
};

export default AppHeader;
