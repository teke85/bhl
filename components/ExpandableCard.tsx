"use client"

import type React from "react"
import { useState } from "react"

interface ExpandableCardProps {
  title: string
  description: string
  details: string[]
  icon?: React.ReactNode
  index: number
  specialContent?: React.ReactNode
}

const ExpandableCard = ({ title, description, details, icon, index, specialContent }: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleMouseEnter = () => {
    setIsExpanded(true)
  }

  const handleMouseLeave = () => {
    setIsExpanded(false)
  }

  return (
    <div
      className="group relative transition-all duration-300 ease-out"
      style={{
        marginTop: index === 0 ? "0" : "-12px",
        zIndex: isExpanded ? 100 : 50 - index,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`
          absolute top-0 left-0 pointer-events-auto
          bg-white rounded-lg shadow-xl border border-gray-200
          transition-all duration-500 ease-out overflow-hidden
          ${isExpanded ? "translate-x-[288px] w-80 opacity-100 h-auto" : "translate-x-[268px] w-80 opacity-0 h-[72px]"}
        `}
        style={{
          zIndex: 10 + index,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="px-6 py-4">
          <div className="flex items-start gap-3 mb-3">
            {icon && <div className="text-amber-500 mt-0.5">{icon}</div>}
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 text-base mb-2 leading-tight">{title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{description}</p>
            </div>
          </div>

          {specialContent ? (
            specialContent
          ) : (
            <div className="flex flex-wrap gap-1">
              {details.map((detail, idx) => (
                <span key={idx} className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                  {detail}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main card */}
      <div
        className={`
          relative bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg shadow-lg cursor-pointer
          transition-all duration-300 ease-out w-72 h-[72px]
          ${isExpanded ? "transform scale-[1.02] shadow-amber-500/50 shadow-xl" : "hover:shadow-lg"}
        `}
        style={{
          zIndex: 50 + index,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="px-6 py-4 flex items-center justify-between h-full">
          <div>
            <h3 className="font-bold text-lg text-black leading-tight">{title}</h3>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-4 h-full bg-white rounded-r-lg flex items-center justify-center shadow-sm">
          <div className="w-0.5 h-8 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default ExpandableCard
