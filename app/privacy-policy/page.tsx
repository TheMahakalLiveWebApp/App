"use client"

import React from 'react';
import "./style.scss"
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <>
    <div className="upperpart"></div>
    <div className="container">
      <h1 className="title">Privacy Policy – Cricket Fantasy</h1>

      <section className="section">
        <h2>1. Information We Collect</h2>
        <h3>1.1 Personal Information</h3>
        <p>When you sign up, we may collect:</p>
        <ul>
          <li>Name</li>
          <li>Email Address</li>
        </ul>

        <h3>1.2 Automatically Collected Data</h3>
        <p>When you use our platform, we may collect:</p>
        <ul>
          <li>IP Address & Device Information</li>
          <li>Browser Type & Operating System</li>
          <li>Website Usage & Activity Logs</li>
        </ul>

        <h3>1.3 Cookies & Tracking</h3>
        <p>
          We use cookies and analytics tools to enhance user experience and track platform performance.
          You can manage cookie preferences in your browser settings.
        </p>
      </section>

      <section className="section">
        <h2>2. How We Use Your Information</h2>
        <p>We collect user data for the following purposes:</p>
        <ul>
          <li>To Create & Manage Accounts – Ensuring age verification and compliance with state laws.</li>
          <li>To Improve User Experience – Optimizing our website based on user interactions.</li>
          <li>To Provide Customer Support – Assisting with account issues and inquiries.</li>
          <li>To Ensure Security & Fair Play – Monitoring for fraudulent activity or multiple accounts.</li>
          <li>To Comply with Legal Obligations – Fulfilling regulatory requirements where applicable.</li>
        </ul>
      </section>

      <section className="section">
        <h2>3. Data Sharing & Security</h2>
        <h3>3.1 Data Protection Measures</h3>
        <p>
          We implement industry-standard encryption and security protocols to protect your personal information.
        </p>

        <h3>3.2 Third-Party Sharing</h3>
        <p>
          We do not sell or share user data with third-party advertisers or unauthorized entities. However, we may share data with:
        </p>
        <ul>
          <li>Regulatory Authorities (if legally required)</li>
          <li>Service Providers (hosting, security, analytics) under strict confidentiality agreements.</li>
        </ul>
      </section>

      <section className="section">
        <h2>4. User Rights & Choices</h2>
        <h3>4.1 Access & Update Information</h3>
        <p>
          Users can access, modify, or delete their personal data by visiting their Account Settings or contacting support.
        </p>

        <h3>4.2 Opt-Out of Communications</h3>
        <p>
          Users can unsubscribe from promotional emails at any time by clicking the "Unsubscribe" link in emails.
        </p>

        <h3>4.3 Account Deletion</h3>
        <p>
          To delete your account and remove associated data, contact us at <a href="mailto:support@khelofantasy.site" target="_blank" >support@khelofantasy.site</a>.
        </p>
      </section>

      <section className="section">
        <h2>5. Legal Compliance & Age Restrictions</h2>
        <ul>
          <li>Age Restriction – Users must be 18+ to use our platform. We do not knowingly collect data from minors.</li>
          <li>State Restrictions – Users from restricted states (e.g., Telangana, Andhra Pradesh, Odisha, Assam, Nagaland, Sikkim, Tamil Nadu) cannot register or participate.</li>
          <li>Lawful Use – All activities on our platform must comply with Indian government regulations.</li>
        </ul>
      </section>

      <section className="section">
        <h2>6. Policy Updates & Contact Information</h2>
        <p>
          We reserve the right to update this policy as needed. Any changes will be posted on this page and notified via email where applicable.
        </p>
        <p>For privacy-related inquiries, contact:</p>
        <ul>
          <li>Email: <a href="mailto:privacy@khelofantasy.site" target="_blank" >privacy@khelofantasy.site</a></li>
          <li>Contact Page: <Link href="/contact" >Click Here</Link></li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default PrivacyPolicy;
