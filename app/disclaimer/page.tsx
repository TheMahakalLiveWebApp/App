"use client"

import React from 'react';
import Link from 'next/link';

import "./style.scss"
const DisclaimerLegality = () => {
  return (
    <>
    <div className="upperpart"></div>
    <div className="container">
      <h1 className="title">Disclaimer & Legality Notice – Cricket Fantasy</h1>

      <section className="section">
        <h2>1. General Disclaimer</h2>
        <ul>
          <li><strong>No Real Money Involvement</strong> – Cricket Fantasy is a 100% free-to-play platform. We do not offer real-money betting, gambling, or cash prizes.</li>
          <li><strong>Game of Skill</strong> – Fantasy cricket on this platform is classified as a game of skill, meaning success depends on user knowledge, strategy, and decision-making.</li>
          <li><strong>No Guarantees or Warranties</strong> – While we strive to provide accurate game data and results, Cricket Fantasy does not guarantee uninterrupted service or the accuracy of third-party match statistics.</li>
        </ul>
      </section>

      <section className="section">
        <h2>2. Legal Compliance & State Restrictions</h2>
        <ul>
          <li><strong>Legal Status in India</strong> – Fantasy sports have been legally recognized as a game of skill under Indian law and are permitted in most states.</li>
          <li><strong>Restricted States</strong> – Users residing in the following states cannot participate due to local regulations:
            Telangana, Andhra Pradesh, Odisha, Assam, Nagaland, Sikkim, Tamil Nadu.
          </li>
          <li><strong>User Responsibility</strong> – It is the user's responsibility to ensure they comply with local laws before registering.</li>
        </ul>
      </section>

      <section className="section">
        <h2>3. Age & Eligibility Requirements</h2>
        <ul>
          <li><strong>Minimum Age Requirement</strong> – Users must be 18 years or older to register and participate.</li>
          <li><strong>Identity Verification</strong> – We reserve the right to request proof of age and residence to ensure compliance.</li>
          <li><strong>Non-Transferable Accounts</strong> – User accounts are personal and cannot be sold, transferred, or shared.</li>
        </ul>
      </section>

      <section className="section">
        <h2>4. Responsible Gaming</h2>
        <ul>
          <li><strong>Entertainment Purposes Only</strong> – Cricket Fantasy is meant for fun and friendly competition, not financial gain.</li>
          <li><strong>Self-Exclusion Options</strong> – Users can limit or deactivate their accounts if they feel they need a break.</li>
          <li><strong>Fair Play Commitment</strong> – Cheating, multiple accounts, or fraudulent activity is strictly prohibited and may result in account suspension.</li>
        </ul>
      </section>

      <section className="section">
        <h2>5. Limitation of Liability</h2>
        <ul>
          <li><strong>No Liability for Losses</strong> – Cricket Fantasy is not responsible for any losses, damages, or disputes arising from user participation.</li>
          <li><strong>Third-Party Services</strong> – We are not liable for the accuracy of third-party data providers (e.g., live match scores, statistics).</li>
        </ul>
      </section>

      <section className="section">
        <h2>6. Updates to This Disclaimer</h2>
        <p>
          We reserve the right to modify this Disclaimer & Legality Notice. Users will be notified of any significant changes.<br />
          Continued use of the platform implies acceptance of the updated terms.
        </p>
      </section>

      <section className="section">
        <h2>7. Contact Us</h2>
        <p>For legal inquiries, please reach out to:</p>
        <ul>
          <li>Email: <a href="mailto:legal@reddyannagamess3.shop" target="_blank" >legal@reddyannagamess3.shop</a></li>
          <li>Contact Page: <Link href="/contact">Click Here</Link></li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default DisclaimerLegality;
