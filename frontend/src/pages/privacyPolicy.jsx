// pages/privacyPolicy.jsx

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="px-6 md:px-20 py-10 text-[#333] max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>

      <p className="text-sm mb-6 text-gray-500">Effective Date: July 28, 2025</p>

      <section className="mb-8">
        <p>
          At <strong>BookDr</strong>, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect,
          use, share, and protect your personal information when you use our AI-powered healthcare assistant platform.
          By using BookDr, you agree to the practices described in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Personal Information:</strong> Name, email, phone, gender, DOB, health preferences, appointment history.</li>
          <li><strong>Usage Data:</strong> Device type, IP, location, session behavior.</li>
          <li><strong>Health Data:</strong> Symptoms you submit and AI-generated recommendations.</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">
          *Note: BookDr does <strong>not</strong> diagnose or treat medical conditions. It's for informational and assistive purposes only.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Suggest appropriate specialists based on symptoms</li>
          <li>Book and manage appointments</li>
          <li>Provide multilingual AI support</li>
          <li>Improve our system and personalize experience</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
        <p>
          We do <strong>not</strong> sell your personal data. We only share it with:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Verified healthcare providers</li>
          <li>Service providers for infrastructure and analytics</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We use industry-standard encryption and security practices to protect your data. However, no system is 100% secure.
          Please avoid sharing highly sensitive data unless necessary.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Your Rights & Choices</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Access or update your data</li>
          <li>Delete your account or withdraw consent</li>
          <li>Control cookie preferences</li>
          <li>Opt-out of non-essential communication</li>
        </ul>
        <p className="mt-2">Contact us at <strong>privacy@bookdr.com</strong> for requests.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
        <p>We retain your data only as long as needed for service purposes and legal compliance.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Children’s Privacy</h2>
        <p>
          BookDr is not intended for users under 13 years old. We do not knowingly collect data from minors without parental consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. International Users</h2>
        <p>
          If you're accessing BookDr from outside India, your data may be processed in India. By using the service, you consent to this transfer.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Please check this page regularly for updates.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>If you have questions or concerns about this policy, contact us at:</p>
        <ul className="list-inside mt-2 space-y-1">
          <li><strong>Email:</strong> privacy@bookdr.com</li>
          <li><strong>Phone:</strong> +91-00000-00000</li>
          <li><strong>Address:</strong> BookDr, New Delhi, India</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
