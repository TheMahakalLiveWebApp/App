"use client"
import Link from "next/link"
import "./style.scss"

let questions = [
    {
        "ques": "What is Cricket Fantasy?",
        "ans": "Cricket Fantasy is an online fantasy cricket platform where users create virtual teams based on real-life players. Your team earns points based on real match performances, and you compete with others on the leaderboard."
        , "link" : ""
    },
    {
        "ques": "Is Cricket Fantasy free to play?",
        "ans": "Yes! Cricket Fantasy is 100% free-to-play and does not involve real money betting or cash prizes. The platform is purely for entertainment and skill-based competition."
        , "link" : ""
    },
    {
        "ques": "How is Cricket Fantasy different from gambling or betting?",
        "ans": "Cricket Fantasy is a game of skill, not luck or chance. Your knowledge of cricket, player performance, and strategy determine your success. Unlike gambling, which depends on luck, fantasy sports are legal in most parts of India as they involve strategic decision-making."
        , "link" : ""
    },
    {
        "ques": "How do I create an account?",
        "ans": "To sign up, visit our Sign Up Page and fill in: Your Full Name, A Username, Your Email Address, A Password, Select your State (for eligibility check), and Confirm that you are 18+ and accept the Terms & Conditions."
        , "link" : ""
    },
    {
        "ques": "What are the age and location restrictions?",
        "ans": "You must be 18 years or older to register and play. Residents of certain Indian states where fantasy sports are restricted cannot participate. See our Terms & Conditions for the latest list of restricted states."
        , "link" : ""
    },
    {
        "ques": "Can I create multiple accounts?",
        "ans": "No. Each user is allowed only one account. Multiple accounts are strictly prohibited and may lead to account suspension."
        , "link" : ""
    },
    {
        "ques": "How do I reset my password?",
        "ans": "Click on the “Forgot Password” link on the login page. Enter your registered email, and we’ll send you a password reset link."
        , "link" : ""
    },
    {
        "ques": "Can I delete my account?",
        "ans": "Yes. If you wish to delete your account permanently, please contact our support team via the Contact Us page."
        , "link" : ""
    },
    {
        "ques": "How do I play fantasy cricket on Cricket Fantasy?",
        "ans": "Select a Match – Choose an upcoming cricket match from the contest lobby. Create Your Team – Pick 11 players from both teams within a virtual budget. Choose Captain & Vice-Captain – Captain earns 2x points, Vice-Captain earns 1.5x points. Join a Contest – Compete against other users in public or private contests. Follow the Live Match – Your team scores points based on real match performance. Check Results – Track rankings and points on the leaderboard after the match ends."
        , "link" : ""
    },
    {
        "ques": "How is scoring calculated?",
        "ans": "Points are awarded based on real-life player performance in the match. Here’s a basic scoring system: Runs Scored – Points for each run, Wickets Taken – Bonus points for bowled, LBW, or caught, Catches & Run-Outs – Fielding contributions earn points, Economy Rate & Strike Rate – Extra points for efficient performances, Captain & Vice-Captain – 2x and 1.5x points boost. For a detailed breakdown, visit our Scoring Guide."
        , "link" : ""
    },
    {
        "ques": "Can I edit my team after submitting it?",
        "ans": "Yes, but only before the match deadline. Once the match starts, teams are locked and cannot be changed."
        , "link" : ""
    },
    {
        "ques": "What happens if one of my players doesn’t play in the real match?",
        "ans": "If a selected player does not play in the match, they will not earn any points. We recommend checking team lineups before the match begins."
        , "link" : ""
    },
    {
        "ques": "Is fantasy cricket legal in India?",
        "ans": "Yes! Fantasy Cricket is recognized as a game of skill and is legal in most Indian states. However, some states prohibit fantasy sports."
        , "link" : ""
    },
    {
        "ques": "Which states are restricted from playing fantasy cricket?",
        "ans": "As per current laws, residents from the following states cannot participate: Telangana, Andhra Pradesh, Assam, Odisha, Nagaland, Sikkim, and Tamil Nadu. For legal updates, please check our Terms & Conditions."
        , "link" : ""
        
    },
    {
        "ques": "Why is fantasy cricket considered a game of skill?",
        "ans": "Indian courts have ruled that fantasy sports require skill, knowledge, and strategy, unlike gambling which relies on luck. Your ability to analyze player form, pitch conditions, and team strategies impacts your performance."
        , "link" : ""
    },
    {
        "ques": "What is the Fair Play Policy?",
        "ans": "Cricket Fantasy promotes a fair gaming experience for all users. This includes: One Account Per Player – No multiple accounts. No Automated Play – All team selections must be manual. Equal Opportunity for All – No insider information or unfair advantages. Read our full Fair Play & Anti-Cheating Policy."
        , "link" : ""
    },
    {
        "ques": "What is Responsible Gaming?",
        "ans": "We encourage users to play for fun and in moderation. If you feel you are playing too much, consider: Setting time limits for yourself. Taking breaks between games. Self-exclusion options (Contact Support for assistance). Read our Responsible Gaming Policy for details."
        , "link" : ""
    },
    {
        "ques": "The website isn’t loading. What should I do?",
        "ans": "Try these steps: Clear browser cache & cookies. Check your internet connection. Try a different browser or device. Disable ad blockers (if applicable). If the issue persists, please contact Customer Support."
        , "link" : ""
    },
    {
        "ques": "How can I contact support?",
        "ans": "For any issues or inquiries, visit our Contact Us page or email us at "
        , "link" : "support@khelofantasy.site."
    }
]


const FAQ = () => {
    return (
        <>
            <div className="upper-part"></div>
            <div className="faq-page">
                <div className="heading">Frequently Asked Questions (FAQs) – Cricket Fantasy</div>
                <div className="subheading">
                    Welcome to the Cricket Fantasy FAQ section! Find answers to the most common questions about our fantasy cricket platform, gameplay, legality, and support. If you need further assistance, please visit our <Link href="/contact" >Contact Us page.</Link>
                </div>
                <div className="FAQS">

                    {questions.map(({ques, ans, link},key) =>(
                        <div key={key} className="quecontainer">
                        <div className="question">
                            <p>{`Q${key+1}.`}</p>
                            {` ${ques}`}
                        </div>
                        <div className="answer">
                            <p>Ans.</p>
                            {` ${ans}`}
                        </div>
                        </div>
                    ))}

                </div>
                <div className="conclusion">
                    <div className="heading">
                        Still Have Questions?
                    </div>
                    <div className="message">
                        Contact our support team via the <Link href="/contact" >Contact Us</Link> page for further assistance.
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ;