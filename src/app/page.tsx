"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Brain, 
  Cloud, 
  Phone, 
  Award, 
  Mail, 
  Linkedin,
  Building,
  Code,
  Database,
  Zap,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Download,
  Star,
  Sparkles
} from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black text-white overflow-hidden relative">
      {/* Twinkling Starry Night Sky */}
      <div className="fixed inset-0 z-0">
        {isClient && (
          <div className="absolute inset-0">
            {[...Array(200)].map((_, i) => {
              const x = ((i * 73) + 17) % 100;
              const y = ((i * 37) + 23) % 100;
              const duration = 1.5 + ((i * 41) % 50) / 20;
              const delay = ((i * 53) % 80) / 20;
              
              // Different star sizes and brightness
              const starType = i % 10;
              let size, brightness, twinkleClass;
              
              if (starType < 6) {
                // Small stars (60%)
                size = 1;
                brightness = 0.4 + (i % 40) / 100;
                twinkleClass = 'animate-pulse';
              } else if (starType < 9) {
                // Medium stars (30%)
                size = 2;
                brightness = 0.6 + (i % 30) / 100;
                twinkleClass = 'animate-ping';
              } else {
                // Bright stars (10%)
                size = 3;
                brightness = 0.8 + (i % 20) / 100;
                twinkleClass = 'animate-pulse';
              }
              
              return (
                <div
                  key={i}
                  className={`absolute bg-white rounded-full ${twinkleClass}`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDuration: `${duration}s`,
                    animationDelay: `${delay}s`,
                    opacity: brightness,
                    boxShadow: size > 1 ? `0 0 ${size * 2}px rgba(255, 255, 255, 0.5)` : 'none'
                  }}
                ></div>
              );
            })}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                Andrew Hill
              </motion.div>
              
              <div className="hidden md:flex items-center space-x-8">
                {["About", "Experience", "Skills", "Contact"].map((item) => (
                  <button
                    key={item}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                  >
                    {item}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                  </button>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
              >
                <Download className="h-4 w-4" />
                Resume
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Amazon Connect Developer Specialist • Feb 2025
                <Sparkles className="h-4 w-4 ml-1" />
              </div>
              
              {/* Main Title */}
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Senior Cloud
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Solutions Engineer
                </span>
              </h1>
              
              {/* Professional Summary */}
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                <span className="text-blue-400">Cloud Solutions Architect</span> with 14+ years delivering 
                <span className="text-purple-400">$2M+ in cost savings</span> through AI-powered contact center solutions. 
                Led <span className="text-pink-400">50+ enterprise implementations</span> serving 100K+ daily interactions across AWS, Azure, and hybrid environments.
              </p>




            </motion.div>
          </div>
        </section>

        {/* Technical Skills Constellation */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Technical
                </span>
                <span className="text-white"> Arsenal</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Cloud className="h-5 w-5" />
                  Cloud Platforms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS Connect", "Amazon Lex", "AWS Kendra", "Azure", "AWS Lambda", "S3", "EC2"].map((skill) => (
                    <span key={skill} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI & Automation
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Conversational AI", "Chatbots", "Power Automate", "Power Apps", "Machine Learning"].map((skill) => (
                    <span key={skill} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Development & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["SharePoint", "Power BI", "SSRS", "Visual Basic", "JavaScript", "REST APIs"].map((skill) => (
                    <span key={skill} className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Galaxy */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Certification
                </span>
                <br />
                <span className="text-white">Galaxy</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each certification is a star in my professional constellation, 
                guiding the way to innovative solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Phone,
                  title: "Amazon Connect Developer Specialist",
                  date: "February 2025",
                  badge: "Latest",
                  gradient: "from-blue-500 to-cyan-500",
                  delay: 0,
                  skills: "Conversational AI • Software Development • Contact Center Technology"
                },
                {
                  icon: Brain,
                  title: "AWS Certified AI Practitioner",
                  date: "September 2024",
                  badge: "Early Adopter",
                  gradient: "from-purple-500 to-pink-500",
                  delay: 0.1,
                  skills: "Generative AI • Conversational AI • Artificial Intelligence"
                },
                {
                  icon: Phone,
                  title: "Amazon Connect Communications Specialist",
                  date: "August 2024",
                  badge: "Certified",
                  gradient: "from-orange-500 to-red-500",
                  delay: 0.2,
                  skills: "Contact Center Technology • Customer Experience"
                },
                {
                  icon: Database,
                  title: "AWS Knowledge: Architecting",
                  date: "May 2024",
                  badge: "Certified",
                  gradient: "from-cyan-500 to-blue-500",
                  delay: 0.3,
                  skills: "Chatbots • Conversational AI • Generative AI"
                },
                {
                  icon: Cloud,
                  title: "AWS Certified Cloud Practitioner",
                  date: "April 2024",
                  badge: "Certified",
                  gradient: "from-green-500 to-blue-500",
                  delay: 0.4,
                  skills: "Artificial Intelligence • Generative AI • Conversational AI"
                },
                {
                  icon: Zap,
                  title: "Microsoft Power Platform Fundamentals",
                  date: "February 2022",
                  badge: "Certified",
                  gradient: "from-indigo-500 to-purple-500",
                  delay: 0.5,
                  skills: "Power Apps • Power Automate • Power BI"
                }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: cert.delay, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-xl text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-3">{cert.date}</p>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.skills}</p>
                  
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${cert.gradient} bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium`}>
                    <Star className="h-4 w-4" />
                    {cert.badge}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Nebula */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Experience
                </span>
                <br />
                <span className="text-white">Nebula</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Journey through my professional evolution across the cloud computing universe.
              </p>
            </motion.div>

            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-12 items-start"
              >
                <div className="lg:w-1/3">
                  <div className="text-blue-400 font-medium mb-2">Jun 2023 - Present</div>
                  <div className="text-2xl font-bold text-white mb-2">Percepta LLC</div>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                
                <div className="lg:w-2/3 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Senior Cloud Solutions Engineer
                  </h3>
                  
                  <ul className="space-y-4 text-gray-300 mb-8">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Architected and deployed 25+ cloud-based contact center solutions using AWS Connect, Nice InContact and Twilio, serving 50K+ daily customer interactions with 99.9% uptime</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Led development of AI-powered chatbots using Amazon Lex and AWS Kendra, reducing average response time by 60% and increasing customer satisfaction scores from 3.2 to 4.6/5</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Delivered $800K annual cost savings through cloud optimization strategies, reducing infrastructure costs by 35% while improving system performance by 40%</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-3">
                    {["AWS Connect", "Amazon Lex", "AWS Kendra", "Twilio", "Nice InContact"].map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-12 items-start"
              >
                <div className="lg:w-1/3">
                  <div className="text-green-400 font-medium mb-2">May 2022 - Jun 2023</div>
                  <div className="text-2xl font-bold text-white mb-2">Percepta LLC</div>
                  <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                </div>
                
                <div className="lg:w-2/3 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Senior SysOps Engineer
                  </h3>
                  
                  <ul className="space-y-4 text-gray-300 mb-8">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Managed 100+ Azure & AWS cloud instances supporting 24/7 contact center operations for 15K+ agents, maintaining 99.95% uptime SLA</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Executed seamless hybrid cloud integration connecting 8 on-premise data centers with cloud infrastructure, reducing latency by 45%</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Optimized cloud resource allocation resulting in $400K annual savings while improving system performance by 30%</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-3">
                    {["AWS", "Azure", "Contact Center", "Cloud Infrastructure"].map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 text-green-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-12 items-start"
              >
                <div className="lg:w-1/3">
                  <div className="text-orange-400 font-medium mb-2">Jan 2022 - May 2022</div>
                  <div className="text-2xl font-bold text-white mb-2">Oakwood Systems Group</div>
                  <div className="text-gray-400 text-sm mb-2">St Louis, Missouri</div>
                  <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                </div>
                
                <div className="lg:w-2/3 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Senior Consultant - Microsoft 365 Services
                  </h3>
                  
                  <ul className="space-y-4 text-gray-300 mb-8">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>SOW Creation and Execution focused on Microsoft SharePoint Migrations, Improvements and requests</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Human Computer Interaction and User Experience design for enterprise solutions</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Presales activities and User Experience Design for client engagements</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-3">
                    {["SharePoint", "M365", "UX Design", "Presales"].map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-12 items-start"
              >
                <div className="lg:w-1/3">
                  <div className="text-purple-400 font-medium mb-2">Aug 2012 - Jan 2022</div>
                  <div className="text-2xl font-bold text-white mb-2">Percepta LLC</div>
                  <div className="text-gray-400 text-sm mb-2">Melbourne, Florida • 9 yrs 6 mos</div>
                  <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
                
                <div className="lg:w-2/3 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Senior SharePoint Administrator
                  </h3>
                  
                  <ul className="space-y-4 text-gray-300 mb-8">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Implemented Azure guest access for B2B intranet integration, improving cross-organizational collaboration</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed Power Apps and Power Automate solutions for workflow automation in customer service processes</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Designed embedded PowerBI solutions for real-time contact center reporting and analytics</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Experience with migration: On-premise to Online, Tenant to tenant migrations</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed feedback application with committee review, automated response/notification with dashboards</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-3">
                    {["Power Platform", "SharePoint", "Azure", "Power BI", "UX Design"].map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-12 items-start"
              >
                <div className="lg:w-1/3">
                  <div className="text-teal-400 font-medium mb-2">Mar 2011 - Aug 2012</div>
                  <div className="text-2xl font-bold text-white mb-2">Percepta LLC</div>
                  <div className="text-gray-400 text-sm mb-2">Melbourne, Florida</div>
                  <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
                </div>
                
                <div className="lg:w-2/3 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    SharePoint Administrator
                  </h3>
                  
                  <ul className="space-y-4 text-gray-300 mb-8">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Custom site applications for outbound and inbound multichannel campaigns</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Maintain and develop global intranet infrastructure</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Build and support site templates for operational collaboration</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-3">
                    {["SharePoint", "Contact Center", "UX Design"].map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/30 text-teal-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-12 items-start"
              >
                <div className="lg:w-1/3">
                  <div className="text-amber-400 font-medium mb-2">Jul 2010 - Mar 2011</div>
                  <div className="text-2xl font-bold text-white mb-2">Percepta LLC</div>
                  <div className="text-gray-400 text-sm mb-2">Melbourne, Florida</div>
                  <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                </div>
                
                <div className="lg:w-2/3 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Reporting Specialist
                  </h3>
                  
                  <ul className="space-y-4 text-gray-300 mb-8">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Created operational reporting for internal and external clients</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Reporting Services, Excel Services, SSRS, Analysis Services, Visual Basic development</span>
                    </li>
                  </ul>
                  
                  <div className="flex flex-wrap gap-3">
                    {["SSRS", "Analysis Services", "Visual Basic", "Excel Services"].map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Wormhole */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-12 rounded-3xl relative overflow-hidden"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Ready to Launch?
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                  Let's create something extraordinary together. 
                  Your next breakthrough is just a message away.
                </p>
                
                <div className="flex justify-center items-center gap-8 mb-12">
                  <a 
                    href="mailto:drew@awerds.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm">drew@awerds.com</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/awerds"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Initiate Contact Sequence
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}