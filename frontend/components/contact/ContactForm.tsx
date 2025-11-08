"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xjljds", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-card dark:bg-[#1a1a1a] p-8 rounded-lg border border-border dark:border-white/10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-3xl font-heading font-bold text-foreground dark:text-white mb-8"
        variants={itemVariants}
      >
        Send us a Message
      </motion.h2>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <motion.div
          className="mb-6 p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Thank you! Your message has been sent successfully. We will get back
          to you soon.
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          className="mb-6 p-4 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          There was an error sending your message. Please try again.
        </motion.div>
      )}

      <div className="space-y-6">
        {/* Name Field */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground dark:text-white mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-background dark:bg-[#0a0a0a] border border-border dark:border-white/10 text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-gray-500 focus:outline-none focus:border-[#fdb913] transition-colors"
            placeholder="Your name"
          />
        </motion.div>

        {/* Email Field */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground dark:text-white mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-background dark:bg-[#0a0a0a] border border-border dark:border-white/10 text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-gray-500 focus:outline-none focus:border-[#fdb913] transition-colors"
            placeholder="your@email.com"
          />
        </motion.div>

        {/* Phone Field */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground dark:text-white mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-background dark:bg-[#0a0a0a] border border-border dark:border-white/10 text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-gray-500 focus:outline-none focus:border-[#fdb913] transition-colors"
            placeholder="+260 XXX XXX XXX"
          />
        </motion.div>

        {/* Subject Field */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground dark:text-white mb-2">
            Subject
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-background dark:bg-[#0a0a0a] border border-border dark:border-white/10 text-foreground dark:text-white focus:outline-none focus:border-[#fdb913] transition-colors"
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Project Information">Project Information</option>
            <option value="Business Partnership">Business Partnership</option>
            <option value="Community Engagement">Community Engagement</option>
            <option value="Employment">Employment</option>
            <option value="Other">Other</option>
          </select>
        </motion.div>

        {/* Message Field */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-semibold text-foreground dark:text-white mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-background dark:bg-[#0a0a0a] border border-border dark:border-white/10 text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-gray-500 focus:outline-none focus:border-[#fdb913] transition-colors resize-none"
            placeholder="Your message here..."
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#fdb913] rounded-none text-black hover:bg-[#fdb913]/90 font-paragraph py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
      </div>
    </motion.form>
  );
}
