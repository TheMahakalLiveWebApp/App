import React from 'react';
import styles from './ResponsibleGaming.module.scss';

const ResponsibleGaming = () => {
  return (
    <>
    <div className={styles.upperpart}></div>
    <div className={styles.container}>
      <h1>Responsible Gaming Policy – Cricket Fantasy</h1>

      <section>
        <h2>1. Our Commitment to Responsible Gaming</h2>
        <p>
          We believe fantasy sports should be an entertainment activity, not a compulsion.
          Our platform does not involve real-money betting or gambling. We provide self-exclusion
          options for users who wish to limit or stop their participation.
        </p>
      </section>

      <section>
        <h2>2. Guidelines for Responsible Gaming</h2>
        <ul>
          <li>Play for Fun, Not for Profit – Fantasy cricket should be a hobby, not a source of income.</li>
          <li>Set Personal Limits – Avoid excessive time spent on the platform.</li>
          <li>Take Breaks – Step away from the game if you feel overwhelmed.</li>
          <li>Monitor Your Activity – Keep track of how much time you spend on fantasy sports.</li>
          <li>Avoid Playing Under Stress – Do not play when feeling emotionally or physically distressed.</li>
        </ul>
      </section>

      <section>
        <h2>3. Self-Exclusion & Account Limits</h2>
        <p>
          Users who feel they need a break from the platform can request temporary or permanent self-exclusion.
          Self-exclusion requests can be made by contacting <a href="mailto:support@khelofantasy.site">support@khelofantasy.site</a>.
          During self-exclusion, users will not be able to log in, participate in contests,
          or reactivate their account until the exclusion period ends.
        </p>
      </section>

      <section>
        <h2>4. Age & Eligibility Restrictions</h2>
        <p>
          <strong>18+ Only</strong> – Users must be 18 years or older to register and play. We do not promote or allow
          participation from minors. Users found violating age restrictions will have their accounts suspended.
        </p>
      </section>

      <section>
        <h2>5. Fair Play & Ethical Gaming</h2>
        <p>
          Multiple accounts, bot usage, or unfair tactics are strictly prohibited. Users engaging in
          fraudulent activities will be banned permanently. We reserve the right to investigate
          suspicious activity and take necessary action.
        </p>
      </section>

      <section>
        <h2>6. Resources for Responsible Gaming</h2>
        <ul>
          <li><a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer">GambleAware</a></li>
          <li><a href="https://www.responsiblegambling.org" target="_blank" rel="noopener noreferrer">Responsible Gaming Council</a></li>
          <li>Your Local Mental Health Support Services</li>
        </ul>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          If you need assistance with responsible gaming, self-exclusion, or have concerns, reach out to us:
        </p>
        <ul>
          <li>Email: <a href="mailto:support@khelofantasy.site">support@khelofantasy.site</a></li>
          <li>Contact Page: <a href="#">Click Here</a></li>
        </ul>
      </section>

      <p className={styles.footer}>
        By using Cricket Fantasy, you acknowledge and accept this Responsible Gaming Policy.
      </p>
    </div>
    </>
  );
};

export default ResponsibleGaming;
