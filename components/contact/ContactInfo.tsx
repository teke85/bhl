"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ContactInfoProps {
  email?: string;
  phone?: string;
  address?: string;
  workingHours?: string;
}

export default function ContactInfo({
  email = "info@westerncorridor.com",
  phone,
  address = "Western Corridor Limited\nSolwezi\nZambia",
  workingHours = "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed",
}: ContactInfoProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      details: email.split("\n").filter(Boolean),
    },
    {
      icon: "📍",
      title: "Address",
      details: address.split("\n").filter(Boolean),
    },
    {
      icon: "🕐",
      title: "Business Hours",
      details: workingHours.split("\n").filter(Boolean),
    },
  ];

  if (phone) {
    contactMethods.unshift({
      icon: "📞",
      title: "Phone",
      details: phone.split("\n").filter(Boolean),
    });
  }

  return (
    <motion.div
      ref={ref}
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {contactMethods.map((method, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-lg bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 hover:border-[#fdb913] transition-colors"
          variants={itemVariants}
          whileHover={{ y: -5 }}
        >
          <div className="text-4xl mb-3">{method.icon}</div>
          <h3 className="text-xl font-heading font-bold text-foreground dark:text-white mb-3">
            {method.title}
          </h3>
          <div className="space-y-2">
            {method.details.map((detail, idx) => (
              <p key={idx} className="text-muted-foreground dark:text-gray-400">
                {detail}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
