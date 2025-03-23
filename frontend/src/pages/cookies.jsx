import React from "react";

export default function CookiesPolicy() {
  return (
    <section className="container mx-auto px-6 py-16 bg-white rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Heading */}
        <div className="border-l-8 border-black pl-4">
          <h1 className="text-5xl font-extrabold text-black">Cookies Policy</h1>
        </div>

        {/* Introduction */}
        <p className="text-lg text-black leading-relaxed bg-gray-100 p-6 rounded-lg shadow-md">
          This Cookies Policy explains how we use cookies and similar tracking technologies on our platform.
          By continuing to use our website, you consent to the use of cookies as outlined below.
        </p>

        {/* Section 1: What Are Cookies? */}
        <div>
          <h2 className="text-2xl font-bold text-black">1. What Are Cookies?</h2>
          <p className="text-black mt-2">
            Cookies are small text files stored on your device when you visit a website. They help enhance
            your browsing experience by remembering preferences and enabling certain functionalities.
          </p>
        </div>

        {/* Section 2: How We Use Cookies */}
        <div>
          <h2 className="text-2xl font-bold text-black">2. How We Use Cookies</h2>
          <p className="text-black mt-2">
            We use cookies to improve platform functionality, personalize content, analyze site traffic, and
            enhance security. Some cookies are essential for the website to function properly.
          </p>
        </div>

        {/* Section 3: Types of Cookies We Use */}
        <div>
          <h2 className="text-2xl font-bold text-black">3. Types of Cookies We Use</h2>
          <ul className="list-disc list-inside text-black mt-2 space-y-2">
            <li><strong>Essential Cookies:</strong> Necessary for website functionality.</li>
            <li><strong>Performance Cookies:</strong> Help analyze site usage and improve user experience.</li>
            <li><strong>Functional Cookies:</strong> Remember user preferences for a personalized experience.</li>
            <li><strong>Targeting Cookies:</strong> Used for marketing and advertising purposes.</li>
          </ul>
        </div>

        {/* Section 4: Managing Cookies */}
        <div>
          <h2 className="text-2xl font-bold text-black">4. Managing Cookies</h2>
          <p className="text-black mt-2">
            You can control and disable cookies through your browser settings. However, disabling essential
            cookies may impact website functionality.
          </p>
        </div>

        {/* Section 5: Changes to This Policy */}
        <div>
          <h2 className="text-2xl font-bold text-black">5. Changes to This Policy</h2>
          <p className="text-black mt-2">
            We may update this Cookies Policy from time to time. Any changes will be reflected on this page,
            and we encourage you to review it periodically.
          </p>
        </div>

        {/* Closing Note */}
        <p className="text-lg text-black leading-relaxed bg-gray-100 p-6 rounded-lg shadow-md">
          If you have any questions regarding our use of cookies, please contact us.
        </p>
      </div>
    </section>
  );
}
