import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-lg mb-6">Discover the latest stories, ideas, and trends from creative minds all over the world.</p>
          <Link to="/blogs">
            <button className="px-6 py-2 bg-gray-500 rounded hover:bg-gray-600 transition">
              Explore Blogs
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Blogs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">Featured Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/300" alt="Blog 1" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Blog Post Title 1</h3>
                <p className="text-gray-700 mb-4">A brief description of what this blog post is about. It should entice the reader to click and read more.</p>
                <Link to="/blog/1" className="text-gray-500 hover:text-gray-900 transition">Read More →</Link>
              </div>
            </div>
            {/* Blog Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/300" alt="Blog 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Blog Post Title 2</h3>
                <p className="text-gray-700 mb-4">A brief description of what this blog post is about. It should entice the reader to click and read more.</p>
                <Link to="/blog/2" className="text-gray-500 hover:text-gray-900 transition">Read More →</Link>
              </div>
            </div>
            {/* Blog Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <img src="https://via.placeholder.com/300" alt="Blog 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Blog Post Title 3</h3>
                <p className="text-gray-700 mb-4">A brief description of what this blog post is about. It should entice the reader to click and read more.</p>
                <Link to="/blog/3" className="text-gray-500 hover:text-gray-900 transition">Read More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Want to Share Your Thoughts?</h2>
          <p className="text-lg mb-6">Join our community of writers and share your unique insights with the world.</p>
          <Link to="/addblog">
            <button className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
              Add a New Blog
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
