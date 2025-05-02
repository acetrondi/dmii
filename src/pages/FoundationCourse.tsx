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
    start: "May 04, 2025",
    capacity: "15 students",
  },
  {
    type: "Weekday (M/W/F)",
    start: "May 02, 2025",
    capacity: "25 students",
  },
];
const modules = [
  {
    id: "module-1",
    title: "Module 1: Introduction to Marketing",
    content: (
      <>
        <p className="mb-3">
          Goal: Understand the roots of marketing and how it evolved into
          digital.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>What is Marketing?</li>
          <li>Introduction, Definition, Real-life Examples</li>
          <li>Traditional vs Digital Marketing</li>
          <li>Definitions, Methods, Use Cases, Case Studies</li>
        </ul>
      </>
    ),
  },
  {
    id: "module-2",
    title: "Module 2: The Digital Mindset",
    content: (
      <>
        <p className="mb-3">
          Goal: Learn how digital marketing functions and what makes it
          different.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Platforms Overview: Social, Search, Email</li>
          <li>Customer Journey Models: AIDA, ACCA, Sales Funnels</li>
          <li>USP Creation</li>
          <li>Case Study + Funnel Project</li>
        </ul>
      </>
    ),
  },
  {
    id: "module-3",
    title: "Module 3: Knowing Your Audience",
    content: (
      <>
        <p className="mb-3">
          Goal: Build empathy and strategy by identifying your ideal customer.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Buyer Personas: Templates, Examples (with top 2 brand studies)
          </li>
          <li>
            Communication Strategy: Storytelling, Brand Voice, Ad Messaging
          </li>
          <li>What is Marketing vs Ad Communication</li>
          <li>Powerful Presentations & Pitching</li>
          <li>Design Basics</li>
          <li>Presenting with Confidence</li>
        </ul>
      </>
    ),
  },
  {
    id: "module-4",
    title: "Module 4: Content, Copy & Creative Writing",
    content: (
      <>
        <p className="mb-3">Goal: Build writing skills for modern marketing.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Types of Content (Short-form, Long-form, UGC, AI-generated)</li>
          <li>Hooks, Headlines, CTAs</li>
          <li>Brand Tone & Voice</li>
          <li>EVENT: Live Debate – "Creativity vs Algorithms"</li>
        </ul>
      </>
    ),
  },
  {
    id: "module-5",
    title: "Module 5: Social Media Marketing (Organic)",
    content: (
      <>
        <p className="mb-3">
          Goal: Create a strong organic presence on major platforms.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Platforms Covered: Instagram, Facebook, LinkedIn, YouTube, Quora, X
            (Twitter), Snapchat
          </li>
          <li>Platform Strengths + Content Pillars</li>
          <li>Analytics Basics</li>
          <li>Competitor Study & Case Examples</li>
          <li>Project: Build and Present an Organic Strategy for a Brand</li>
          <li>Paid Social Advertising</li>
        </ul>
      </>
    ),
  },
  {
    id: "module-6",
    title: "Module 6: SEO & SEM Fundamentals",
    content: (
      <>
        <p className="mb-3">
          Goal: Learn how brands appear on Google organically and via ads.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>SEO Basics: Keywords, On-page, Off-page, Tools</li>
          <li>Tools: Ubersuggest, Google Search Console, ChatGPT for SEO</li>
          <li>SEM (Search Engine Marketing)</li>
          <li>Google Search Ads Overview</li>
          <li>Difference from SEO</li>
          <li>Ad Copy & Structure</li>
        </ul>
      </>
    ),
  },
  {
    id: "module-7",
    title: "Module 7: Final Project Presentation",
    content: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Combine everything learned into one strategy for a mock or real
            brand
          </li>
          <li>Present in class using Canva / Slides / Video format</li>
          <li>Peer + Mentor Feedback</li>
          <li>Foundation Course Certification from DMII</li>
          <li>Portfolio-ready project</li>
          <li>Upgrade guidance to Intermediate level</li>
          <li>Lifetime access to learning community</li>
        </ul>
      </>
    ),
  },
];

const faqs = [
  {
    question: "Who is this course for?",
    answer:
      "This course is perfect for beginners — students, fresh graduates, freelancers, and career switchers who want to enter the world of digital marketing with an AI edge. No prior experience needed!",
  },
  {
    question: "Do I need any technical or marketing background to join?",
    answer:
      "Not at all. We start from the very basics and gradually introduce concepts, tools, and strategies — all with hands-on support and guidance.",
  },
  {
    question: "What will I be able to do after completing this course?",
    answer:
      "You'll be able to confidently: Create content and social media strategies, Use AI tools for marketing tasks, Run basic ad campaigns, Build and present pitch decks, Add one solid project to your portfolio, and Prepare for freelance or internship opportunities.",
  },
  {
    question: "What tools will I learn to use?",
    answer:
      "You'll get hands-on experience with tools like: Canva, ChatGPT, Meta Ads Manager (overview), Google Sheets, Mailchimp, Instagram, LinkedIn, YouTube, and more.",
  },
  {
    question: "Is this a live or recorded course?",
    answer:
      "It's a hybrid model — mostly live sessions for interactive learning, plus recorded content you can revisit anytime. You also get lifetime access to updated resources.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! You'll receive a Foundation Certification from DMII, recognized by clients and companies. It's a great way to showcase your skills on LinkedIn and resumes.",
  },
  {
    question: "Are there any assignments or projects?",
    answer:
      "Yes — this is a hands-on course. You'll work on mini-assignments throughout and complete a final brand strategy project where you present your own pitch deck.",
  },
  {
    question: "Can I upgrade to the Intermediate course later?",
    answer:
      "Absolutely! Many of our students continue their journey with us. You'll get a special discounted upgrade and a smooth transition into the Intermediate level.",
  },
  {
    question: "What's the schedule like? Are weekend batches available?",
    answer:
      "Yes! We offer flexible options including weekend and evening batches. You can choose what fits your routine best.",
  },
  {
    question: "What if I have doubts during the course?",
    answer:
      "You'll have access to doubt-clearing sessions, a dedicated mentor, and a community group where you can ask questions anytime. You're never learning alone.",
  },
];
const FoundationCourse = () => {
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
        <HeroSection />
        <FeaturesSection />
        <BatchesSection batchData={batchData} />
        <ToolsSection />
        <CurriculumSection modules={modules} />
        <FeesSection />
        <ValuePropositionSection />
        <FAQSection faqs={faqs} />
      </main>

      <Footer />
    </div>
  );
};

export default FoundationCourse;
