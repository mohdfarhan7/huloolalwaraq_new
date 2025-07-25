import Navbar from '@/components/navbar';
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-offwhite text-dark font-sans">
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-4 text-base text-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: May 2024</p>
        <p className="mb-4">
          This Privacy Policy describes how Hulool Al Waraq Packaging ("we", "us", or "our") collects, uses, and discloses your information when you use our website and services. By using our website, you agree to the collection and use of information in accordance with this policy.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6 mb-4">
          <li><b>Personal Information:</b> Name, email address, phone number, address, and other information you provide when contacting us, requesting a quote, or placing an order.</li>
          <li><b>Usage Data:</b> Information about how you use our website, including IP address, browser type, device information, pages visited, and time spent on pages.</li>
          <li><b>Cookies & Tracking:</b> We use cookies and similar technologies to enhance your experience, analyze usage, and improve our services. You can control cookies through your browser settings.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>To provide, operate, and maintain our website and services</li>
          <li>To process orders and respond to inquiries</li>
          <li>To communicate with you about products, services, and promotions</li>
          <li>To improve our website, products, and services</li>
          <li>To comply with legal obligations</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing Your Information</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>We do not sell or rent your personal information.</li>
          <li>We may share information with trusted third-party service providers (e.g., hosting, analytics, payment processing) who assist us in operating our website and business, subject to confidentiality agreements.</li>
          <li>We may disclose information if required by law or to protect our rights and safety.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Security</h2>
        <p className="mb-4">We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Retention</h2>
        <p className="mb-4">We retain your personal information only as long as necessary for the purposes described in this policy, or as required by law.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">6. International Transfers</h2>
        <p className="mb-4">Your information may be transferred to and processed in countries other than your own. We take steps to ensure your data is treated securely and in accordance with this policy.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">7. Your Rights</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>You may request access to, correction of, or deletion of your personal information.</li>
          <li>You may opt out of marketing communications at any time.</li>
          <li>To exercise your rights, please contact us using the details below.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">8. Children's Privacy</h2>
        <p className="mb-4">Our website is not intended for children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us to have it removed.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to This Policy</h2>
        <p className="mb-4">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.</p>
        <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact Us</h2>
        <p className="mb-4">If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@huloolalwaraq.com" className="text-green-700 underline">info@huloolalwaraq.com</a> or via our <a href="/contact" className="text-green-700 underline">Contact page</a>.</p>
      </div>
    </div>
  );
} 