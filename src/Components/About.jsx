import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="text-center py-16 px-4 sm:px-8 bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-800">
          About the Communion App
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          The Communion App connects people of all faiths and backgrounds through events and community support. Our mission is to foster a sense of unity and belonging, where individuals can share their faith, interests, and passions by participating in various events. 
        </p>

        <div className="mt-8 text-lg text-gray-700">
          <h2 className="font-semibold text-indigo-700">Our Mission</h2>
          <p className="mt-2">
            The goal of the Communion App is to create meaningful connections between people through events that cater to different religious, social, and charity interests. We believe that together we can build a more connected and compassionate community.
          </p>
        </div>

        <div className="mt-8">
          <Link to="/events" className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
            Explore Events
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
