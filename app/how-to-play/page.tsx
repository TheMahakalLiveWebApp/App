import "./style.scss"

let data = [
    {
        header: "1. Register & Log In",
        steps: [
            "Sign up for free on Cricket Fantasy.",
            "Confirm that you are 18+ and reside in an eligible state.",
            "Log in to access your dashboard and start playing."
        ]
    },
    {
        header: "2. Pick a Match",
        steps: [
            "Browse upcoming cricket matches in the Contest Lobby.",
            "Choose a match that interests you and enter a contest.",
            "You can join multiple contests at once for more fun!"
        ]
    },
    {
        header: "3. Create Your Fantasy Team",
        steps: [
            "You’ll receive a virtual budget to draft your 11-player team.",
            "Select players from both teams playing in the real match.",
            "Build a balanced team with batsmen, bowlers, all-rounders, and wicket-keepers.",
            "Appoint a Captain (2x points) and Vice-Captain (1.5x points) to maximize your score."
        ]
    },
    {
        header: "4. Understand the Scoring System",
        steps: [
            "Your selected players earn points based on their real-life match performance.",
            "Runs Scored – Points awarded per run.",
            "Wickets Taken – Bonus points for dismissals (bowled, LBW, or caught).",
            "Catches & Run-Outs – Extra points for good fielding.",
            "Strike Rate & Economy Rate – Additional points for efficient performance.",
            "Captain & Vice-Captain – Multipliers (2x for Captain, 1.5x for Vice-Captain)."
        ]
    },
    {
        header: "5. Follow the Live Match & Track Your Points",
        steps: [
            "Once the match starts, your team earns points in real time based on player performance.",
            "Check the Leaderboard to see how you rank among other participants.",
            "Score updates happen automatically throughout the match!"
        ]
    },
    {
        header: "6. Win & Climb the Leaderboard",
        steps: [
            "No real money involved! Play for fun and challenge your friends.",
            "Earn virtual rewards and bragging rights based on your rank.",
            "Review your performance history and improve your cricket strategy!"
        ]
    }
]


const HowToPlay = () => {
    return (
        <>
            <div className="upper-part"></div>
            <div className="HowToPlay-Page">
                <div className="heading">
                    How to Play Fantasy Cricket on Cricket Fantasy
                </div>
                <div className="info">
                    Cricket Fantasy is an exciting, skill-based platform where you create a virtual cricket team, compete with others, and earn points based on real-life performances.<p>No real money is involved</p>—just pure cricket strategy and fun!
                </div>
                <div className="guide">
                    <div className="heading">Step-by-Step Guide to Playing Fantasy Cricket</div>
                    <div className="stepscon">
                        {
                            data.map(({ header, steps }, key) => (
                                <div className="step" key={key}>
                                    <div className="step-head">{header}</div>
                                    <ul>
                                        {steps.map((value, key2) => (
                                            <li key={key2}>{value}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="gamerules">
                    <div className="heading">
                        Game Rules & Fair Play Policy
                    </div>
                    <div className="subheading">To ensure a fair and fun gaming experience, all users must adhere to these rules:</div>
                    <ul>
                        <li><p>One Account Per Player</p> – Multiple accounts are not allowed.</li>
                        <li><p>No Automated Tools</p> – Only manual team selections are permitted.</li>
                        <li><p>Fair Play Policy</p> – Any violation (e.g., collusion or use of bots) will result in disqualification.</li>
                        <li><p>Skill-Based Game</p> – Your success depends on cricket knowledge and strategy.</li>
                    </ul>
                </div>
                <div className="whocanplay">
                    <div className="heading">Who Can Play?</div>
                    <ul>
                        <li>Must be 18 years or older.</li>
                        <li>Only residents of eligible states can participate.</li>
                        <li>Users from restricted states <p> (e.g., Telangana, Andhra Pradesh)</p> are not allowed. <p>(See Terms & Conditions for full details.)</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HowToPlay