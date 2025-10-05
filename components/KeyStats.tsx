import React from "react";

function KeyStats() {
  const stats = [
    { value: "2025", label: "Start of Project" },
    { value: "24", label: "Construction Period" },
    { value: "371", label: "Total Road Length" },
    { value: "23", label: "Operation and Maintenance" },
    { value: "25", label: "Year" },
  ];

  return (
    <section className="bg-white/20 h-full w-full">
      <div className="relative w-full max-w-full mx-auto">
        {/* Background with gradient and pattern */}
        <div
          className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-bl-3xl rounded-br-3xl shadow-2xl overflow-hidden"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, rgba(251, 191, 36, 0.05) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(245, 158, 11, 0.05) 25%, transparent 25%)
          `,
            backgroundSize: "60px 60px, 80px 80px, 20px 20px, 20px 20px",
          }}
        >
          {/* Golden border effect */}
          <div className="absolute inset-0 p-1 rounded-bl-3xl rounded-br-3xl">
            <div className="w-full h-full bg-white rounded-bl-3xl rounded-br-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-8 sm:px-8 sm:py-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="font-bold font-heading text-[#E6B102] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider drop-shadow-md">
                KEY STATISTICS
              </h3>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`
                  relative text-center font-[family-name:var(--font-jost)] group transition-all duration-300 hover:scale-105 cursor-pointer
                  ${index < stats.length - 1 ? "border-r-2 border-amber-300" : ""}
                  ${index === 4 && "sm:col-span-2 lg:col-span-1"}
                `}
                >
                  {/* Container for overlapping text */}
                  <div className="relative h-20 flex items-center justify-center">
                    {/* Stat Value - visible by default, grey on hover */}
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-[family-name:var(--font-jost)] sm:text-5xl lg:text-5xl xl:text-5xl font-extrabold text-gray-800 transition-all duration-300 group-hover:text-gray-400 group-hover:opacity-100">
                      {stat.value}
                    </div>

                    {/* Stat Label - hidden by default, orange on hover */}
                    <div className="absolute inset-0  flex items-center justify-center bg-amber-300 rounded-full text-xl sm:text-2xl lg:text-sm font-bold text-black uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 px-2">
                      {stat.label}
                    </div>
                  </div>

                  {/* Separator line - only between items, not after last */}
                  {index < stats.length - 1 && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-amber-300 to-transparent hidden lg:block"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-20"></div>
          <div className="absolute top-8 right-6 w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-15"></div>
          <div className="absolute bottom-6 left-8 w-4 h-4 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full opacity-25"></div>
        </div>
      </div>
    </section>
  );
}

export default KeyStats;
