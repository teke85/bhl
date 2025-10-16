"use client"

import { Shield, HardHat, AlertTriangle, FileCheck } from "lucide-react"
import Image from "next/image"

const SafetyStandards = () => {
    const standards = [
        {
            icon: Shield,
            title: "ISO 45001 Certified",
            description: "International occupational health and safety management system certification",
        },
        {
            icon: HardHat,
            title: "Worker Safety First",
            description: "Comprehensive PPE requirements and regular safety training for all personnel",
        },
        {
            icon: AlertTriangle,
            title: "Risk Management",
            description: "Proactive hazard identification and mitigation protocols on all construction sites",
        },
        {
            icon: FileCheck,
            title: "Quality Assurance",
            description: "Rigorous testing and inspection procedures at every construction phase",
        },
    ]

    return (
        <section className="bg-muted/30 dark:bg-[#0a0a0a] py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
                        <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Safety Standards" fill className="object-cover" />                        <div className="absolute inset-0 bg-gradient-to-t from-[#fdb913]/20 to-transparent" />
                    </div>

                    {/* Content Side */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground dark:text-white mb-6">
                            Safety & Quality Standards
                        </h2>
                        <p className="text-lg text-muted-foreground dark:text-[#9ca3af] font-paragraph mb-8 leading-relaxed">
                            Our commitment to safety and quality is unwavering. We implement international best practices to ensure
                            the well-being of our workers and the longevity of our infrastructure.
                        </p>

                        <div className="space-y-6">
                            {standards.map((standard, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 p-4 bg-card dark:bg-[#1a1a1a] border border-border dark:border-white/10 rounded-lg hover:border-[#fdb913]/50 transition-all duration-300"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#fdb913]/10 flex items-center justify-center">
                                        <standard.icon className="w-6 h-6 text-[#fdb913]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-heading font-bold text-foreground dark:text-white mb-2">
                                            {standard.title}
                                        </h3>
                                        <p className="text-muted-foreground dark:text-[#9ca3af] font-paragraph">{standard.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SafetyStandards