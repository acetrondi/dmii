import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Award,
  FileText,
  Users,
  ArrowRight,
  Check,
  Info,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import AnimatedHeading from "@/components/AnimatedHeading";
import CounterAnimation from "@/components/CounterAnimation";
import CourseCard from "@/components/CourseCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import BenefitCard from "@/components/BenefitCard";
import AlumniVideo from "@/components/AlumniVideo";
import VideoCarousel from "@/components/VideoCarousel";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after component mount to trigger animations
    setIsVisible(true);

    // Handle scroll reveal animations
    const handleScrollAnimation = () => {
      const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

      scrollRevealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("visible");
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScrollAnimation);

    // Trigger once on initial load
    handleScrollAnimation();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section
          className="pt-20 md:pt-28 pb-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/brand/bgmaindmii.jpg')" }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-1/2 space-y-6">
                <div
                  className="inline-block text-white px-4 py-1.5 mb-3 rounded-full bg-course-accent/20 text-course-main text-sm font-medium animate-fade-in opacity-0"
                  style={{
                    animationDelay: "0.1s",
                    animationFillMode: "forwards",
                  }}
                >
                  Digital Marketing Intelligence Institute
                </div>

                <AnimatedHeading />

                <p
                  className="text-xl text-white text-course-muted max-w-xl animate-fade-in opacity-0"
                  style={{
                    animationDelay: "0.5s",
                    animationFillMode: "forwards",
                  }}
                >
                  Learn AI technology - Campaign Optimization - Analyze
                  marketing data - Gain real-world experience
                </p>

                <div className="flex flex-wrap gap-4 pt-6 scroll-reveal">
                  <Button
                    className="bg-course-main text-white hover:bg-course-main/90 px-8 py-6"
                    onClick={() => {
                      window.location.href =
                        "mailto:info@dmii.in?subject=I'm interested in DMII";
                    }}
                  >
                    Connect Now{" "}
                    <ArrowRight className="inline-block ml-1 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-course-accent text-course-main hover:bg-course-accent/10 px-8 py-6"
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>

              <div
                className="w-full lg:w-1/2 flex justify-center animate-fade-in opacity-0"
                style={{
                  animationDelay: "0.9s",
                  animationFillMode: "forwards",
                }}
              >
                <div className="relative w-full max-w-md">
                  <div className="rounded-2xl overflow-hidden glass-card p-6 shadow-xl">
                    <img
                      src="./brand/hero-image.jpeg"
                      alt="Digital Marketing"
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-2xl font-bold mb-4 text-course-main">
                      Unlock Your Digital Marketing Potential
                    </h3>

                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 bg-course-accent/20 p-1 rounded-full">
                          <Check className="w-4 h-4 text-course-main" />
                        </div>
                        <span>Learn AI-powered marketing strategies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 bg-course-accent/20 p-1 rounded-full">
                          <Check className="w-4 h-4 text-course-main" />
                        </div>
                        <span>Work with real clients and real projects</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 bg-course-accent/20 p-1 rounded-full">
                          <Check className="w-4 h-4 text-course-main" />
                        </div>
                        <span>Get industry-recognized certifications</span>
                      </li>
                    </ul>
                  </div>

                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-course-accent/30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alumni Video Section */}
        <section id="alumni-videos" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-4">
                Our Alumni Success Stories
              </h2>
              <p className="text-course-muted max-w-2xl mx-auto">
                See how our graduates have transformed their careers and made an
                impact in the digital marketing landscape.
              </p>
            </div>

            <div className="scroll-reveal">
              <VideoCarousel
                videos={[
                  "./alumi-1.mp4",
                  "./alumi-2.mp4",
                  "./alumi-3.mp4",
                  "./alumi-4.mp4",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-4">
                Your DMII Journey
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-reveal">
              {/* Enroll Today */}
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-course-accent/20 flex items-center justify-center mb-4">
                      <Calendar className="w-8 h-8 text-course-main" />
                    </div>
                    <h3 className="text-2xl font-bold text-course-main mb-3">
                      Enroll Today
                    </h3>
                    <p className="text-course-muted">
                      Access our AI-powered curriculum and learn advanced
                      digital marketing skills.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Real-World Application */}
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-course-accent/20 flex items-center justify-center mb-4">
                      <Users className="w-8 h-8 text-course-main" />
                    </div>
                    <h3 className="text-2xl font-bold text-course-main mb-3">
                      Real-World Application
                    </h3>
                    <p className="text-course-muted">
                      Work on live projects with real clients, and build a
                      professional portfolio.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Become an Expert */}
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-course-accent/20 flex items-center justify-center mb-4">
                      <Award className="w-8 h-8 text-course-main" />
                    </div>
                    <h3 className="text-2xl font-bold text-course-main mb-3">
                      Become an Expert
                    </h3>
                    <p className="text-course-muted">
                      Graduate as a certified digital marketer, ready to land a
                      job or start freelancing.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Stay Ahead of the Curve */}
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-course-accent/20 flex items-center justify-center mb-4">
                      <ArrowRight className="w-8 h-8 text-course-main" />
                    </div>
                    <h3 className="text-2xl font-bold text-course-main mb-3">
                      Stay Ahead of the Curve
                    </h3>
                    <p className="text-course-muted">
                      Get future-ready with the latest tools and strategies used
                      by top marketers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* DMII In Action */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 scroll-reveal">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-6">
                  DMII IN ACTION
                </h2>
                <h3 className="text-2xl font-semibold mb-4 text-course-accent">
                  Learn A.I integrated marketing and work with real-time clients
                </h3>
                <p className="text-lg text-course-muted mb-8">
                  DMII is where AI, creativity, & real-world projects come
                  together to craft future digital trailblazers. No dull
                  lectures here, just real clients, real challenges, and real
                  results.
                </p>
                <Button
                  className="bg-course-main text-white hover:bg-course-main/90"
                  asChild
                >
                  <a href="#" download>
                    Download Brochure <ArrowRight className="ml-2" />
                  </a>
                </Button>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="./brand/dmii-in-action.jpg"
                    alt="DMII in Action"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-course-main text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2">
                  <CounterAnimation end={20} suffix="+" duration={2000} />
                </h3>
                <p className="text-xl text-gray-200">Years Of Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2">
                  <CounterAnimation end={15} suffix="+" duration={2000} />
                </h3>
                <p className="text-xl text-gray-200">Team Member</p>
              </div>
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2">
                  <CounterAnimation end={10} suffix="+" duration={2000} />
                </h3>
                <p className="text-xl text-gray-200">Awards Won</p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Our Courses Section */}
        <section id="courses" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-4">
                EXPLORE OUR COURSES
              </h2>
              <p className="text-course-muted max-w-2xl mx-auto">
                Choose the perfect program to kickstart your journey in digital
                marketing with AI integration.
              </p>
            </div>

            <div className="flex flex-col gap-8 scroll-reveal">
              {/* Foundation Course - Full Width */}
              <div className="w-full flex rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 px-2">
                <img
                  src="./foundation-course.png"
                  alt="Foundation Course"
                  className="w-20 h-20 mt-4 mix-blend-multiply"
                />
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full p-8">
                    <h3 className="text-2xl font-bold text-course-main mb-4">
                      FOUNDATION IN DIGITAL MARKETING
                    </h3>
                    <p className="text-course-muted mb-6">
                      Get started with the essential digital marketing skills
                      and build a strong foundation for your career.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-course-accent rounded-full mr-2"></span>
                        <span className="text-sm">Duration: 3 months</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-course-accent rounded-full mr-2"></span>
                        <span className="text-sm">Mode: Online / Offline</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-course-accent rounded-full mr-2"></span>
                        <span className="text-sm">Batch Start: May 1st</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-course-accent rounded-full mr-2"></span>
                        <span className="text-sm">Free Consultancy</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-course-main text-white hover:bg-course-main/90">
                        <a href="/foundation-in-digital-marketing">
                          View Course
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-course-accent text-course-main hover:bg-course-accent/10"
                        onClick={() => {
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Get Brochure
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50"
                      >
                        <a href="#contact">Free Counselling</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intermediate and Expert Courses - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Intermediate Course */}
                <div className="rounded-xl flex overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 px-2">
                  <img
                    src="./intermediate-course.png"
                    alt="Intermediate Course"
                    className="w-20 h-20 mt-4 mix-blend-multiply "
                  />
                  <div className="flex flex-col h-full ">
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold text-course-main mb-3">
                        INTERMEDIATE IN AI DIGITAL MARKETING
                      </h3>
                      <p className="text-course-muted mb-4">
                        Take your skills to the next level with advanced
                        AI-powered marketing techniques.
                      </p>

                      <div className="grid grid-cols-1 gap-2 mb-6">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-course-accent rounded-full mr-2"></span>
                          <span className="text-sm">Duration: 6 months</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-course-accent rounded-full mr-2"></span>
                          <span className="text-sm">
                            Mode: Online / Offline
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-course-accent rounded-full mr-2"></span>
                          <span className="text-sm">Get Job Ready</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Button className="bg-course-main text-white hover:bg-course-main/90">
                          <a href="/intermediate-in-ai-ditigal-marketing">
                            View Course
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-course-accent text-course-main hover:bg-course-accent/10"
                          onClick={() => {
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          Get Brochure
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expert Course */}
                <div className="rounded-xl flex overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 px-2">
                  <img
                    src="./expert-course.png"
                    alt="Expert Course"
                    className="w-20 h-20 mt-4 mix-blend-multiply "
                  />
                  <div className="flex flex-col h-full">
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold text-course-main mb-3">
                        EXPERT IN DIGITAL MARKETING
                      </h3>
                      <p className="text-course-muted mb-4">
                        Master the most advanced digital marketing strategies
                        and become an industry leader.
                      </p>

                      <div className="grid grid-cols-1 gap-2 mb-6">
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-course-accent rounded-full mr-2"></span>
                          <span className="text-sm">Duration: 3 months</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-course-accent rounded-full mr-2"></span>
                          <span className="text-sm">
                            Mode: Online / Offline
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-course-accent rounded-full mr-2"></span>
                          <span className="text-sm">
                            Guaranteed Placement Assistance
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <Button className="bg-course-main text-white hover:bg-course-main/90">
                          <a href="/expert-in-digital-marketing">View Course</a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-course-accent text-course-main hover:bg-course-accent/10"
                          onClick={() => {
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                        >
                          Get Brochure
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits You Gain Section */}
        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-4">
                BENEFITS YOU GAIN
              </h2>
              <p className="text-xl font-medium text-course-accent max-w-2xl mx-auto">
                Learn AI-Integrated Marketing – Master future-ready skills.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal">
              <BenefitCard
                title="Stay Ahead"
                description="Adapt to evolving industry trends"
                icon="trending-up"
              />

              <BenefitCard
                title="1-on-1 Mentorship"
                description="Get guided by top experts"
                icon="users"
              />

              <BenefitCard
                title="Work on Real Clients"
                description="Apply what you learn instantly"
                icon="briefcase"
              />

              <BenefitCard
                title="Earn Certification"
                description="Gain industry recognition"
                icon="award"
              />

              <BenefitCard
                title="Placement Assistance"
                description="Step into your dream role"
                icon="target"
              />

              <BenefitCard
                title="Lifetime Support"
                description="DMII is your home, forever"
                icon="life-buoy"
              />
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-4">
                CONTACT US
              </h2>
              <p className="text-course-muted max-w-2xl mx-auto">
                Get in touch with us to learn more about our courses and how we
                can help you achieve your goals.
              </p>
            </div>

            <div className="max-w-2xl mx-auto scroll-reveal">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* AI Tools Section */}
        <section id="ai-tools" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-4">
                Collaborations Partners in Digital Evolution
              </h2>
              <p className="text-course-muted max-w-2xl mx-auto">
                We team up with top brands and agencies to keep our students on
                the pulse of the industry.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 scroll-reveal">
              {["canva", "zoho", "oracle", "chatgpt", "hubspot"].map(
                (company, index) => (
                  <div
                    key={index}
                    className="hover:grayscale-0 transition-all duration-300"
                  >
                    <img
                      src={`./${company}.png`}
                      alt={`${company} logo`}
                      className="h-16 object-contain"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Real Clients Section */}
        <section id="clients" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-4">
                Real Clients. Real Results.
              </h2>
              <p className="text-course-muted max-w-2xl mx-auto">
                We team up with top brands and agencies to keep our students on
                the pulse of the industry.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 scroll-reveal">
              {["aws", "google", "microsoft", "apple", "ibm"].map(
                (company, index) => (
                  <div
                    key={index}
                    className="hover:grayscale-0 transition-all duration-300"
                  >
                    <img
                      src={`./${company}.png`}
                      alt={`${company} logo`}
                      className="h-16 object-contain"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Placement Assistance Section */}
        <section id="placement" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-4">
                Job-Seekers to Skill-Masters
              </h2>
              <p className="text-course-muted max-w-2xl mx-auto">
                Transform your career journey with our comprehensive placement
                support and industry connections. From resume building to
                interview preparation, we guide you every step of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-reveal">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-course-accent/20 flex items-center justify-center mb-4">
                  <img
                    src="./python.png"
                    alt="python logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-course-main mb-2">
                  Tech Opportunities
                </h3>
                <p className="text-center text-course-muted">
                  Launch your career in tech with leading companies
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-course-accent/20 flex items-center justify-center mb-4">
                  <img
                    src="./nykaa.png"
                    alt="nykaa logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-course-main mb-2">
                  E-commerce Roles
                </h3>
                <p className="text-center text-course-muted">
                  Drive growth in India's fastest-growing sector
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-course-accent/20 flex items-center justify-center mb-4">
                  <img
                    src="./razorpay.png"
                    alt="razorpay logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-course-main mb-2">
                  Fintech Positions
                </h3>
                <p className="text-center text-course-muted">
                  Shape the future of digital finance
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-course-accent/20 flex items-center justify-center mb-4">
                  <img
                    src="./hubspot.png"
                    alt="hubspot logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-course-main mb-2">
                  Marketing Roles
                </h3>
                <p className="text-center text-course-muted">
                  Lead digital transformation in top brands
                </p>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 scroll-reveal">
              <div className="bg-course-accent/5 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-course-main mb-3">
                  Resume Building
                </h4>
                <p className="text-course-muted">
                  Get expert guidance to create an ATS-friendly resume that
                  stands out to recruiters
                </p>
              </div>
              <div className="bg-course-accent/5 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-course-main mb-3">
                  Interview Preparation
                </h4>
                <p className="text-course-muted">
                  Master interview techniques with mock sessions and
                  personalized feedback
                </p>
              </div>
              <div className="bg-course-accent/5 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-course-main mb-3">
                  Career Counseling
                </h4>
                <p className="text-course-muted">
                  One-on-one sessions to align your skills with industry
                  opportunities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alumni Testimonials Section */}
        <section id="alumni" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-4">
                ALUMNI - STUDENT TO DIGITAL TRAILBLAZERS
              </h2>
              <p className="text-xl font-medium text-course-accent max-w-2xl mx-auto">
                Meet the marketers making waves, powered by DMII
              </p>
            </div>

            <div className="scroll-reveal">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        {/* Why Choose DMII Section */}
        <section id="usp" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-4">
                WHY CHOOSE DMII
              </h2>
              <p className="text-course-muted max-w-2xl mx-auto">
                We offer a unique approach to digital marketing education that
                prepares you for the future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-reveal">
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-t-4 border-course-main">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-course-main mb-3">
                    AI-Integrated Learning
                  </h3>
                  <p className="text-course-muted">
                    Learn how to leverage AI for digital marketing strategies,
                    automation, and optimization.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-t-4 border-course-main">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-course-main mb-3">
                    Hands-On Experience
                  </h3>
                  <p className="text-course-muted">
                    Work on live projects with real clients to gain practical
                    expertise.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-t-4 border-course-main">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-course-main mb-3">
                    Industry-Driven Curriculum
                  </h3>
                  <p className="text-course-muted">
                    Stay updated with the latest trends, tools, and techniques
                    in digital marketing.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-t-4 border-course-main md:col-span-1 lg:col-span-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-course-main mb-3">
                    Expert-Led Training
                  </h3>
                  <p className="text-course-muted">
                    Learn from seasoned professionals and AI specialists in the
                    marketing industry.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-t-4 border-course-main lg:col-span-2 md:col-span-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-course-main mb-3">
                    Career Advancement
                  </h3>
                  <p className="text-course-muted">
                    Get certified and connect with top-tier companies looking
                    for AI-savvy marketing professionals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section id="certificates" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-4">
                CERTIFICATION
              </h2>
              <p className="text-xl font-medium text-course-accent max-w-2xl mx-auto">
                Meet the marketers making waves, powered by DMII
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl scroll-reveal">
                {["google-cert", "hubspot-cert", "meta-cert"].map(
                  (company, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                    >
                      <img
                        src={`./${company}.jpeg`}
                        alt={`Certificate ${index + 1}`}
                        className="w-full h-48 object-fit"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-course-main mb-1">
                          {index === 0
                            ? "Google"
                            : index === 1
                            ? "Hubspot"
                            : index === 2
                            ? "Meta"
                            : "SEO & Content Strategy"}
                        </h3>
                        <p className="text-sm text-course-muted">
                          Industry-recognized certification
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about-footer" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-8">
                About DMII
              </h2>
              <p className="text-lg text-course-muted mb-6">
                Experience the future of AI-integrated marketing with hands-on
                training and real-world projects. Stay ahead of the curve with
                advanced and up-to-date marketing techniques while gaining
                practical experience that prepares you for the industry.
              </p>
              <p className="text-lg text-course-muted">
                Learn directly from experts, develop in-demand skills, and set
                yourself apart in the competitive digital landscape.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
