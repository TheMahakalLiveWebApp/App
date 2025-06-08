"use client"

// Updated TSX file for better responsiveness and structure
import Link from "next/link"
import "./style.scss"
const reasons = [
    {
        header: "100% Free-to-Play",
        footer: "No deposits, no withdrawals, just pure cricket strategy.",
    },
    {
        header: "Skill-Based Competition",
        footer: "Your cricket knowledge and player analysis determine your success.",
    },
    {
        header: "Legal & Compliant ",
        footer: "We follow Indian government regulations for skill-based gaming.",
    },
    {
        header: "Fair Play Guaranteed ",
        footer: "No bots, no cheating, and strict anti-fraud measures.",
    },
    {
        header: " Safe & Secure",
        footer: "Your data and privacy are our top priorities.",
    },
];

const About = () => {
    return (
        <div className="about-page">
            <div className="upper-part" />
            <section className="aboutCricketFantasy">
                <div className="heading">About Cricket Fantasy</div>
                <div className="info">
                    <div className="shortinfo">Experience the Thrill of Fantasy Cricket – 100% Free & Skill-Based!</div>
                    <div className="full-info">Welcome to Cricket Fantasy, India’s premier free-to-play fantasy cricket platform where your cricket knowledge and strategy determine your success. Whether you're a die-hard cricket fan or a casual player, our platform provides an exciting, competitive, and fair environment to test your skills against others.</div>
                    <div className="some-features">No Real Money | 100% Skill-Based | Play for Fun</div>
                    <div className="conclusion">We are committed to providing a legal, transparent, and fair gaming experience, ensuring compliance with Indian government regulations for skill-based gaming.</div>
                </div>
            </section>

            <section className="mission">
                <div className="heading">Our Vision & Mission</div>
                <ul>
                    <li><p>Revolutionize Fantasy Cricket –</p> Offer a safe, legal, and engaging platform for cricket enthusiasts.</li>
                    <li><p>Encourage Skill-Based Play –</p> We promote strategic thinking and cricket knowledge over chance.</li>
                    <li><p>Ensure Compliance & Fair Play –</p> Follow all Indian laws, Google Ads policies, and industry best practices.</li>
                    <li><p>Provide a Safe & Responsible Gaming Environment –</p> We promote responsible gaming, ensuring players play for fun, not financial gain.</li>
                </ul>
                <div className="conclusion">We believe that fantasy sports should be about passion, knowledge, and competition, not gambling or luck. That’s why Cricket Fantasy is completely free-to-play with no real-money betting or gambling elements.</div>
            </section>

            <section className="whytochoose">
                <div className="heading">Why Choose Cricket Fantasy?</div>
                <div className="reasonscontainer">
                    <ul>
                        {reasons.map(({ header, footer }, key) => (
                            <li key={key}><p>{header}</p> - {footer}</li>
                        ))}
                    </ul>
                </div>
                <div className="conclusion"><p>No real money, no gambling</p> – just cricket and strategy!</div>
            </section>

            <section className="GameRules">
                <div className="heading">Legal & Compliance Transparency</div>
                <div className="subheading">At Cricket Fantasy, we strictly adhere to:</div>
                <div className="rules">
                    <ul>
                        <li><p>Indian Laws on Fantasy Sports</p> – Fantasy cricket is recognized as a game of skill in India and is legal in most states.</li>
                        <li><p>Age Restrictions (18+ Only)</p> – Only users 18 years or older can play.</li>
                        <li><p>State Restrictions Apply</p> – Users from restricted states (such as Telangana, Andhra Pradesh, Odisha, Assam, Nagaland, Sikkim, Tamil Nadu) cannot participate.</li>
                        <li><p>Fair Play Policy</p> – We ensure honest competition and strictly prohibit cheating or multiple accounts.</li>
                    </ul>
                </div>
                <div className="conclusion">
                    <span>For full details, check our <Link href="/terms-and-conditions">Terms & Conditions</Link> and <Link href="/disclaimer">Disclaimer</Link>.</span>
                </div>
            </section>

            <section className="TeamTour">
                <div className="heading">Meet Our Team</div>
                <div className="about">
                    <p>Cricket Fantasy</p> was founded by a team of cricket enthusiasts, sports analysts, and tech innovators who wanted to create a fun, engaging, and legal fantasy sports platform for Indian users. We are passionate about cricket and are dedicated to providing a safe, fair, and thrilling experience for all players.
                </div>
            </section>

            <section className="ContactUsform">
                <div className="heading">Contact Us</div>
                <div className="about">
                    <div className="subheading">Have questions, feedback, or need support? We’re here to help!</div>
                    
                </div>
                <div className="conclusion">For assistance, visit our <Link href="/faq">FAQ</Link> or <Link href="/contact">Contact Us</Link> page.</div>
            </section>
        </div>
    )
}

export default About;
