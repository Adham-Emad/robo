"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  quote: string
  department: string
  expertise: string[]
}

export default function TeamPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const teamMembers: TeamMember[] = [
    // ================== Hardware Section ==================
    {
      id: 1,
      name: "Adham Emad-Eldin",
      role: "Hardware Developer",
      department: "Hardware",
      bio: "Works on integrating the hardware kit, managing wired connections with Arduino, power systems, and sensors.",
      image: "/images/Adham.jpg", // صورته الحقيقية
      quote: "Hardware is the backbone of any robotic system.",
      expertise: ["Arduino Integration", "Wiring", "Sensors"],
    },
    {
      id: 2,
      name: "Hussien Waled Hussien",
      role: "Hardware Contributor",
      department: "Hardware",
      bio: "Focuses on assembling hardware components, ensuring all physical connections are secure.",
      image: "/images/Male.jpeg",
      quote: "Precision in assembly ensures precision in performance.",
      expertise: ["Assembly", "Maintenance", "Testing"],
    },
    {
      id: 3,
      name: "Ali Ashraf Mohamed",
      role: "Hardware Contributor",
      department: "Hardware",
      bio: "Assists in power distribution and ensuring all electronic components work harmoniously.",
      image: "/images/Aswany.jpg", // صورته الحقيقية
      quote: "Every connection matters in robotics.",
      expertise: ["Power Systems", "Circuit Layout", "Support"],
    },
    {
      id: 11,
      name: "Eslam Ali",
      role: "Team Member",
      department: "Hardware",
      bio: "Supported the hardware team during the assembly phase and project organization.",
      image: "/images/Male.jpeg",
      quote: "Teamwork makes the dream work.",
      expertise: ["Project Support", "Team Coordination"],
    },
    {
      id: 12,
      name: "Zain Elabdin Atef",
      role: "Team Member",
      department: "Hardware",
      bio: "Participated in hardware discussions and helped in the overall physical setup.",
      image: "/images/Male.jpeg",
      quote: "Every small effort counts.",
      expertise: ["Assembly Support", "Logistics"],
    },

    // ================== Software Section ==================
    {
      id: 4,
      name: "Osama Sameh Tony",
      role: "Software Developer",
      department: "Software",
      bio: "Works on code development, sensor degree calibration, and controlling arm operations.",
      image: "/images/Osama.jpg", // صورته الحقيقية
      quote: "Code brings the arm to life.",
      expertise: ["Algorithm Design", "Calibration", "C++"],
    },
    {
      id: 13,
      name: "Adham Hassen Mohamed",
      role: "Software Contributor",
      department: "Software",
      bio: "Collaborated with the software team to test logic and organize the codebase.",
      image: "/images/Male.jpeg",
      quote: "Logic is the language of machines.",
      expertise: ["Logic Testing", "Code Review"],
    },
    {
      id: 14,
      name: "Youssef Mohamed Shahat",
      role: "Team Member",
      department: "Software",
      bio: "Assisted in code documentation and software structure planning.",
      image: "/images/Male.jpeg",
      quote: "Structure is key to good software.",
      expertise: ["Planning", "Documentation"],
    },

    // ================== Testing Section ==================
    {
      id: 5,
      name: "Rogina Yasser",
      role: "Testing Coordinator",
      department: "Testing",
      bio: "Conducts testing to identify missed details and ensure all components function correctly.",
      image: "/images/Female.jpeg",
      quote: "Thorough testing ensures flawless execution.",
      expertise: ["QA Testing", "Debugging", "Reports"],
    },
    {
      id: 6,
      name: "Hanin Mohamed",
      role: "Testing Contributor",
      department: "Testing",
      bio: "Responsible for checking program functionality and verifying project requirements.",
      image: "/images/Female.jpeg",
      quote: "Quality is achieved through testing.",
      expertise: ["Performance Check", "Validation"],
    },
    {
      id: 15,
      name: "Asmaa Ashraf",
      role: "Team Member",
      department: "Testing",
      bio: "Helped in running final test scenarios and recording system responses.",
      image: "/images/Female.jpeg",
      quote: "Attention to detail is everything.",
      expertise: ["Scenario Testing", "Data Recording"],
    },
    {
      id: 16,
      name: "Shahd Yassin",
      role: "Team Member",
      department: "Testing",
      bio: "Supported the testing team in evaluating the Bluetooth range and stability.",
      image: "/images/Female.jpeg",
      quote: "Consistency is reliable.",
      expertise: ["Field Testing", "Observation"],
    },

    // ================== Design Section ==================
    {
      id: 7,
      name: "Toqa Mohamed Mansour",
      role: "Design Contributor",
      department: "Design",
      bio: "Works on visual design and component placement for an optimal physical appearance.",
      image: "/images/Female.jpeg",
      quote: "Design is where function meets beauty.",
      expertise: ["Visual Layout", "Aesthetics"],
    },
    {
      id: 8,
      name: "Mariem Ibrahim Ahmed",
      role: "Design Contributor",
      department: "Design",
      bio: "Assists in shaping the final appearance and coordinating component design.",
      image: "/images/Female.jpeg",
      quote: "Great design is invisible—it just works.",
      expertise: ["3D Concept", "Visuals"],
    },
    {
      id: 17,
      name: "Basmala Mostafa",
      role: "Team Member",
      department: "Design",
      bio: "Contributed ideas for the UI layout and overall presentation aesthetics.",
      image: "/images/Female.jpeg",
      quote: "First impressions matter.",
      expertise: ["UI Feedback", "Presentation"],
    },
    {
      id: 18,
      name: "Mohab Samir",
      role: "Team Member",
      department: "Design",
      bio: "Helped in organizing design assets and selecting the color palette.",
      image: "/images/Male.jpeg",
      quote: "Colors speak louder than words.",
      expertise: ["Asset Management", "Styling"],
    },

    // ================== Support Section ==================
    {
      id: 9,
      name: "Mohamed Ahmed Hamdy",
      role: "Documentation Writer",
      department: "Support",
      bio: "Creates technical writing and documentation, ensuring information is clear.",
      image: "/images/Male.jpeg",
      quote: "Clear documentation is the foundation of knowledge.",
      expertise: ["Technical Writing", "Guides"],
    },
    {
      id: 10,
      name: "Ahmed Abd-elkarem",
      role: "Project Documenter",
      department: "Support",
      bio: "Maintains technical documentation and ensures consistency throughout the project.",
      image: "/images/Male.jpeg",
      quote: "Good documentation empowers teams.",
      expertise: ["Documentation", "Communication"],
    },
    {
      id: 19,
      name: "Ahmed Mohamed Ahmed",
      role: "Team Member",
      department: "Support",
      bio: "Assisted in writing reports and preparing the final presentation slides.",
      image: "/images/Male.jpeg",
      quote: "Communication connects the dots.",
      expertise: ["Slide Prep", "Reporting"],
    },
    {
      id: 20,
      name: "Ahmed Adel",
      role: "Team Member",
      department: "Support",
      bio: "Supported the team by proofreading documents and organizing files.",
      image: "/images/Male.jpeg",
      quote: "Organization saves time.",
      expertise: ["Proofreading", "Filing"],
    },
  ]

  const departments = {
    Hardware: teamMembers.filter((m) => m.department === "Hardware"),
    Software: teamMembers.filter((m) => m.department === "Software"),
    Testing: teamMembers.filter((m) => m.department === "Testing"),
    Design: teamMembers.filter((m) => m.department === "Design"),
    Support: teamMembers.filter((m) => m.department === "Support"),
  }

  const departmentColors = {
    Hardware: "from-blue-600 to-blue-700",
    Software: "from-green-600 to-green-700",
    Testing: "from-orange-600 to-orange-700",
    Design: "from-purple-600 to-purple-700",
    Support: "from-cyan-600 to-cyan-700",
  }

  return (
    <main className="pt-32 pb-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-20 text-center ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
          <h1 className="text-6xl font-bold text-foreground mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
              Meet The Team
            </span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            20 brilliant minds collaborating across 5 departments to bring our robotics project to life.
          </p>
          <div className="flex justify-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
        </div>

        {/* Department-based creative layout */}
        <div className="space-y-20 mb-20">
          {Object.entries(departments).map(([dept, members], deptIdx) => (
            <div
              key={dept}
              className={`transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${100 + deptIdx * 150}ms` }}
            >
              {/* Department Header */}
              <div className="mb-8 flex items-center gap-4">
                <div
                  className={`h-1 w-12 bg-gradient-to-r ${departmentColors[dept as keyof typeof departmentColors]} rounded-full`}
                />
                <h2 className="text-3xl font-bold text-foreground">{dept}</h2>
                <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {members.length} {members.length === 1 ? "member" : "members"}
                </span>
              </div>

              {/* Members Grid - Unified Compact Layout for all departments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {members.map((member, idx) => (
                  <div
                    key={member.id}
                    className={`group rounded-xl overflow-hidden border border-accent/20 hover:border-accent/60 transition-all duration-500 cursor-pointer h-80 flex flex-col ${
                      selectedMember === member.id ? "ring-2 ring-accent" : ""
                    }`}
                    onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
                    style={{
                      transitionDelay: `${idx * 30}ms`,
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                    }}
                  >
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden flex-shrink-0 bg-accent/5">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />
                    </div>

                    {/* Info Container */}
                    <div className="flex-1 p-4 bg-card flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-foreground text-sm group-hover:text-accent transition-colors line-clamp-1">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold text-accent mb-2 truncate">{member.role}</p>
                        <p className="text-xs text-foreground/60 line-clamp-2 mb-3">{member.bio}</p>
                      </div>
                      <div className="flex gap-1 flex-wrap">
                        {member.expertise.slice(0, 2).map((skill, i) => (
                          <span key={i} className="text-xs bg-accent/10 text-accent px-1.5 py-0.5 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quote overlay on click */}
                    {selectedMember === member.id && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-accent/95 p-4 flex items-center justify-center text-center animate-fade-in z-10">
                        <p className="text-sm italic text-white font-medium">"{member.quote}"</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats & Values */}
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
            <h4 className="text-3xl font-bold text-accent mb-2">20</h4>
            <p className="text-foreground/80 font-semibold">Team Members</p>
            <p className="text-sm text-foreground/60 mt-2">Dedicated students across 5 departments</p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30">
            <h4 className="text-3xl font-bold text-accent mb-2">5</h4>
            <p className="text-foreground/80 font-semibold">Departments</p>
            <p className="text-sm text-foreground/60 mt-2">Hardware, Software, Testing, Design, Support</p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30">
            <h4 className="text-3xl font-bold text-accent mb-2">1</h4>
            <p className="text-foreground/80 font-semibold">Vision</p>
            <p className="text-sm text-foreground/60 mt-2">Precision robotics through collaborative student effort</p>
          </div>
        </div>
      </div>
    </main>
  )
}