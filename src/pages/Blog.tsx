import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section
          className="pt-20 pb-16 bg-cover bg-center"
          style={{ backgroundImage: "url('/brand/bgmaindmii.jpg')" }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                DMII Blog
              </h1>
              <p className="text-xl text-white text-opacity-90 mb-8">
                Insights, trends, and strategies for AI-powered digital
                marketing
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.slug}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover"
                    />
                  </Link>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-course-accent uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-course-main mb-3 hover:text-course-accent transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-course-muted mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link to={`/blog/${post.slug}`}>
                        <Button
                          variant="ghost"
                          className="text-course-main hover:text-course-accent"
                        >
                          Read More <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
