import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="container mx-auto px-6 py-16 bg-white rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Heading */}
        <div className="border-l-8 border-black pl-4">
          <h1 className="text-5xl font-extrabold text-black">Privacy Policy</h1>
        </div>

        {/* Introduction */}
        <p className="text-lg text-black leading-relaxed bg-gray-100 p-6 rounded-lg shadow-md">
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your
          information when you use our platform.
        </p>

        {/* Section 1: Information We Collect */}
        <div>
          <h2 className="text-2xl font-bold text-black">1. Information We Collect</h2>
          <p className="text-black mt-2">
            We collect personal information, such as your name, email, and location, when you register or interact with
            the platform. We may also collect non-personal data for analytics purposes.
          </p>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div>
          <h2 className="text-2xl font-bold text-black">2. How We Use Your Information</h2>
          <p className="text-black mt-2">
            The information collected is used to enhance your experience, improve platform functionality, and facilitate
            problem-solving collaborations between volunteers, NGOs, and government bodies.
          </p>
        </div>

        {/* Section 3: Data Protection & Security */}
        <div>
          <h2 className="text-2xl font-bold text-black">3. Data Protection & Security</h2>
          <p className="text-black mt-2">
            We implement strong security measures to safeguard your data. However, while we strive to protect your
            information, we cannot guarantee absolute security.
          </p>
        </div>

        {/* Section 4: Third-Party Sharing */}
        <div>
          <h2 className="text-2xl font-bold text-black">4. Third-Party Sharing</h2>
          <p className="text-black mt-2">
            We do not sell or rent your personal data. However, certain data may be shared with trusted partners to
            improve service functionality, always in compliance with privacy laws.
          </p>
        </div>

        {/* Section 5: User Rights */}
        <div>
          <h2 className="text-2xl font-bold text-black">5. Your Rights</h2>
          <p className="text-black mt-2">
            You have the right to access, modify, or delete your personal information. You may also opt out of data
            collection where applicable.
          </p>
        </div>

        {/* Closing Note */}
        <p className="text-lg text-black leading-relaxed bg-gray-100 p-6 rounded-lg shadow-md">
          By using our platform, you consent to our Privacy Policy. For any questions, please contact us.
        </p>
      </div>
    </section>
  );
}
