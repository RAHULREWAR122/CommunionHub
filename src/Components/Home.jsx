
import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiCalendar, FiBook } from 'react-icons/fi';

const Home = () => {
  return (
    <>
      <section className="text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-indigo-400 opacity-60">
             <img src="https://communionhub.org/static/media/event-2.0cb0185956a6cc4d90f8.webp" alt="People connecting" className="w-full h-full object-cover"/>
          </div>
          <div className="absolute inset-0 opacity-75"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 ">Connecting People Across Faiths & Interests</h1>
            <p className="text-lg md:text-xl mb-8">
              Building bridges between communities through shared experiences and meaningful connections.
            </p>
            <Link 
              to="/events" 
              className="inline-block bg-white text-indigo-600 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">Welcome to the Communion App</h2>
            <p className="text-gray-700 text-lg mb-8 text-center">
              Communion is dedicated to connecting people of all faiths through events and community support. 
              Our platform makes it easy to discover, create, and participate in events that bring people together.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 mx-auto mb-4">
                  <FiUsers className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect</h3>
                <p className="text-gray-600">Meet people from diverse backgrounds and faiths in your community.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 mx-auto mb-4">
                  <FiCalendar className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Participate</h3>
                <p className="text-gray-600">Attend and create events that celebrate diversity and inclusion.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-indigo-600 mx-auto mb-4">
                  <FiBook className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learn</h3>
                <p className="text-gray-600">Broaden your horizons by experiencing different cultures and traditions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
