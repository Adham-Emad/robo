"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatedIcon } from "@/components/animated-icon"
import { Zap, Wrench, Cpu, Layers, Lightbulb, Box, Cog, Target, Gauge, Activity, ShieldCheck, Droplet, Clock, Radio } from "lucide-react"
export default function DesignPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const assemblySteps = [
    {
      icon: Box,
      title: "Base Assembly",
      image: "/images/assembly-base.jpg",
    },
    {
      icon: Layers,
      title: "Lower Arm",
      image: "/images/assembly-lower-arm.jpg",
    },
    {
      icon: Wrench,
      title: "Nozzle Assembly",
      image: "/images/assembly-gripper.jpg",
    },
    {
      icon: Cpu,
      title: "Sensor Integration",
      image: "/images/MPU6050-Gyroscope-Sensor.webp",
    },
    {
      icon: Cog,
      title: "Wrist Mechanism",
      image: "/images/assembly-wrist.png",
    },
    {
      icon: Target,
      title: "Final Assembly",
      image: "/images/final.jpg",
    },
  ]

  // متنساش تعدل سطر الـ import ده فوق عندك في الملف عشان الأيقونات الجديدة تشتغل
  // import { Lightbulb, Activity, Zap, ShieldCheck, Cog, Droplet, Clock, Radio } from "lucide-react"

  const designPhilosophies = [
    {
      icon: Lightbulb,
      title: "Structural Integrity",
      specs: ["PLA 3D-Printed", "Custom Nozzle Mount", "Optimized Load Balance"],
    },
    {
      icon: Activity, // الأيقونة اتغيرت عشان تناسب الحركة
      title: "Kinematic Precision",
      specs: ["MPU6050 Motion Tracking", "Ultra-Low Latency Bluetooth", "1-to-1 Gesture Mapping"],
    },
    {
      icon: Zap,
      title: "Power Isolation",
      specs: ["Dual Supply (5V & 12V)", "MOSFET Pump Control", "Voltage Spike Protection"],
    },
    {
      icon: ShieldCheck, // ضفنالك سيكشن كامل للأمان عشان زرار الطوارئ
      title: "Failsafe Architecture",
      specs: ["Hardware Kill Switch", "Momentary Pump Toggle", "Isolated Logic Board"],
    },
  ]

  const metrics = [
    { icon: Cog, label: "Servo Count", value: "3 (Base, Pitch, Yaw)" }, // وضحنا إنهم 3 ومقسمين إزاي
    { icon: Droplet, label: "Pump Power", value: "12V / 25W" }, // ضفنا قوة البامب
    { icon: Clock, label: "Telemetry Latency", value: "< 20ms" }, // سرعة الاستجابة اللي عملناها بالكود
    { icon: Radio, label: "Comms Range", value: "10m Wireless" }, // ميزة البلوتوث اللاسلكي
  
  ]

  return (
    <main className="pt-24 pb-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 space-y-6 text-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
          <div className="flex justify-center">
            <AnimatedIcon icon={<Wrench className="w-12 h-12" />} size="lg" />
          </div>
          <h1 className="text-6xl font-bold text-accent">DESIGN & ASSEMBLY</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="mb-20">
          <div className="flex justify-center mb-12 gap-4 items-center">
            <AnimatedIcon icon={<Layers className="w-6 h-6" />} size="md" />
            <h2 className="text-3xl font-bold">Assembly Journey</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {assemblySteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={index}
                  className={`group overflow-hidden rounded-2xl border-2 border-accent/20 hover:border-accent/60 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                    isLoaded ? "animate-scale-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden h-56 bg-muted">
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 bg-accent/90 rounded-full flex items-center justify-center animate-bounce-icon">
                        <IconComponent className="w-7 h-7 text-background" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5 bg-card/80 backdrop-blur border-t border-accent/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-accent" />
                      </div>
                      <h3 className="font-bold text-lg">{step.title}</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

            {/* ================= إضافة الـ 3D Video هنا ================= */}
          <div 
            className="max-w-lg mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/20 bg-transparent relative h-[300px] md:h-[400px]"
            style={{ transitionDelay: "200ms" }}
          >
            {/* لمعة خفيفة فوق الفيديو */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none z-10"></div>
            
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
            >
   <source src="/images/robotics-crane-animation-gif-download-14057488.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* ======================================================== */}
          {/* ======================================================== */}

          <div className="flex justify-center gap-3 mt-18">
            <div className="h-1 w-12 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full" />
          </div>
        

        <div className="mb-20">
          <div className="flex justify-center mb-12 gap-4 items-center">
            <AnimatedIcon icon={<Lightbulb className="w-6 h-6" />} size="md" />
            <h2 className="text-3xl font-bold">Core Principles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPhilosophies.map((philosophy, index) => {
              const IconComponent = philosophy.icon
              return (
                <div
                  key={index}
                  className={`p-6 bg-card rounded-2xl border-2 border-accent/30 hover:border-accent/80 transition-all duration-300 transform hover:translate-y-[-8px] ${
                    isLoaded ? "animate-slide-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center animate-bounce-icon">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-center mb-4 text-black">{philosophy.title}</h3>
                  <ul className="space-y-2">
                    {philosophy.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-black/70">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isLoaded ? "animate-slide-in" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border-2 border-accent/40 hover:border-accent/80 transition-all duration-300 text-center hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center animate-bounce-icon">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-2 font-semibold">{metric.label}</p>
                <p className="text-3xl font-bold text-accent">{metric.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
