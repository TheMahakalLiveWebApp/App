"use client";

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGifts,
    faBrain,
    faUserShield,
    faScaleBalanced,
    faTrophy,
    faHeart,
    faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import GuideHero from "../../Assests/GuideHero.jpg";
import "./Home.scss";

// Feature and Reason data arrays
const features = [
    {
        icon: faBrain,
        title: "Skill-Based Gameplay",
        desc: "Strategize and build the best fantasy team based on real match performances.",
        color: "#dc3546"
    },
    {
        icon: faGifts,
        title: "Completely Free",
        desc: "Enjoy fantasy cricket without any financial risk—no deposits or withdrawals.",
        color: "#29AB87"
    },
    {
        icon: faUserShield,
        title: "Safe & Secure",
        desc: "Our platform ensures a fair, transparent, and safe gaming environment.",
        color: "#60a5fa"
    },
    {
        icon: faScaleBalanced,
        title: "100% Legal",
        desc: "We comply with Indian laws governing fantasy sports for a worry-free experience.", 
        color: "#800000"
    }
];

const reasons = [
    {
        icon: faTrophy,
        title: "Competitive & Fun",
        desc: "Challenge your cricket knowledge against other players.",
        color: "#60a5fa"
    },
    {
        icon: faHeart,
        title: "Passionate Community",
        desc: "Join thousands of cricket fans enjoying fantasy sports.", 
        color: "#dc3546"
    },
    {
        icon: faScaleBalanced,
        title: "Fair Play Policy",
        desc: "Strict anti-cheating measures ensure a level playing field.",
        color: "#800000"
    },
    {
        icon: faThumbsUp,
        title: "Trusted & Reliable",
        desc: "Built on a secure platform with user-friendly features.",
        color: "#29AB87"
    }
];

const GuideSection = () => (
    <div className="guide-sec">
        <h3>How to Play</h3>
        <div className="guide">
            <div className="guide-image">
                <Image
                    className="guide-hero-img"
                    src={GuideHero}
                    alt="Fantasy Cricket Guide"
                    width={600}
                    height={400}
                    priority
                />
            </div>
            <div className="guide-steps">
                <div><p>1. Create an Account:</p> Sign up and get instant access.</div>
                <div><p>2. Select a Match:</p> Choose an upcoming cricket match to participate in.</div>
                <div><p>3. Build Your Team:</p> Pick real players and form a balanced squad.</div>
                <div><p>4. Earn Points:</p> Your team scores based on real match performances.</div>
                <div><p>5. Climb the Leaderboard:</p> Compete with friends and fellow cricket fans.</div>
            </div>
        </div>
    </div>
);

const HeroSection = () => {
    // WhatsApp settings — easily editable
    const whatsappNumber = "918192091186"; // Replace with your number
    const whatsappMessage = "Hi, I want a id with Bonus."; // Custom message

    return (
        <div className="hero-sec">
            <div>
                <div className="glass"></div>
                <div className="hero-info">
                    <h1>Experience Fantasy Cricket Like Never Before!</h1>
                    <h4>
                        Test your cricket knowledge, create your dream team, and compete for glory—all for free!
                    </h4>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Join Now</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

const FeaturesSection = () => (
    <div className="features-sec">
        <h3>How It Works?</h3>
        <div className="features">
            {features.map(({ icon, title, desc, color }, index) => (
                <div className="feature" key={index}>
                    <div className='feature-icon'>
                        <FontAwesomeIcon icon={icon} style={{ color: color }} />
                    </div>  
                    <div className="feature-title">{title}</div>
                    <div className="feature-desc">{desc}</div>
                </div>
            ))}
        </div>
    </div>
);

const ReasonsSection = () => (
    <div className="reasons-sec">
        <h3>Why Choose Cricket Fantasy?</h3>
        <div className="reasons">
            {reasons.map(({ icon, title, desc, color }, index) => (
                <div className="reason" key={index}>
                    <div className="reason-icon">
                        <FontAwesomeIcon icon={icon} style={{ color: color }} />
                    </div>
                    <div className="reason-title">{title}</div>
                    <div className="reason-desc">{desc}</div>
                </div>
            ))}
        </div>
    </div>
);

const HomeComponent = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <GuideSection />
            <ReasonsSection />
        </>
    );
};

export { HomeComponent };
