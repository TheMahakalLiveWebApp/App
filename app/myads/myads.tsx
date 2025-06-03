"use client"

import "./myads.scss"
import { useContext } from "react";

import Link from "next/link";

const MyAd = () => {
    return (
        <>
        <div className="my-ad-container">
            <div className="my-ad-message">
                🚀 Want a stunning website like this or need help running impactful ads?
            </div>
            <Link href="./start-my-ad" className="my-ad-button">
                
                Contact Me
            </Link>
        </div>
        </>
    );
};

export default MyAd;