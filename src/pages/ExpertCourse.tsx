import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BatchesSection from "@/components/BatchesSection";
import ToolsSection from "@/components/ToolsSection";
import CurriculumSection from "@/components/CurriculumSection";
import FeesSection from "@/components/FeesSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const batchData = [
  {
    type: "Weekend (S/S)",
    start: "May 17, 2025",
    capacity: "15 students",
  },
  {
    type: "Weekday (M/W/F)",
    start: "May 19, 2025",
    capacity: "25 students",
  },
];

const modules = [
  {
    id: "module-1",
    title: "Module 1: Advanced Fundamentals of Marketing",
    content: (
      <>
        <p className="mb-3">
          Goal: Deepen your understanding of modern marketing with real brand
          analysis.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>What is Marketing?</li>
          <li>Extended Definition, Brand Case Studies, Real-World Examples</li>
          <li>Traditional vs Digital Marketing</li>
          <li>
            In-depth Comparison, New-Age Use Cases, Success/Failure Analysis
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "module-2",
    title: "Module 2: Strategic Thinking & Communication",
    content: (
      <>
        <p className="mb-3">
          Goal: Develop advanced approaches to customer understanding and
          communication.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Buyer Personas (Level 2)</li>
          <li>Psychographic & Behavioral Segments, Brand-Based Personas</li>
          <li>Customer Journey Frameworks</li>
          <li>AIDA, ACCA, Funnels with Conversion Mapping</li>
          <li>📊 Project: Build Journey Maps for 2 Brands</li>
          <li>Communication Strategy</li>
          <li>Brand Messaging, Storytelling, Ad Communications</li>
          <li>Multichannel Communication Plan</li>
        </ul>
      </>
    ),
  },
  {
    id: "module-3",
    title: "Module 3: Presentation Mastery",
    content: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>Creating & Pitching Decks (Advanced Level)</li>
          <li>Tools: Canva Pro, PPT, Google Slides</li>
          <li>Design Thinking in Presentations</li>
          <li>📈 Project: Client Pitch Deck for Digital Strategy</li>
          <li>Content Writing + Visual Design</li>
          <li>
            Goal: Combine copy, creativity & visual design for brand
            storytelling
          </li>
          <li>Creative Copywriting Frameworks</li>
          <li>Tone of Voice Development</li>
          <li>AI + Manual Content Blending</li>
          <li>Designing with Canva/Crello</li>
          <li>🎤 Event: Creative Debate – "AI Copy vs Human Creativity"</li>
        </ul>
      </>
    ),
  },
  {
    id: "module-4",
    title: "Module 4: Organic Social Media Mastery",
    content: (
      <>
        <p className="mb-3">
          Platforms: Instagram, LinkedIn, Facebook, YouTube, Twitter (X),
          Snapchat, Quora
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Growth Strategy Per Platform</li>
          <li>Content Pillars + Planning Calendar</li>
          <li>Tools: Creator Studio, Notion, Metricool</li>
          <li>📱 Project: Develop a 30-day Strategy for a Real Brand</li>
          <li>Paid Social Media Campaigns</li>
          <li>Platforms: Meta, LinkedIn, X (Twitter)</li>
          <li>Ad Types & Objectives</li>
          <li>Campaign Funnel Strategy</li>
          <li>Audience Targeting Deep Dive</li>
          <li>Budget Planning</li>
          <li>Ad Design & Copywriting</li>
          <li>
            💡 Activity: Campaign Creation Workshop (Mock Budgeting +
            Copywriting)
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "module-5",
    title: "Module 5: Influencer & Community Marketing",
    content: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>Types: Nano to Celebrity</li>
          <li>Platform Differences: Instagram, YouTube, Snapchat</li>
          <li>Budgeting, Briefing, and KPIs</li>
          <li>Collaboration Strategy + Outreach Templates</li>
          <li>📣 Live Case Study: Influencer Campaign Breakdown</li>
        </ul>
      </>
    ),
  },
  {
    id: "module-6",
    title: "Module 6: Search Marketing: SEO & SEM",
    content: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>SEO Advanced Concepts:</li>
          <li>LSI, Structured Data, On-Page Audits</li>
          <li>Tools: Ubersuggest, ChatGPT, Surfer SEO, Screaming Frog</li>
          <li>SEM:</li>
          <li>
            Google Search Ad Structures, Keyword Planner, A/B Ad Variations
          </li>
          <li>
            🎓 Project: SEO Audit + Create a Search Ad for a Niche Product
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "module-7",
    title: "Module 7: Email Marketing & Automation",
    content: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>Email Copywriting Best Practices</li>
          <li>Funnel Campaigns: Welcome, Nurture, Re-engage</li>
          <li>Tools: Mailchimp, ConvertKit, Hunter for Outreach</li>
          <li>LinkedIn & Cold Email Outreach for SEO/PR</li>
          <li>📬 Mini Project: Create an Outreach Campaign</li>
          <li>Public Relations & Brand Management (BRM)</li>
          <li>What is BRM?</li>
          <li>Activities, Brand Perception, Crisis Management</li>
          <li>Public Relations Theory & Application</li>
          <li>Case Studies: Positive + Crisis Handling</li>
          <li>🧑‍🏫 Guest Lecture: PR in the Digital Era</li>
        </ul>
      </>
    ),
  },
  {
    id: "module-8",
    title: "Module 8: Lead Generation & Analytics",
    content: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>Lead Magnets, CTAs, Gated Content</li>
          <li>Google Analytics Basics</li>
          <li>Campaign KPIs and Reporting</li>
          <li>Tools: GA4, Looker Studio (intro), Meta Insights</li>
        </ul>
      </>
    ),
  },
  {
    id: "module-9",
    title: "Module 9: Website Basics (No Code)",
    content: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>Introduction to WordPress</li>
          <li>Setting Up Pages with Elementor</li>
          <li>Landing Page Strategy</li>
          <li>🖥️ Mini Project: Create Your Own Marketing Portfolio Page</li>
        </ul>
      </>
    ),
  },
];

