// const ProjectHero = () => {
//     return (
//         <section className="relative bg-[#0a0a0a] pt-32 pb-16 px-4">
//             <div className="container mx-auto max-w-7xl">
//                 <div className="space-y-6">
//                     <h1 className="text-5xl md:text-7xl font-heading font-bold text-white">Project Overview</h1>
//                     <p className="text-xl md:text-2xl font-paragraph text-[#9ca3af] max-w-4xl leading-relaxed">
//                         Rehabilitation and upgrading of 371 km Mutanda to Kaoma Road to international bituminous standards.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ProjectHero

"use client"

import Image from "next/image"

const ProjectHero = () => {
    return (
        <section className="relative bg-background dark:bg-[#0a0a0a] pt-32 pb-16 px-4 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Barotse Highway Construction"
                    fill
                    className="object-cover opacity-40 dark:opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background dark:from-[#0a0a0a]/40 dark:via-[#0a0a0a]/60 dark:to-[#0a0a0a]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="space-y-6">
                    <div className="inline-block px-4 py-2 bg-[#fdb913]/10 border border-[#fdb913]/30 rounded-full">
                        <span className="text-[#fdb913] font-paragraph font-semibold text-sm">371 KM PROJECT</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground dark:text-white">
                        Project Overview
                    </h1>
                    <p className="text-xl md:text-2xl font-paragraph text-muted-foreground dark:text-[#9ca3af] max-w-4xl leading-relaxed">
                        Rehabilitation and upgrading of 371 km Mutanda to Kaoma Road to international bituminous standards,
                        connecting Zambia&apos;s mineral-rich regions to global markets.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProjectHero