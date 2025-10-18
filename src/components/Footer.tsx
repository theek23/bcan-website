import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value) || value === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setIsSubmitted(true);
      setEmail("");
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } else {
      setIsValidEmail(false);
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Research", path: "/research" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const resources = [
    { name: "Publications", path: "/research#publications" },
    { name: "Clinical Trials", path: "/research#clinical-trials" },
    { name: "Research Partners", path: "/research#collaborations" },
    { name: "Our Mission", path: "/about#mission" },
    { name: "Core Values", path: "/about#values" },
    { name: "Admin Login", path: "/admin/login" },
  ];

  const socialLinks = [
    { icon: Mail, href: "mailto:info@bcansolutions.com", label: "Email" },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/17H3U6GLnk/",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/b-can-solutions/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/bcan.solutions?igsh=ZmMyNDZudTh5enFq",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-4">
            <Link
              to="/"
              className="inline-block text-2xl font-bold text-pink-600 hover:text-pink-700 transition-colors"
            >
              BCAN
            </Link>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              Revolutionizing breast cancer detection through innovative
              technology.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-pink-600 transition-colors text-sm md:text-base block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">
              Resources
            </h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link
                    to={resource.path}
                    className="text-gray-600 hover:text-pink-600 transition-colors text-sm md:text-base block py-1"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Registration Section */}
          <div className="col-span-2 md:col-span-3">
            <h4 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">
              Register to stay up-to-date
            </h4>
            {isSubmitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p className="text-sm font-medium">
                  Successfully registered. Thank You!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter a valid email address"
                    className={`w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                      !isValidEmail ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {!isValidEmail && (
                    <p className="text-red-500 text-xs mt-1">
                      Please enter a valid email address
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  REGISTER
                </button>
              </form>
            )}

            {/* Connect Section - moved below register button */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-sm md:text-base">
                Connect With Us
              </h4>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-pink-600 transition-colors p-2"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                Stay updated with our latest news and developments
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">
              © {new Date().getFullYear()} BCAN Solutions. All rights reserved.
            </p>
            <p className="text-xs md:text-sm max-w-2xl mx-auto">
              Confidentiality Notice: The information contained in this website
              is confidential and intended solely for the use of BCAN Solutions
              and its authorized partners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