const faqs = [
  {
    question: "Who is this course for?",
    answer:
      "Marketing pros, entrepreneurs, freelancers, and graduates ready to master AI-powered digital marketing.",
  },
  {
    question: "What's the course duration and format?",
    answer: "8 Months + 3 months internship",
  },
  {
    question: "What will I learn in this course?",
    answer:
      "Advanced digital marketing with AI, including eCommerce, CRM, media planning, and real client projects.",
  },
  {
    question: "Which tools will I learn?",
    answer:
      "Over 30 AI tools like Jasper, ChatGPT, HubSpot, Canva AI, GA4, Shopify Magic, and Meta Ads AI.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes, you'll get a DMII Expert Certificate and optional certifications from top platforms like Google & Meta.",
  },
  {
    question: "Are there live projects included?",
    answer:
      "Yes, you'll run real-time campaigns and complete a live capstone project with client data.",
  },
  {
    question: "Do I need coding or AI experience?",
    answer:
      "No coding needed—tools are intuitive, and we teach everything from scratch.",
  },
  {
    question: "What support do I get during the course?",
    answer:
      "Live mentorship, Q&A sessions, recorded classes, and a private community.",
  },
  {
    question: "What are the career outcomes?",
    answer:
      "Become a strategist, media planner, eCom marketer, freelancer, or launch your own business.",
  },
  {
    question: "What's the course fee and is EMI available?",
    answer:
      "Affordable fee with EMI options and early bird discounts available.",
  },
];

const IntermediateCourse = () => {
  useEffect(() => {
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

      <main className="flex-grow">
        <HeroSection title="Expert" duration={11} price="1,25,000" />
        <FeaturesSection />
        <BatchesSection batchData={batchData} />
        <ToolsSection />
        <CurriculumSection modules={modules} />
        <FeesSection amount="1,25,000" />
        <ValuePropositionSection />
        <FAQSection faqs={faqs} />
      </main>

      <Footer />
    </div>
  );
};

export default IntermediateCourse;
