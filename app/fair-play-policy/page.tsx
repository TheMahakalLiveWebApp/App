"use client"
import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';

const FairPlayPolicy = () => {
  return (
    <>
    <div className={styles.upperpart}></div>
    <div className={styles.container}>
      <h1>Fair Play & Anti-Cheating Policy – Cricket Fantasy</h1>

      <section>
        <h2>1. Fair Play Commitment</h2>
        <p>
          We ensure that all users compete on an equal footing, with no unfair advantages. Any violation of fair play rules may result
          in account suspension or permanent ban. Users are required to follow ethical gaming practices and comply with all platform rules.
        </p>
      </section>

      <section>
        <h2>2. Prohibited Activities</h2>
        <ul>
          <li><strong>Multiple Accounts:</strong> Each user is allowed only one account. Any attempt to create multiple accounts for unfair advantages will lead to an immediate ban.</li>
          <li><strong>Use of Bots or Automation:</strong> The use of bots, scripts, or automated tools to gain an unfair advantage is strictly prohibited.</li>
          <li><strong>Collusion & Group Play:</strong> Users must compete individually and cannot collude or coordinate team selections with others.</li>
          <li><strong>Exploiting System Vulnerabilities:</strong> Any attempt to manipulate or exploit bugs in the platform will result in immediate suspension.</li>
          <li><strong>Abuse, Harassment, or Misconduct:</strong> Users engaging in harassment, abusive behavior, or spamming will face account penalties.</li>
        </ul>
      </section>

      <section>
        <h2>3. Monitoring & Enforcement</h2>
        <p>
          Cricket Fantasy actively monitors all user activities using automated fraud detection systems.
          Any suspicious behavior will be reviewed, and necessary actions will be taken. Users found violating fair play policies may face:
        </p>
        <ul>
          <li>Warning for minor violations</li>
          <li>Temporary Account Suspension for serious offenses</li>
          <li>Permanent Ban for repeat offenders</li>
        </ul>
      </section>

      <section>
        <h2>4. Reporting Cheating or Violations</h2>
        <p>
          Users can report any suspicious activity via <a href="mailto:support@reddyannagamess3.shop" target="_blank" >support@reddyannagamess3.shop</a>.
          We encourage users to maintain a fair and competitive environment by reporting unethical behavior.
          Reports will be confidentially reviewed, and necessary actions will be taken against violators.
        </p>
      </section>

      <section>
        <h2>5. Fair Play Assurance</h2>
        <p>
          Cricket Fantasy is a 100% skill-based platform. We do not allow unfair practices that compromise game integrity.
          Our randomized team selections and real-time scoring system ensure fair competition.
        </p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>
          For inquiries related to fair play violations or policy clarifications:
        </p>
        <ul>
          <li>Contact Page: <Link href="/contact" >Click Here</Link></li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default FairPlayPolicy;