
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 pb-20 gradient-bg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block px-4 py-1.5 mb-3 rounded-full bg-course-accent/20 text-course-main text-sm font-medium">
                  Digital Marketing Institute of India
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-course-main">
                  Master <span className="text-gradient">AI-Powered</span> Digital Marketing
                </h1>
                
                <p className="text-xl text-course-muted max-w-xl">
                  Join our comprehensive courses and unlock the future of digital marketing with AI-driven strategies and hands-on experience.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-6">
                  <Button className="bg-course-main text-white hover:bg-course-main/90 px-8 py-6" asChild>
                    <Link to="/course">
                      Explore Courses <ArrowRight className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="rounded-2xl overflow-hidden glass-card p-6 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 text-course-main">Why Choose DMII?</h3>
                    
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 bg-course-accent/20 p-1 rounded-full">
                          <ArrowRight className="w-4 h-4 text-course-main" />
                        </div>
                        <span>Industry-leading AI marketing curriculum</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 bg-course-accent/20 p-1 rounded-full">
                          <ArrowRight className="w-4 h-4 text-course-main" />
                        </div>
                        <span>Expert instructors with real-world experience</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 bg-course-accent/20 p-1 rounded-full">
                          <ArrowRight className="w-4 h-4 text-course-main" />
                        </div>
                        <span>Hands-on projects with real clients</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mt-1 mr-3 bg-course-accent/20 p-1 rounded-full">
                          <ArrowRight className="w-4 h-4 text-course-main" />
                        </div>
                        <span>Lifetime community access and support</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6">
                      <Button className="w-full bg-course-main text-white hover:bg-course-main/90" asChild>
                        <Link to="/course">
                          View Our Courses
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-course-accent/30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-4">
                Why Learn With DMII?
              </h2>
              <p className="text-course-muted max-w-2xl mx-auto">
                We combine cutting-edge AI technology with proven marketing strategies to prepare you for the future of digital marketing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Curriculum",
                  description: "Learn to leverage the latest AI tools to transform your marketing strategies and stay ahead of the competition."
                },
                {
                  title: "Industry Experts",
                  description: "Learn from professionals who have worked with top brands and understand the real challenges of the industry."
                },
                {
                  title: "Hands-on Experience",
                  description: "Work on real client projects and build a portfolio that showcases your skills to potential employers."
                },
                {
                  title: "Career Support",
                  description: "Get guidance on job opportunities, freelancing, and building your personal brand in the digital space."
                },
                {
                  title: "Cutting-edge Tools",
                  description: "Gain proficiency in the latest marketing tools and platforms that are reshaping the industry."
                },
                {
                  title: "Community Network",
                  description: "Join our vibrant community of marketers, entrepreneurs, and industry professionals."
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="feature-card p-6 bg-white hover:bg-course-light/50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-course-main mb-3">{feature.title}</h3>
                  <p className="text-course-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 gradient-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-course-main mb-6">
                Ready to Transform Your Marketing Career?
              </h2>
              <p className="text-xl text-course-muted mb-8">
                Explore our courses and take the first step toward becoming a modern digital marketer.
              </p>
              <Button className="bg-course-main text-white hover:bg-course-main/90 px-8 py-6" asChild>
                <Link to="/course">
                  Browse Our Courses <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
