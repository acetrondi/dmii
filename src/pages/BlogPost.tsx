import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-course-main mb-6">
              Blog Post Not Found
            </h1>
            <p className="text-course-muted mb-8">
              The blog post you are looking for does not exist or has been
              moved.
            </p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog">
                <Button
                  variant="ghost"
                  className="mb-8 text-course-main hover:text-course-accent"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog
                </Button>
              </Link>

              <div className="mb-6">
                <span className="text-sm font-semibold text-course-accent uppercase tracking-wider">
                  {post.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-course-main mt-2">
                  {post.title}
                </h1>
                <div className="flex items-center mt-4">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">
                    {post.readTime} min read
                  </span>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-course-main prose-a:text-course-accent blog-content">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-course-main mb-4">
                Ready to master AI-powered digital marketing?
              </h2>
              <p className="text-course-muted mb-8">
                Join DMII's courses and get hands-on experience with real
                clients and cutting-edge AI tools.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-course-main text-white hover:bg-course-main/90">
                  <Link to="/foundation-in-digital-marketing">
                    Explore Courses
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-course-accent text-course-main hover:bg-course-accent/10"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
