import { useState, useEffect, useRef } from 'react';
import { ArrowUp, Download, Mail, Phone, MapPin, Calendar, Users, FileText, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TeamCarousel from '@/components/TeamCarousel';
import KeyFindings from '@/components/KeyFindings';
import WAVES from 'vanta/src/vanta.waves'

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

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
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
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        shininess: 6.00,
        waveHeight: 14.50,
        zoom: 1.04
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal Researcher",
      bio: "PhD in Computer Science with expertise in AI and Machine Learning",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Alex Chen",
      role: "Research Assistant",
      bio: "Final year Computer Science student specializing in data analysis",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Maria Rodriguez",
      role: "Technical Lead",
      bio: "Master's student in Software Engineering with focus on system architecture",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "Data Analyst",
      bio: "Statistics undergraduate with experience in research methodology",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const documents = [
    {
      title: "Research Proposal",
      description: "Initial project proposal and methodology",
      type: "PDF"
    },
    {
      title: "Literature Review",
      description: "Comprehensive review of related work",
      type: "PDF"
    },
    {
      title: "Progress Report",
      description: "Mid-term progress and findings",
      type: "PDF"
    },
    {
      title: "Final Presentation",
      description: "Complete research presentation slides",
      type: "PDF"
    }
  ];

  const timelineEvents = [
    {
      date: "September 2024",
      title: "Project Initiation",
      description: "Research topic selection and initial planning phase",
      icon: <Calendar className="w-4 h-4" />
    },
    {
      date: "October 2024",
      title: "Literature Review",
      description: "Comprehensive study of existing research and methodologies",
      icon: <FileText className="w-4 h-4" />
    },
    {
      date: "November 2024",
      title: "Data Collection",
      description: "Gathering and preprocessing research data",
      icon: <Info className="w-4 h-4" />
    },
    {
      date: "December 2024",
      title: "Analysis Phase",
      description: "Data analysis and initial findings",
      icon: <Users className="w-4 h-4" />
    },
    {
      date: "January 2025",
      title: "Implementation",
      description: "Development and testing of proposed solutions",
      icon: <FileText className="w-4 h-4" />
    },
    {
      date: "February 2025",
      title: "Final Presentation",
      description: "Project completion and presentation of results",
      icon: <Calendar className="w-4 h-4" />
    }
  ];

  const techStack = [
    {
      name: "Python",
      logo: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop&crop=center",
      usage: "Primary programming language for data analysis, machine learning model development, and statistical computations"
    },
    {
      name: "TensorFlow",
      logo: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop&crop=center",
      usage: "Deep learning framework for building and training neural networks for medical image analysis"
    },
    {
      name: "Pandas",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center",
      usage: "Data manipulation and analysis library for processing healthcare datasets and clinical data"
    },
    {
      name: "Scikit-learn",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center",
      usage: "Machine learning library for implementing classification algorithms and model evaluation"
    },
    {
      name: "Jupyter",
      logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop&crop=center",
      usage: "Interactive development environment for data exploration, prototyping, and result visualization"
    },
    {
      name: "OpenCV",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop&crop=center",
      usage: "Computer vision library for medical image preprocessing, feature extraction, and analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Bar with gradient */}
      <nav className="fixed top-0 w-full bg-slate-900 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              {/* <h2 className="text-xl font-bold text-white">Research Project</h2> */}
            </div>
            <div className="hidden md:block">
              <div className="ml-10 font-inter flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-white  px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-white  px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">About</button>
                <button onClick={() => scrollToSection('timeline')} className="text-white   px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Timeline</button>
                <button onClick={() => scrollToSection('findings')} className="text-white   px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Findings</button>
                <button onClick={() => scrollToSection('documents')} className="text-white   px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Documents</button>
                <button onClick={() => scrollToSection('team')} className="text-white   px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Team</button>
                <button onClick={() => scrollToSection('contact')} className="text-white   px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Landing Section */}

      <section id="home" ref={homeRef} className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br  text-white">
        <div className="text-center  mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-inter   mb-6 animate-fade-in">
            Exploring the Connection Between the Temperature Parameter and Emergent Behavior in Large Language Models
          </h1>
          {/* <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
            Exploring innovative approaches to medical data processing and predictive modeling
          </p> */}
          <Button
            onClick={() => scrollToSection('about')}
            size="lg"
            className="bg-white text-blue-600 top-10 relative animate-pulseOnce hover:bg-blue-50 scale-105 shadow-xl"
          >
            Explore Research
          </Button>

        </div>
      </section>




      {/* About Section */}
      <section id="about" className="py-20 bg-white/90 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter text-gray-900 mb-4">About Our Research</h2>
            <p className="text-xl text-gray-600 font-quicksand max-w-3xl mx-auto">
              This research project focuses on developing advanced machine learning algorithms for healthcare data analysis,
              aiming to improve diagnostic accuracy and patient outcomes through innovative computational approaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold font-inter text-gray-900 mb-6">Research Objectives</h3>
              <ul className="space-y-4 font-josefin text-gray-700">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <span>Develop novel machine learning algorithms for medical image analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span>Improve diagnostic accuracy through predictive modeling</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <span>Create scalable solutions for real-world healthcare applications</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <span>Validate findings through comprehensive clinical data analysis</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold font-inter text-gray-900 mb-4">Project Overview</h3>
              <p className="text-gray-700 font-josefin mb-4">
                Our research addresses critical challenges in healthcare data processing by leveraging cutting-edge
                machine learning techniques. The project spans multiple phases, from data collection and preprocessing
                to model development and clinical validation.
              </p>
              <p className="text-gray-700 font-josefin">
                Expected outcomes include improved diagnostic tools, enhanced patient care protocols, and
                contributions to the broader field of medical informatics through published research and
                open-source implementations.
              </p>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="border-t border-gray-200 pt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold font-inter text-gray-900 mb-4">Technology Stack</h3>
              <p className="text-lg  text-gray-600">
                The tools and technologies powering our research
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStack.map((tech, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer bg-white border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <img
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        className="w-16 h-16 mx-auto rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{tech.name}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{tech.usage}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50/90 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter text-gray-900 mb-4">Project Timeline</h2>
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
                  background: 'white',
                  color: '#333',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                contentArrowStyle={{ borderRight: '7px solid white' }}

                iconStyle={{
                  background: '#2563eb',
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
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
                <h5 className='font-josefin mt-4 text-slate-700'>{event.date}</h5>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      {/* Key Findings Section */}
      <section id="findings" className="py-20 bg-white/90 backdrop-blur-sm relative">
        <KeyFindings />
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-20 bg-white/90 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter text-gray-900 mb-4">Research Documents</h2>
            <p className="text-xl text-gray-600">
              Access our research papers, presentations, and project documentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer">
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
                    onClick={() => window.open('#', '_blank')}
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
      <section id="team" className="py-20 bg-gray-50/90 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated researchers behind this project
            </p>
          </div>

          <TeamCarousel teamMembers={teamMembers} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600/90 backdrop-blur-sm text-white relative">
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
      </section>

      {/* Footer with gradient */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-inter font-bold mb-4">Research Project</h3>
              <p className="text-gray-400">
                Exploring the Connection Between the Temperature Parameter and Emergent Behavior in Large Language Models
              </p>
            </div>
            <div>
              <h3 className="text-xl font-inter font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 font-inter text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white  transition-all duration-300 hover:scale-105">About</button></li>
                <li><button onClick={() => scrollToSection('timeline')} className="hover:text-white transition-all duration-300 hover:scale-105">Timeline</button></li>
                <li><button onClick={() => scrollToSection('findings')} className="hover:text-white transition-all duration-300 hover:scale-105">Findings</button></li>
                <li><button onClick={() => scrollToSection('documents')} className="hover:text-white transition-all duration-300 hover:scale-105">Documents</button></li>
                <li><button onClick={() => scrollToSection('team')} className="hover:text-white transition-all duration-300 hover:scale-105">Team</button></li>
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
                  Department of Information and Communication Technology<br />
                  Faculty of Technology<br />
                  University of Sri Jayewardenepura<br />
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
