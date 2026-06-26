import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Cpu, Settings, Wifi, Radio, CircuitBoard, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Import assets
import logoImage from "@assets/Gemini_Generated_Image_7o45f7o45f7o45f7-modified_1782389634515.png";
import heroImage from "@assets/bioz_cover_1782389634517.png";
import product1 from "@assets/Gemini_Generated_Image_sxkekasxkekasxke_1782389634518.png";
import product2 from "@assets/Relm_1782389634519.png";
import product3 from "@assets/tsd_01_1782389634519.png";
import product4 from "@assets/4_way_fet_1782389634520.png";

const products = [
  {
    id: 1,
    name: "Advanced Monitor",
    description: "Rugged industrial dual-display monitoring unit (temperature/process monitoring, IP65).",
    image: product1,
  },
  {
    id: 2,
    name: "Multi-channel Relay Module",
    description: "16-channel DIN-rail relay board for industrial automation and PLC output.",
    image: product2,
  },
  {
    id: 3,
    name: "FR-40 Terminal Breakout Board",
    description: "40-pin IDC to screw terminal breakout board for PLC/controller interfacing.",
    image: product3,
  },
  {
    id: 4,
    name: "4-Way FET Driver Module",
    description: "IRF3205-based quad MOSFET driver board (5V, 110A) for high-current load switching.",
    image: product4,
  },
];

const services = [
  { icon: <Cpu className="w-10 h-10 text-primary" />, title: "Embedded Systems Development" },
  { icon: <Settings className="w-10 h-10 text-primary" />, title: "Industrial Automation" },
  { icon: <Wifi className="w-10 h-10 text-primary" />, title: "IoT Solutions" },
  { icon: <Radio className="w-10 h-10 text-primary" />, title: "GSM & GPS Applications" },
  { icon: <CircuitBoard className="w-10 h-10 text-primary" />, title: "PCB Design" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled ? "bg-white/95 backdrop-blur-sm border-border shadow-sm py-1" : "bg-white py-1"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={logoImage} alt="BiOz Innovation Logo" className="h-14 md:h-16 w-auto object-contain" />
            <span className="font-bold text-xl tracking-tight hidden sm:block">BiOz Innovation</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection("products")} className="text-sm font-medium hover:text-primary transition-colors">Products</button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">Contact</button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("about")} className="text-left font-medium p-2 hover:bg-muted rounded-md">About</button>
            <button onClick={() => scrollToSection("products")} className="text-left font-medium p-2 hover:bg-muted rounded-md">Products</button>
            <button onClick={() => scrollToSection("services")} className="text-left font-medium p-2 hover:bg-muted rounded-md">Services</button>
            <button onClick={() => scrollToSection("contact")} className="text-left font-medium p-2 hover:bg-muted rounded-md">Contact</button>
            <Button onClick={() => scrollToSection("contact")} className="w-full mt-2">Get Started</Button>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center pt-[72px]">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Circuit board background" 
            className="w-full h-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white font-semibold text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection("products")}
            >
              Explore Our Products
            </Button>
          </motion.div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Who We Are</h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              BiOz Innovation is a technology-driven electronics design company specializing in embedded systems, industrial automation, IoT, and custom PCB solutions. We transform complex ideas into reliable, intelligent electronics products tailored for real-world industrial and commercial applications.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-12"></div>
          </motion.div>
        </div>
      </section>
      {/* Products Section */}
      <section id="products" className="py-24 bg-white border-t border-border/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Precision engineered components for industrial applications.</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={fadeInUp}>
                <Card className="h-full flex flex-col group overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square p-6 bg-white flex items-center justify-center overflow-hidden border-b border-border/50 relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader className="flex-1 pb-2">
                    <CardTitle className="text-xl line-clamp-2">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3 text-sm">{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full text-primary hover:text-primary hover:bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions across the electronics spectrum.</p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-sm border border-border/50 flex flex-col items-center text-center w-full max-w-[280px] hover:shadow-md transition-shadow"
              >
                <div className="mb-6 p-4 bg-primary/5 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Ready to start your next project? Contact us today.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="bg-[#F5F5F5] p-8 rounded-xl border border-border/50 h-full">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full shadow-sm text-primary shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Address</h4>
                      <p className="text-muted-foreground">Selvapuram, Coimbatore<br/>Tamil Nadu, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full shadow-sm text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <p className="text-muted-foreground">+91 76048 07865</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full shadow-sm text-primary shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email</h4>
                      <p className="text-muted-foreground">info@bioz.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <form className="space-y-6 bg-white p-8 rounded-xl border border-border/50 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <Input id="name" placeholder="John Doe" className="bg-[#F5F5F5] border-transparent focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-[#F5F5F5] border-transparent focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      className="min-h-[120px] bg-[#F5F5F5] border-transparent focus-visible:ring-primary resize-y" 
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white h-12 text-base">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6 bg-white/5 p-4 rounded-lg w-fit">
                <img src={logoImage} alt="BiOz Innovation Logo" className="h-10 w-auto bg-white p-1 rounded" />
                <span className="font-bold text-xl tracking-tight">BiOz Innovation</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Transforming ideas into intelligent electronics solutions. Specializing in embedded systems, industrial automation, and custom PCB design.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-[#FF8C00] transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection("products")} className="text-gray-400 hover:text-[#FF8C00] transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection("services")} className="text-gray-400 hover:text-[#FF8C00] transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-[#FF8C00] transition-colors">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 border-b border-gray-800 pb-2">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#FF8C00] hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#FF8C00] hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-[#FF8C00] hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} BiOz Innovation. All Rights Reserved.</p>
            <p>Designed with precision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}