"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Reset form and show success
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-full bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12 lg:p-16"
        >
            <div className="max-w-xl mx-auto">
                <div className="mb-10 text-left">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-black dark:text-white">
                        Send us a Message
                    </h3>
                    <p className="text-muted-foreground dark:text-gray-400">
                        Fill out the form below and our team will get back to you as soon as
                        possible.
                    </p>
                </div>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center text-center py-12 space-y-4 bg-white dark:bg-black/40 border border-green-500/20 rounded-lg"
                    >
                        <div className="h-16 w-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-500" />
                        </div>
                        <h4 className="text-xl font-bold text-black dark:text-white">
                            Message Sent!
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 max-w-xs">
                            Thank you for reaching out. We've received your message and will
                            respond shortly.
                        </p>
                        <Button
                            onClick={() => setIsSubmitted(false)}
                            variant="outline"
                            className="mt-4"
                        >
                            Send Another Message
                        </Button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-black dark:text-white">Full Name</Label>
                            <Input
                                id="name"
                                name="name"
                                required
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-white dark:bg-black border-input focus:border-[#FDDB59] transition-colors h-12"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-black dark:text-white">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-white dark:bg-black border-input focus:border-[#FDDB59] transition-colors h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject" className="text-black dark:text-white">Subject</Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder="Project Inquiry"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="bg-white dark:bg-black border-input focus:border-[#FDDB59] transition-colors h-12"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-black dark:text-white">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                required
                                placeholder="How can we help you?"
                                value={formData.message}
                                onChange={handleChange}
                                className="min-h-[150px] bg-white dark:bg-black border-input focus:border-[#FDDB59] transition-colors resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 bg-[#FDDB59] hover:bg-[#E1AF1C] text-black font-bold uppercase tracking-wide transition-all duration-300"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </form>
                )}
            </div>
        </motion.div>
    );
}
