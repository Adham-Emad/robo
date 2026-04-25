"use client"

import { useEffect, useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export default function InnovationPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])



  const steps = [
    {
      step: 1,
      title: "Master/Slave Link",
      spec: "HC-05 Auto-Pairing",
      description: "Glove (Master) automatically establishes a zero-latency Bluetooth connection with the Arm (Slave).",
    },
    {
      step: 2,
      title: "Motion Tracking",
      spec: "MPU6050 Gyroscope",
      description: "Captures real-time X and Y axis acceleration data from the user's hand movements.",
    },
    {
      step: 3,
      title: "Arm Mirroring",
      spec: "Servo Synchronization",
      description: "Translates gyro data into precise 0-180° angles, instantly mirroring the hand's position.",
    },
    {
      step: 4,
      title: "Fluid Control",
      spec: "Tactile Push Button", // التعديل هنا
      description: "Pressing and holding the button on the glove activates the 12V water pump. Releasing it stops the flow instantly.",
    },
    {
      step: 5,
      title: "Safety Halt",
      spec: "Emergency Kill Switch",
      description: "Physical override instantly cuts MOSFET gate signal, ensuring safe shutdown of the pump.",
    },
  ]

  const controlLogic = [
    {
      component: "Gyroscope",
      icon: "🦾",
      condition: "Real-time X/Y Shift",
      output: "Map to 0-180°",
      action: "Instant Servo Movement",
      status: "Continuous Tracking",
      bgClass: "bg-cyan-500/10 border-cyan-500/30",
    },
    {
      component: "Action Button", // التعديل هنا
      icon: "🔘",
      condition: "Button State == HIGH",
      output: "PWM Signal = 255",
      action: "Dispense Fluid",
      status: "Momentary Active",
      bgClass: "bg-blue-500/10 border-blue-500/30",
    },
    {
      component: "Kill Switch",
      icon: "🛑",
      condition: "Switch == OFF",
      output: "PWM Signal = 0",
      action: "Cut 12V Power Immediately",
      status: "Priority Override",
      bgClass: "bg-red-500/10 border-red-500/30",
    },
  ]

  return (
    <main className="pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div
          className={`mb-24 text-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-accent to-cyan-400 bg-clip-text text-transparent">
              Wearable Gesture Control
            </span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance mb-12">
            A sophisticated control system that translates human hand motions into real-time robotic kinematics, coupled with an instant-response fluid dispensing mechanism.
          </p>
          
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
              <source src="/images/production-robot-animation-gif-download-11188219.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* ======================================================== */}
          {/* ======================================================== */}

          <div className="flex justify-center gap-2 mt-12">
            <div className="h-1 w-12 bg-gradient-to-r from-orange-400 to-cyan-400 rounded-full" />
          </div>
        </div>
        

        {/* Process Flow - 5 Steps */}
        <div
          className={`mb-24 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">System Workflow</h2>

          {/* Step Cards Grid */}
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {steps.map((step, idx) => (
              <div
                key={step.step}
                className={`relative transition-all duration-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${150 + idx * 50}ms` }}
              >
                <div className="h-full p-6 rounded-xl bg-card border border-primary/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center font-bold text-sm text-background shadow-lg">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    <h3 className="font-bold text-base text-foreground mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">{step.spec}</p>
                    <p className="text-sm text-foreground/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Flow Arrows */}
          <div className="flex justify-center items-center gap-2 mb-8 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5].map((num, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-xs font-bold text-accent">
                  {num}
                </div>
                {idx < 4 && <ArrowRight className="w-4 h-4 text-accent/40 flex-shrink-0" />}
              </div>
            ))}
          </div>
        </div>

        {/* Logic Cards Section */}
        <div
          className={`mb-24 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "300ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Core Control Logic</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {controlLogic.map((logic, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-xl border transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 ${logic.bgClass}`}
                style={{
                  transitionDelay: `${500 + idx * 100}ms`,
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {/* Logic Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{logic.icon}</span>
                  <h3 className="text-xl font-bold text-foreground">
                    {logic.component}
                  </h3>
                </div>

                {/* Logic Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase">Trigger Condition</p>
                      <p className="text-sm font-mono text-foreground">{logic.condition}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase">Data Output</p>
                      <p className="text-sm font-mono text-foreground">{logic.output}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase">Hardware Action</p>
                      <p className="text-sm font-mono text-foreground">{logic.action}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-foreground/60 uppercase">System Status</p>
                      <p className="text-sm font-mono text-foreground">{logic.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs Section */}
        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
            <h3 className="text-xl font-bold text-foreground mb-6">Smart Glove Interface</h3>
            <div className="mb-6 flex justify-center">
              <img
                src="/images/gloves1.jpg"
                alt="Wearable Glove Sensors"
                className="max-w-xs rounded-lg shadow-lg"
              />
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-sm text-foreground/80">
                  <strong>Kinematics:</strong> MPU6050 (6-axis Accel/Gyro)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-sm text-foreground/80">
                  <strong>Trigger:</strong> Momentary Tactile Switch {/* التعديل هنا */}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-sm text-foreground/80">
                  <strong>Telemetry:</strong> HC-05 Bluetooth (Master Mode)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-sm text-foreground/80">
                  <strong>Latency:</strong> Optimized to ~15ms delay
                </span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/20 transition-all">
            <h3 className="text-xl font-bold text-foreground mb-6">Fluid Dispensing System</h3>
            <div className="mb-6 flex justify-center">
              <img
                src="/images/pump.jpg"
                alt="Water Pump and MOSFET"
                className="max-w-xs rounded-lg shadow-lg"
              />
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-sm text-foreground/80">
                  <strong>End Effector:</strong> Precision Fluid Nozzle
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-sm text-foreground/80">
                  <strong>Pump Specs:</strong> 12V / 25W High-Torque Motor
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-sm text-foreground/80">
                  <strong>Power Control:</strong> IRLZ44N MOSFET Switching
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-sm text-foreground/80">
                  <strong>Safety:</strong> Hardware Emergency Kill Switch
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Special Thanks Section */}
        <div
          className={`mt-24 p-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/30 text-center transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">🙏</span>
            Special Thanks
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            This project would not have been possible without our university's support, mentors' guidance, and our dedicated team. We're grateful for every contribution that helped evolve this project from a basic mechanical arm into an advanced, gesture-controlled fluid dispensing system.
          </p>
        </div>
      </div>
    </main>
  )
}