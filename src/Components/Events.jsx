
import React, { useState } from 'react';
import { initialEvents } from '../data';
import { FiCalendar, FiMapPin, FiTag, FiClock } from 'react-icons/fi';

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    category: 'Religious',
    description: ''
  });

  const categories = ['All', 'Religious', 'Social', 'Charity', 'Educational'];
  
  const filterEvents = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === category));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(), 
      ...formData
    };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    
    if (activeFilter === 'All') {
      setFilteredEvents(updatedEvents);
    } else if (formData.category === activeFilter) {
      setFilteredEvents([...filteredEvents, newEvent]);
    }
    
    setFormData({
      title: '',
      date: '',
      location: '',
      category: 'Religious',
      description: ''
    });
    setShowForm(false);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Upcoming Events</h1>
          
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add New Event
          </button>
        </div>

        {showForm && (
        <div onClick={()=>setShowForm(!showForm)} className="fixed w-full h-full backdrop-blur-[4px] top-0 left-0 flex justify-center items-center  rounded-lg shadow-md p-6 mb-8">
          <div onClick={(e)=> e.stopPropagation()} className='relative w-full max-w-2xl shadow-lg bg-gray-100 p-4 rounded-md '>
           <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-red-600 text-white absolute right-1 top-1 px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer transition"
          >X
       </button>
            <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Event Title*</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Date*</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={today}
                    required
                    className="w-full px-3 py-2 border bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Location*</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-md bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Category*</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border bg-gray-300 cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {categories.filter(cat => cat !== 'All').map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 mb-1">Description*</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full resize-none px-3 py-2 border bg-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <div className="mt-6 flex justify-end">
                <button 
                  type="submit"
                  className="bg-indigo-600 text-white cursor-pointer px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  Add Event
                </button>
              </div>
            </form>
           </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => filterEvents(category)}
                className={`px-4 py-2 rounded-lg transition ${
                  activeFilter === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No events found in this category.</p>
            </div>
          ) : (
            filteredEvents.map(event => (
              <div key={event.id} className="rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h2>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FiCalendar className="mr-2 text-indigo-600" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <FiMapPin className="mr-2 text-indigo-600" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <FiTag className="mr-2 text-indigo-600" />
                      {event.category}
                    </div>
                  </div>
                  
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;

