"use client";

import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";

function ModernCookiePopup() {
  type Preferences = {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
    personalization: boolean;
  };

  type PreferenceKey = keyof Preferences;

  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showPreferences, setShowPreferences] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<Preferences>({
    necessary: true,
    analytics: true,
    marketing: true,
    personalization: true,
  });

  useEffect(() => {
    const consent = sessionStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => setShowPopup(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    sessionStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        accepted: true,
        preferences: {
          necessary: true,
          analytics: true,
          marketing: true,
          personalization: true,
        },
      })
    );
    setShowPopup(false);
  };

  const handleSavePreferences = () => {
    sessionStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        accepted: true,
        preferences: preferences,
      })
    );
    setShowPopup(false);
  };

  const handleDecline = () => {
    sessionStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        accepted: false,
        preferences: {
          necessary: true,
          analytics: false,
          marketing: false,
          personalization: false,
        },
      })
    );
    setShowPopup(false);
  };

  const togglePreference = (key: PreferenceKey) => {
    if (key === "necessary") return; // Can't disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showPopup) return null;

  if (showPreferences) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scaleIn">
          {/* Header */}
          <div className="relative border-b border-gray-200 dark:border-gray-800 p-6">
            <button
              onClick={() => setShowPreferences(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Cookie Preferences
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Manage your cookie preferences below
            </p>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5 bg-gray-50 dark:bg-gray-900/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Necessary Cookies
                      </h3>
                      <span className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                        Always Active
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      These cookies are necessary for the website to function
                      and cannot be switched off. They are usually only set in
                      response to actions made by you.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-6 bg-[#FDB913] rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Analytics Cookies
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      These cookies allow us to measure and improve the
                      performance of our site. They help us know which pages are
                      most popular.
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference("analytics")}
                    className="flex-shrink-0"
                  >
                    <div
                      className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                        preferences.analytics
                          ? "bg-[#FDB913] justify-end"
                          : "bg-gray-300 dark:bg-gray-700 justify-start"
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Marketing Cookies
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      These cookies may be set through our site by our
                      advertising partners to build a profile of your interests.
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference("marketing")}
                    className="flex-shrink-0"
                  >
                    <div
                      className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                        preferences.marketing
                          ? "bg-[#FDB913] justify-end"
                          : "bg-gray-300 dark:bg-gray-700 justify-start"
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Personalization Cookies */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Personalization Cookies
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      These cookies enable the website to provide enhanced
                      functionality and personalization based on your
                      interaction.
                    </p>
                  </div>
                  <button
                    onClick={() => togglePreference("personalization")}
                    className="flex-shrink-0"
                  >
                    <div
                      className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                        preferences.personalization
                          ? "bg-[#FDB913] justify-end"
                          : "bg-gray-300 dark:bg-gray-700 justify-start"
                      } px-1`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow"></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900/30">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowPreferences(false)}
                className="flex-1 px-6 py-3 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-6 py-3 bg-[#FDB913] text-black font-semibold hover:bg-[#e5ad1f] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#1a1a1a] rounded-t-3xl sm:rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden animate-slideUp">
        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Cookie Settings
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              By clicking Accept, you agree to the storing of cookies on your
              device to enhance site navigation, analyze site usage, and assist
              in our marketing efforts. View our{" "}
              <button className="text-[#FDB913] hover:underline font-medium">
                Privacy Policy
              </button>{" "}
              for more information.
            </p>
          </div>

          {/* Quick Info */}
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-5 h-5 rounded-full bg-[#FDB913] flex items-center justify-center">
                  <Check className="w-3 h-3 text-black" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  We use cookies to improve your experience, personalize
                  content, and analyze traffic. You can customize your
                  preferences anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDecline}
              className="flex-1 px-6 py-3.5 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 border border-gray-300 dark:border-gray-700"
            >
              Decline
            </button>
            <button
              onClick={() => setShowPreferences(true)}
              className="flex-1 px-6 py-3.5 text-gray-900 dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300 border border-gray-300 dark:border-gray-700"
            >
              Preferences
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3.5 bg-[#FDB913] text-black font-semibold hover:bg-[#e5ad1f] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default ModernCookiePopup;
