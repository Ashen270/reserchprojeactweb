import { useState, useEffect, useRef } from "react";
import { ArrowUp, Download, Mail, Phone, MapPin, FileText, Menu, X } from "lucide-react";
import { GrPlan } from "react-icons/gr";
import { AiOutlineExperiment } from "react-icons/ai";
import { IoBulbOutline } from "react-icons/io5";
import { FiDatabase } from "react-icons/fi";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { RiPresentationFill } from "react-icons/ri"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TeamCarousel from "@/components/TeamCarousel";
import KeyFindings from "@/components/KeyFindings";
import WAVES from "vanta/src/vanta.waves";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const homeRef = useRef(null);

  useEffect(() => {
    let vantaEffect;

    if (homeRef.current) {
      vantaEffect = WAVES({
        el: homeRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        shininess: 6.0,
        waveHeight: 14.5,
        zoom: 1.04,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close the mobile menu after navigation
  };




  const teamMembers = [
    {
      name: "Dr. (Mrs.) P. L. M. Prabhani",
      role: "Main Supervisor",
      bio: "Information and Communication Technology Department, Faculty of Technology, University of Sri Jayewardenepura",
      image:
        "/drprabani.jpeg",
    },
    {
      name: "Mrs. Sankani Heenkenda",
      role: "Co Supervisor",
      bio: "Information and Communication Technology Department, Faculty of Technology, University of Sri Jayewardenepura",
      image:
        "/sanjani madam.jpeg",
    },
    {
      name: "B.N. Dinanjana",
      role: "ICT/20/834",
      bio: "BICT(hons) Undergrduate of University of Sri Jayewardenepura, Faculty Technology ",
      image:
        "/nipun.jpeg",
    },
    {
      name: "P.M.L. Darshana",
      role: "ICT/20/807",
      bio: "BICT(hons) Undergrduate of University of Sri Jayewardenepura, Faculty Technology",
      image:
        "/lahiru.jpeg",
    },
    {
      name: "W.M.A.S. Wickramasinghe",
      role: "ICT/20/961",
      bio: "BICT(hons) Undergrduate of University of Sri Jayewardenepura, Faculty Technology",
      image:
        "/ashen.jpeg",
    },
  ];

  const documents = [
    {
      title: "Research Proposal",
      description: "Initial project proposal and methodology",
      type: "PDF",
      url: "https://drive.google.com/file/d/1BlYA_Ct0vdE4WsBBFImoCZ_HnKjQ1K0E/view?usp=sharing"
    },
    {
      title: "Literature Review",
      description: "Comprehensive review of related work",
      type: "PDF",
      url: "https://docs.google.com/document/d/1EVSC3bkPxtZdLofDw9ZNGp8DB6rv-o0y/edit?usp=sharing&ouid=115012069173261136429&rtpof=true&sd=true"
    },
    {
      title: "Progress Report",
      description: "Mid-term progress and findings",
      type: "PDF",
      url: "https://docs.google.com/presentation/d/1glvw-Jcrui7_e7xxIoaZ1tJ71RZyFMmF5_8p12ezzow/edit?usp=sharing"
    },
    {
      title: "Final Presentation",
      description: "Complete research presentation slides",
      type: "PDF",
      url: "https://drive.google.com/file/d/1JH1WuChpRslp4ctD2cho_rD2v_Suc5_l/view?usp=sharing"
    },
    {
      title: "Reaserch Paper",
      description: "Complete research paper",
      type: "PDF",
      url: "https://drive.google.com/file/d/1MDbl5ztw8ypJKjGMLnw9pk53jjk7_IbE/view?usp=drive_link"
    },
  ];

  const timelineEvents = [
    {
      date: "July – November 2024",
      title: "Project Planning and Literature Review",
      description: "The project began with defining research objectives and conducting a comprehensive literature review to identify gaps and finalize the theoretical foundation.",
      icon: <GrPlan className="w-4 h-4" />,
    },
    {
      date: "November – December 2024",
      title: "Proposal and Environment Setup",
      description: "The research proposal was drafted and submitted. Following approval, the experimental environment and necessary tools, including APIs and cloud-based LLMs, were set up and configured.",
      icon: <IoBulbOutline className="w-4 h-4" />,
    },
    {
      date: "January – February 2025",
      title: "Initial Experimentation Phase",
      description: "Initial tests were conducted to evaluate the performance of language models under various temperature settings, assessing creative, critical, and general knowledge capabilities.",
      icon: <AiOutlineExperiment className="w-4 h-4" />,
    },
    {
      date: "February – March 2025",
      title: "Data Collection and Refinement",
      description: "Early experiment results were analyzed, adjustments were made to improve data quality, and additional experiments were conducted to complete data collection",
      icon: <FiDatabase className="w-4 h-4" />,
    },
    {
      date: "March – April 2025",
      title: "Data Analysis and Visualization",
      description: "Comprehensive data analysis was performed, focusing on trends and behavioral patterns. The findings were visualized to support clear interpretation of results.",
      icon: <BsFileEarmarkBarGraph className="w-4 h-4" />,
    },
    {
      date: "April – June 2025",
      title: "Final Presentation",
      description: "The research findings were compiled into a draft report, reviewed for accuracy and clarity, and finalized for submission.",
      icon: <RiPresentationFill className="w-4 h-4" />,
    },
  ];

  const techStack = [
    {
      name: "Python",
      logo: "https://www.python.org/static/community_logos/python-logo.png",
      usage:
        "Core programming language for data analysis, machine learning, and scientific computing in the project.",
    },
    {
      name: "Matplotlib",
      logo: "https://matplotlib.org/_static/images/logo2.svg",
      usage:
        "Visualization library for creating static, animated, and interactive plots to represent research data and results.",
    },
    {
      name: "Pandas",
      logo: "https://pandas.pydata.org/static/img/pandas_mark.svg",
      usage:
        "Essential library for data manipulation, cleaning, and analysis of structured healthcare datasets.",
    },
    {
      name: "Seaborn",
      logo: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg",
      usage:
        "Statistical data visualization library built on top of Matplotlib, used for advanced and attractive data visualizations.",
    },
    {
      name: "NumPy",
      logo: "https://numpy.org/images/logo.svg",
      usage:
        "Fundamental package for numerical computations, supporting efficient array operations and mathematical functions.",
    },
    {
      name: "Scikit-learn",
      logo: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png",
      usage:
        "Machine learning library for implementing classification, regression, clustering algorithms, and model evaluation.",
    },
    {
      name: "Jupyter Notebook",
      logo: "https://jupyter.org/assets/homepage/main-logo.svg",
      usage:
        "Interactive environment for code development, data exploration, visualization, and sharing research workflows.",
    },
    {
      name: "Google Colab",
      logo: "https://colab.research.google.com/img/colab_favicon_256px.png",
      usage:
        "Cloud-based Jupyter notebook environment for running experiments, sharing code, and leveraging free GPU resources for large-scale model training and analysis",
    },
    {
      name: "LangChain",
      logo: "https://avatars.githubusercontent.com/u/139944330?s=200&v=4",
      usage:
        "Framework for developing applications powered by language models, enabling integration of LLMs for advanced data analysis, information retrieval, and conversational AI in healthcare research workflows",
    },
    {
      name: "OpenAI",
      logo: "https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png",
      usage:
        "Provider of advanced language models (such as GPT-4) for natural language processing, data analysis, and conversational AI integration in healthcare research.",
    },
    {
      name: "Anthropic",
      logo: "https://avatars.githubusercontent.com/u/103813127?s=200&v=4",
      usage:
        "Supplier of large language models (like Claude) used for safe, reliable AI-driven data analysis, information extraction, and research assistance in healthcare.",
    },
    {
      name: "Fireworks AI",
      logo: "https://fireworks.ai/favicon.ico",
      usage:
        "Platform for scalable, high-performance language model APIs, enabling efficient integration of generative AI for data analysis and research workflows.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Bar with gradient */}
      <nav className="fixed top-0 w-full bg-slate-900 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-6"> {/* Remove excessive padding */}
        <div className="flex justify-between items-center h-16">
          
          {/* ICON: aligned hard left */}
          <div className="flex items-center space-x-2 flex-shrink-0 text-white pl-2">
            <img
              src="/icon.png"
              alt="University Logo"
              className="w-8 h-8 "/>
            {/* <span className="font-semibold text-xs">Exploring the Connection Between the Temperature Parameter and
            Emergent Behavior in Large Language Models</span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 font-inter flex items-baseline space-x-4">
              {["home", "about", "timeline", "findings", "documents", "team", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pr-2">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 px-4 pb-4 space-y-2">
          {["home", "about", "timeline", "findings", "documents", "team", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>

      {/* Landing Section */}

      <section
        id="home"
        ref={homeRef}
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br  text-white"
      >
        <div className="text-center  mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-inter   mb-6 animate-fade-in">
            Exploring the Connection Between the Temperature Parameter and
            Emergent Behavior in Large Language Models
          </h1>
          {/* <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
            Exploring innovative approaches to medical data processing and predictive modeling
          </p> */}
          <Button
            onClick={() => scrollToSection("about")}
            size="lg"
            className="bg-white text-blue-600 top-10 relative animate-pulseOnce hover:bg-blue-50 scale-105 shadow-xl"
          >
            Explore Research
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white/90 backdrop-blur-sm relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter text-gray-900 mb-4">
              About Our Research
            </h2>
            <p className="text-xl text-gray-600 font-quicksand max-w-3xl mx-auto">
              Our research investigates the critical connection between
              temperature parameters and emergent behavior in large language
              models. We examine how varying temperature settings affect model
              outputs, creativity, consistency, and the emergence of unexpected
              capabilities, contributing to a deeper understanding of AI system
              behavior and control mechanisms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold font-inter text-gray-900 mb-6">
                Research Objectives
              </h3>
              <ul className="space-y-4 font-josefin text-gray-700">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <span>
                    <strong>
                      Main objective : Explore the connection between the
                      "temperature" parameter and Emergent Behavior in Large
                      Language Models
                    </strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span>
                    Examine the effects and characterize the impact of
                    "temperature" parameter on LLMs output
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <span>
                    Discover recurring patterns or trends in the relationship
                    between temperature and emergent behavior across different
                    LLM architectures and datasets. applications
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <span>Visualization of the results</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold font-inter text-gray-900 mb-4">
                Project Overview
              </h3>
              <p className="text-gray-700 font-josefin mb-4">
                This project explores how the temperature parameter
                influences emergent behaviors in Large Language Models (LLMs),
                such as sudden improvements in reasoning or creativity.
                While previous studies focus on model size, this research
                uniquely examines temperature as a key inference time factor.
              </p>
              <p className="text-gray-700 font-josefin">
                By systematically testing LLM outputs across tasks and temperature ranges,
                the study aims to uncover thresholds where behavioral shifts occur.
                Findings will offer insights into optimizing model performance,
                improving reliability, and enhancing safety in real-world AI applications.
              </p>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="border-t border-gray-200 pt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold font-inter text-gray-900 mb-4">
                Technology Stack
              </h3>
              <p className="text-lg  text-gray-600">
                The tools and technologies powering our research
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStack.map((tech, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer bg-white border border-gray-200"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <img
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        className="w-16 h-16 mx-auto rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {tech.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {tech.usage}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        className="py-20 bg-gray-50/90 backdrop-blur-sm relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter text-gray-900 mb-4">
              Project Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones and progress throughout our research journey
            </p>
          </div>

          <VerticalTimeline>
            {timelineEvents.map((event, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work hover-timeline-card"
                contentStyle={{
                  background: "white",
                  color: "#333",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                contentArrowStyle={{ borderRight: "7px solid white" }}
                iconStyle={{
                  background: "#2563eb",
                  color: "#fff",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                iconClassName="timeline-icon-hover"
                icon={event.icon}
              >
                <h3 className="vertical-timeline-element-title font-inter text-xl font-semibold">
                  {event.title}
                </h3>
                <p className="text-gray-600 font-mono mt-2">
                  {event.description}
                </p>
                <h5 className="font-josefin mt-4 text-slate-700">
                  {event.date}
                </h5>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      {/* Key Findings Section */}
      <section
        id="findings"
        className="py-20 bg-white/90 backdrop-blur-sm relative"
      >
        <KeyFindings />
      </section>

      {/* Documents Section */}
      <section
        id="documents"
        className="py-20 bg-white/90 backdrop-blur-sm relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter text-gray-900 mb-4">
              Research Documents
            </h2>
            <p className="text-xl text-gray-600">
              Access our research papers, presentations, and project
              documentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {documents.map((doc, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <FileText className="w-5 h-5 mr-2 text-blue-600" />
                    {doc.title}
                  </CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    onClick={() => window.open(doc.url, "_blank")}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download {doc.type}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20 bg-gray-50/90 backdrop-blur-sm relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated researchers behind this project
            </p>
          </div>

          <TeamCarousel teamMembers={teamMembers} />
        </div>
      </section>

      {/* Contact Section */}
      {/* <section
        id="contact"
        className="py-20 bg-blue-600/90 backdrop-blur-sm text-white relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-blue-100">
              Get in touch with our research team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <CardContent className="flex items-center p-6">
                <Mail className="w-8 h-8 mr-4 text-blue-200" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-blue-100">research@university.edu</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <CardContent className="flex items-center p-6">
                <Phone className="w-8 h-8 mr-4 text-blue-200" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-blue-100">+1 (555) 123-4567</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <CardContent className="flex items-center p-6">
                <MapPin className="w-8 h-8 mr-4 text-blue-200" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-blue-100">Computer Science Department</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Footer with gradient */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-inter font-bold mb-4">
                Research Project
              </h3>
              <p className="text-gray-400">
                Exploring the Connection Between the Temperature Parameter and
                Emergent Behavior in Large Language Models
              </p>
            </div>
            <div>
              <h3 className="text-xl font-inter font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 font-inter text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-white  transition-all duration-300 hover:scale-105"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("timeline")}
                    className="hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Timeline
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("findings")}
                    className="hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Findings
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("documents")}
                    className="hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Documents
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    Team
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-inter font-bold mb-4">University</h3>
              <div className="flex items-start  gap-4">
                <img
                  src="/usjp-logo.png"
                  alt="University Logo"
                  className="w-20 h-24 object-contain"
                />
                <p className="text-gray-400">
                  Department of Information and Communication Technology
                  <br />
                  Faculty of Technology
                  <br />
                  University of Sri Jayewardenepura
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Go to Top Button with enhanced hover effect */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110 hover:shadow-xl hover:-translate-y-1"
          aria-label="Go to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Index;
