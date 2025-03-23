import React from "react";

export default function TermsOfService() {
  return (
    <section className="container mx-auto px-6 py-16 bg-white rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Heading */}
        <div className="border-l-8 border-black pl-4">
          <h1 className="text-5xl font-extrabold text-black">Terms of Service</h1>
        </div>

        {/* Introduction */}
        <p className="text-lg text-black leading-relaxed bg-gray-100 p-6 rounded-lg shadow-md">
          Welcome to our platform. By using our services, you agree to comply with the following terms and conditions.
          Please read them carefully before proceeding.
        </p>

        {/* Section 1: User Responsibilities */}
        <div>
          <h2 className="text-2xl font-bold text-black">1. User Responsibilities</h2>
          <p className="text-black mt-2">
            As a user, you must ensure that all information provided is accurate and not misleading. Any misuse of the
            platform may result in suspension or termination of your account.
          </p>
        </div>

        {/* Section 2: Content Usage */}
        <div>
          <h2 className="text-2xl font-bold text-black">2. Content Usage</h2>
          <p className="text-black mt-2">
            All content shared on the platform, including problem reports and campaign details, must comply with
            ethical guidelines. Unauthorized use of content is strictly prohibited.
          </p>
        </div>

        {/* Section 3: Privacy Policy */}
        <div>
          <h2 className="text-2xl font-bold text-black">3. Privacy Policy</h2>
          <p className="text-black mt-2">
            We prioritize the security of your data. Personal information will not be shared with third parties without
            consent, except as required by law.
          </p>
        </div>

        {/* Section 4: Termination of Service */}
        <div>
          <h2 className="text-2xl font-bold text-black">4. Termination of Service</h2>
          <p className="text-black mt-2">
            We reserve the right to terminate or suspend user accounts that violate these terms or engage in unlawful
            activities.
          </p>
        </div>

        {/* Closing Note */}
        <p className="text-lg text-black leading-relaxed bg-gray-100 p-6 rounded-lg shadow-md">
          By continuing to use our platform, you acknowledge and accept these terms. For any concerns, please contact
          us.
        </p>
      </div>
    </section>
  );
}
