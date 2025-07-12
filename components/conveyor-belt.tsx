"use client"

import { useEffect, useState } from "react"

interface ConveyorBeltProps {
  onBoxClick: () => void
  onItemClick: () => void
}

export default function ConveyorBelt({ onBoxClick, onItemClick }: ConveyorBeltProps) {
  const [boxPosition, setBoxPosition] = useState(0)
  const [showItems, setShowItems] = useState(false)
  const [boxOpened, setBoxOpened] = useState(false)
  const [celebrationActive, setCelebrationActive] = useState(false)
  const [animationStarted, setAnimationStarted] = useState(false)
  const [boxVibrating, setBoxVibrating] = useState(false)
  const [boxPreparing, setBoxPreparing] = useState(false)

  useEffect(() => {
    const leftEndPosition = 80
    setBoxPosition(leftEndPosition)

    // Box preparation phase
    const prepareTimer = setTimeout(() => {
      setBoxPreparing(true)
    }, 1000)

    // Start smooth movement
    const startTimer = setTimeout(() => {
      setAnimationStarted(true)
      setBoxPreparing(false)
      const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200
      const rightEndPosition = screenWidth - 280
      setBoxPosition(rightEndPosition)
    }, 2500)

    // Gentle vibration phase
    const vibrationTimer = setTimeout(() => {
      setBoxVibrating(true)
    }, 9500) // 2.5s delay + 7s travel time

    // Smooth opening
    const openTimer = setTimeout(() => {
      setBoxVibrating(false)
      setBoxOpened(true)
      setCelebrationActive(true)

      setTimeout(() => {
        setShowItems(true)
      }, 300)
    }, 12000)

    return () => {
      clearTimeout(prepareTimer)
      clearTimeout(startTimer)
      clearTimeout(vibrationTimer)
      clearTimeout(openTimer)
    }
  }, [])

  const celebrationItems = [
    { id: 1, emoji: "📦", delay: 0, angle: -75, distance: 160, force: "high", color: "blue" },
    { id: 2, emoji: "🍶", delay: 0.1, angle: -55, distance: 180, force: "medium", color: "purple" },
    { id: 3, emoji: "📋", delay: 0.2, angle: -35, distance: 170, force: "high", color: "cyan" },
    { id: 4, emoji: "🏷️", delay: 0.3, angle: -15, distance: 190, force: "low", color: "pink" },
    { id: 5, emoji: "📦", delay: 0.4, angle: 5, distance: 165, force: "medium", color: "green" },
    { id: 6, emoji: "🫧", delay: 0.5, angle: 25, distance: 175, force: "high", color: "yellow" },
    { id: 7, emoji: "📮", delay: 0.6, angle: 45, distance: 185, force: "medium", color: "orange" },
    { id: 8, emoji: "🎁", delay: 0.7, angle: 65, distance: 160, force: "high", color: "red" },
  ]

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Ultra-Modern Conveyor Belt System */}
      <div className="absolute bottom-8 left-0 right-0 h-32 md:h-40 perspective-1000">
        {/* Enhanced Belt Shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-radial from-black/80 via-black/40 to-transparent blur-2xl animate-shadow-pulse" />

        {/* Modern Support Frame */}
        <div className="absolute bottom-0 left-0 right-0 h-10 md:h-12">
          {/* Sleek Support Legs */}
          {[10, 25, 40, 55, 70, 85].map((position, index) => (
            <div
              key={index}
              className="absolute bottom-0 w-3 md:w-4 h-12 md:h-16 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-600 rounded-t-lg shadow-lg animate-support-glow"
              style={{
                left: `${position}%`,
                transform: `rotate(${index % 2 === 0 ? "0.5deg" : "-0.5deg"})`,
                animationDelay: `${index * 0.2}s`,
              }}
            />
          ))}

          {/* Premium Base Frame */}
          <div className="absolute bottom-10 md:bottom-12 left-6 right-6 h-4 md:h-5 bg-gradient-to-b from-slate-400 via-slate-500 to-slate-700 rounded-lg shadow-2xl animate-base-glow" />
        </div>

        {/* Ultra-Modern Belt Structure */}
        <div className="absolute bottom-10 md:bottom-12 left-6 right-6 h-20 md:h-24 transform-gpu">
          {/* Premium Belt Housing */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-500 rounded-2xl shadow-2xl animate-housing-glow">
            {/* Advanced Belt Surface */}
            <div className="absolute top-2 left-2 right-2 bottom-2 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-xl overflow-hidden">
              {/* Ultra-Smooth Moving Pattern */}
              <div className="absolute inset-0 bg-advanced-belt-pattern animate-ultra-smooth-belt opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/40 to-transparent animate-ultra-smooth-shine" />

              {/* Premium Texture Lines */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 h-px bg-slate-400/30 animate-ultra-smooth-belt"
                    style={{ top: `${12.5 * (i + 1)}%` }}
                  />
                ))}
              </div>

              {/* Smooth Direction Indicators */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="flex space-x-12">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="text-slate-300 text-xl animate-ultra-smooth-belt">
                      →
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Belt Edges */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-slate-100 to-slate-300 rounded-t-2xl" />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-2xl" />
          </div>

          {/* Ultra-Modern Roller Systems */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3">
            <div className="w-8 h-16 md:w-10 md:h-20 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 rounded-full shadow-2xl animate-ultra-smooth-spin border-4 border-slate-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-roller-shine" />
            </div>
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3">
            <div className="w-8 h-16 md:w-10 md:h-20 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 rounded-full shadow-2xl animate-ultra-smooth-spin border-4 border-slate-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-roller-shine" />
            </div>
          </div>

          {/* Additional Premium Rollers */}
          {[1 / 4, 2 / 4, 3 / 4].map((position, index) => (
            <div
              key={index}
              className="absolute bottom-0 transform translate-y-3"
              style={{ left: `${position * 100}%` }}
            >
              <div className="w-4 h-8 md:w-5 md:h-10 bg-gradient-to-r from-slate-300 to-slate-500 rounded-full shadow-lg animate-ultra-smooth-spin" />
            </div>
          ))}
        </div>
      </div>

      {/* Ultra-Premium Animated Box */}
      <div
        className={`absolute bottom-32 md:bottom-36 w-20 h-20 md:w-28 md:h-28 cursor-pointer transform transition-all duration-300 hover:scale-110 ${
          boxPreparing ? "animate-box-prepare" : ""
        } ${boxVibrating ? "animate-ultra-smooth-vibration" : ""} ${
          boxOpened ? "scale-125 animate-ultra-smooth-explosion" : ""
        } ${animationStarted ? "transition-all duration-[7000ms] ease-in-out" : ""}`}
        style={{
          left: `${boxPosition}px`,
          zIndex: 20,
        }}
        onClick={onBoxClick}
      >
        <div className="relative w-full h-full">
          {/* Ultra-Smooth Box Shadow */}
          <div
            className={`absolute -bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-5 md:w-24 md:h-6 bg-black/40 rounded-full blur-xl ${
              boxVibrating ? "animate-ultra-smooth-shadow-vibration" : ""
            } ${boxPreparing ? "animate-shadow-prepare" : ""}`}
          />

          {/* Premium Box Design */}
          <div className="w-full h-full bg-gradient-to-br from-amber-100 via-amber-200 to-amber-400 border-3 border-amber-500 rounded-xl shadow-2xl relative overflow-hidden">
            {/* Advanced Cardboard Texture */}
            <div className="absolute inset-0 bg-premium-cardboard-texture opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-50/60 to-amber-600/30" />

            {/* Preparation Glow Effect */}
            {boxPreparing && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-prepare-glow rounded-xl" />
            )}

            {/* Ultra-Smooth Pressure Indicators */}
            {boxVibrating && (
              <>
                <div className="absolute inset-3 border-2 border-red-400/60 rounded-lg animate-ultra-smooth-pressure" />
                <div
                  className="absolute inset-5 border border-orange-400/60 rounded-lg animate-ultra-smooth-pressure"
                  style={{ animationDelay: "0.1s" }}
                />
                <div
                  className="absolute inset-7 border border-yellow-400/60 rounded animate-ultra-smooth-pressure"
                  style={{ animationDelay: "0.2s" }}
                />
              </>
            )}

            {/* Ultra-Smooth Flap Opening */}
            {boxOpened && (
              <>
                <div
                  className="absolute -top-5 md:-top-7 left-0 w-full h-7 md:h-9 bg-gradient-to-br from-amber-200 to-amber-400 border border-amber-500 rounded-t-xl transform -rotate-25 origin-bottom animate-ultra-smooth-flap-left shadow-2xl"
                  style={{ zIndex: 5 }}
                />
                <div
                  className="absolute -top-5 md:-top-7 left-0 w-full h-7 md:h-9 bg-gradient-to-br from-amber-200 to-amber-400 border border-amber-500 rounded-t-xl transform rotate-25 origin-bottom animate-ultra-smooth-flap-right shadow-2xl"
                  style={{ zIndex: 5, animationDelay: "0.1s" }}
                />
                <div
                  className="absolute -top-7 md:-top-9 left-0 w-full h-7 md:h-9 bg-gradient-to-br from-amber-100 to-amber-300 border border-amber-500 rounded-t-xl transform -rotate-8 origin-bottom animate-ultra-smooth-flap-center shadow-2xl"
                  style={{ zIndex: 6, animationDelay: "0.2s" }}
                />
              </>
            )}

            {/* Premium Box Details */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm md:text-base font-bold text-amber-900 mb-1 animate-text-glow">PREMIUM</span>
              <span className="text-xs md:text-sm font-bold text-amber-800">PACKAGE</span>
            </div>

            {/* Premium Labels */}
            <div className="absolute top-1 right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-[8px] md:text-[10px] text-white font-bold">⚠</span>
            </div>
            <div className="absolute bottom-1 left-1 text-[8px] md:text-[10px] font-bold text-amber-900 transform -rotate-12">
              THIS SIDE UP
            </div>

            {/* Status Indicators */}
            {boxPreparing && (
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                <div className="animate-ultra-smooth-bounce text-xs text-blue-500 bg-blue-100 px-3 py-1 rounded-full font-bold border-2 border-blue-400 shadow-lg">
                  🔄 PREPARING...
                </div>
              </div>
            )}

            {boxVibrating && (
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                <div className="animate-ultra-smooth-bounce text-xs text-red-500 bg-red-100 px-3 py-1 rounded-full font-bold border-2 border-red-400 shadow-lg">
                  ⚠ PRESSURE BUILDING!
                </div>
              </div>
            )}

            {!boxOpened && animationStarted && !boxVibrating && !boxPreparing && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="animate-ultra-smooth-bounce text-xs text-white bg-blue-500 px-3 py-1 rounded-full font-medium shadow-lg">
                  🚀 TRAVELING...
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ultra-Premium Celebration Items */}
      {showItems && (
        <div className="absolute inset-0" style={{ zIndex: 30 }}>
          {celebrationItems.map((item) => {
            const radians = (item.angle * Math.PI) / 180
            const distance =
              typeof window !== "undefined" && window.innerWidth < 768 ? item.distance * 0.7 : item.distance
            const x = Math.cos(radians) * distance
            const y = Math.sin(radians) * distance

            return (
              <div
                key={item.id}
                className={`absolute text-3xl md:text-5xl cursor-pointer hover:scale-150 transition-all duration-500 drop-shadow-2xl ${
                  item.force === "high"
                    ? "animate-ultra-smooth-launch-high"
                    : item.force === "medium"
                      ? "animate-ultra-smooth-launch-medium"
                      : "animate-ultra-smooth-launch-low"
                }`}
                style={{
                  right: `${220 - x}px`,
                  bottom: `${180 - y}px`,
                  animationDelay: `${item.delay}s`,
                  zIndex: 35,
                }}
                onClick={onItemClick}
              >
                <div className="animate-ultra-smooth-float" style={{ animationDelay: `${item.delay + 0.8}s` }}>
                  <div className="relative">
                    {item.emoji}
                    <div
                      className={`absolute inset-0 animate-ultra-smooth-glow bg-${item.color}-300/40 rounded-full blur-lg`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-${item.color}-400/30 to-transparent rounded-full animate-ultra-smooth-trail`}
                    />
                    <div className="absolute -inset-2 bg-white/20 rounded-full animate-ping opacity-20" />
                  </div>
                </div>
              </div>
            )
          })}

          {/* Ultra-Premium Explosion Particles */}
          {celebrationActive && (
            <div className="absolute" style={{ right: "240px", bottom: "220px", zIndex: 25 }}>
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute rounded-full animate-ultra-smooth-particle-explosion ${
                    i % 5 === 0
                      ? "w-4 h-4 bg-yellow-400"
                      : i % 5 === 1
                        ? "w-3 h-3 bg-orange-500"
                        : i % 5 === 2
                          ? "w-5 h-5 bg-red-400"
                          : i % 5 === 3
                            ? "w-2 h-2 bg-pink-400"
                            : "w-1 h-1 bg-white"
                  }`}
                  style={{
                    animationDelay: `${i * 0.01}s`,
                    transform: `rotate(${i * 9}deg)`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Ultra-Smooth Progress Indicator */}
      <div className="absolute bottom-2 left-6 right-6 h-2 bg-slate-700/30 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          className={`h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full transition-all duration-[7000ms] ease-in-out shadow-lg ${
            animationStarted ? "w-full" : "w-0"
          }`}
        />
      </div>

      {/* Ultra-Modern Status Display */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center">
        <div
          className={`backdrop-blur-xl rounded-2xl px-6 py-3 text-sm font-medium transition-all duration-500 border ${
            boxPreparing
              ? "bg-blue-500/20 text-blue-100 border-blue-400/30 animate-ultra-smooth-pulse"
              : boxVibrating
                ? "bg-red-500/20 text-red-100 border-red-400/30 animate-ultra-smooth-pulse"
                : boxOpened
                  ? "bg-green-500/20 text-green-100 border-green-400/30"
                  : "bg-slate-800/20 text-white border-white/20"
          }`}
        >
          {!animationStarted && "🎬 Ready to begin the journey..."}
          {boxPreparing && "🔄 Box preparing for departure..."}
          {animationStarted && !boxVibrating && !boxOpened && "🚀 Box smoothly gliding across the belt..."}
          {boxVibrating && "⚠ Pressure building for explosive opening!"}
          {boxOpened && !showItems && "💥 Spectacular explosion in progress!"}
          {showItems && "🎉 Items floating gracefully! Click to explore our products!"}
        </div>
      </div>
    </div>
  )
}
