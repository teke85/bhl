"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Shield, CheckCircle } from "lucide-react";

export default function CookiePrivacyPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("cookies");

  useEffect(() => {
    const consent = sessionStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => setShowPopup(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("cookieConsent", "accepted");
    setShowPopup(false);
  };

  const handleDecline = () => {
    sessionStorage.setItem("cookieConsent", "declined");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slideUp">
      <div className="bg-white dark:bg-black rounded-2xl shadow-2xl max-w-4xl mx-auto overflow-hidden border-2 border-gray-200 dark:border-gray-800">
        {/* Header */}
        <div className="bg-black dark:bg-white text-white dark:text-black p-6 relative">
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 hover:bg-white hover:bg-opacity-20 dark:hover:bg-black dark:hover:bg-opacity-20 rounded-full p-2 transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div className="font-body">
              <h2 className="text-2xl font-body font-bold">
                Privacy & Cookies
              </h2>
              <p className="text-gray-300 text-base font-body dark:text-gray-700">
                We value your privacy
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <button
            onClick={() => setActiveTab("cookies")}
            className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 ${
              activeTab === "cookies"
                ? "bg-white dark:bg-black text-black dark:text-white border-b-2 border-[#FDC02A]"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            <Cookie className="w-5 h-5 inline mr-2" />
            Cookies
          </button>
          <button
            onClick={() => setActiveTab("privacy")}
            className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 ${
              activeTab === "privacy"
                ? "bg-white dark:bg-black text-black dark:text-white border-b-2 border-[#FDC02A]"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            <Shield className="w-5 h-5 inline mr-2" />
            Privacy Policy
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-60 bg-white dark:bg-black">
          {activeTab === "cookies" ? (
            <div className="space-y-4">
              <p className="text-gray-700 font-body dark:text-gray-300 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing
                experience, analyze site traffic, and personalize content.
                Cookies help us understand how you use our website and improve
                our services.
              </p>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#FDC02A]" />
                  Types of Cookies We Use:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FDC02A] mt-1">•</span>
                    <span>
                      <strong className="text-black dark:text-white">
                        Essential Cookies:
                      </strong>{" "}
                      Required for basic site functionality
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FDC02A] mt-1">•</span>
                    <span>
                      <strong className="text-black dark:text-white">
                        Analytics Cookies:
                      </strong>{" "}
                      Help us understand how visitors interact with our website
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FDC02A] mt-1">•</span>
                    <span>
                      <strong className="text-black dark:text-white">
                        Performance Cookies:
                      </strong>{" "}
                      Improve website performance and user experience
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                By clicking Accept All, you consent to our use of cookies. You
                can manage your cookie preferences at any time through your
                browser settings.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                At Barotse Highway Limited, we are committed to protecting your
                privacy and ensuring the security of your personal information.
              </p>

              <div className="space-y-3">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Information We Collect
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    We collect information you provide directly to us, such as
                    when you contact us, subscribe to updates, or use our
                    services. This may include your name, email address, phone
                    number, and other relevant details.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    How We Use Your Information
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Your information helps us provide and improve our services,
                    communicate with you, process requests, and ensure the
                    security of our platform.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Data Security
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, or destruction.
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                For our complete privacy policy, please contact us or visit our
                full privacy page.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDecline}
            className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-none hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 px-6 py-3 rounded-none bg-[#FDC02A] text-black font-semibold hover:bg-[#e5ad1f] hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Accept All
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
