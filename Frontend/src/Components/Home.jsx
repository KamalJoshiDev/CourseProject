import React, { useState, useEffect } from 'react';
import Step from './Step';

import UpcomingCourse from './UpcomingCourse';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  const slides = [
    {
      title: "Your Ultimate Study Companion",
      subtitle: "Access premium educational resources",
      features: [
        "High-quality lecture notes and study guides",
        "Interactive online courses",
        "Practice tests and mock exams"
      ],
      primaryBtn: "Explore Resources",
      secondaryBtn: "Learn More",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      bgColor: "from-green-50 to-green-100",
      themeColor: "green"
    },
    {
      title: "Master Your Subjects",
      subtitle: "Comprehensive learning materials for all levels",
      features: [
        "Subject-specific study packages",
        "Expert-created content",
        "Progress tracking tools"
      ],
      primaryBtn: "View Subjects",
      secondaryBtn: "See Pricing",
      image: "https://images.unsplash.com/photo-1581447109200-bf2769116351?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFN0dWR5fGVufDB8fDB8fHww",
      bgColor: "from-blue-50 to-blue-100",
      themeColor: "blue"
    },
    {
      title: "Learn From The Best",
      subtitle: "Courses taught by top instructors",
      features: [
        "Video lectures from experts",
        "Interactive assignments",
        "Personalized feedback"
      ],
      primaryBtn: "Meet Instructors",
      secondaryBtn: "Browse Courses",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      bgColor: "from-purple-50 to-purple-100",
      themeColor: "purple"
    },
    {
      title: "Join Our Community",
      subtitle: "Connect with fellow learners",
      features: [
        "Study groups and forums",
        "Peer-to-peer learning",
        "Live Q&A sessions"
      ],
      primaryBtn: "Join Now",
      secondaryBtn: "See Events",
      image: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3R1ZHl8ZW58MHx8MHx8fDA%3D",
      bgColor: "from-indigo-50 to-indigo-100",
      themeColor: "indigo"
    },
    {
      title: "Track Your Progress",
      subtitle: "Smart tools for academic success",
      features: [
        "Personalized study plans",
        "Performance analytics",
        "Achievement badges"
      ],
      primaryBtn: "Get Started",
      secondaryBtn: "Take Tour",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      bgColor: "from-amber-50 to-amber-100",
      themeColor: "amber"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[currentSlide];

  return (
    <div className="bg-white">
      {/* Hero Section with Carousel */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${current.bgColor}`}>
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:flex lg:items-center lg:py-48 lg:px-8">
          {/* Content */}
          <div className="lg:w-1/2 lg:pr-12 xl:pr-24">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{current.title}</span>
            </h1>

            <p className="mt-3 text-lg text-gray-600 sm:mt-5 sm:text-xl">
              {current.subtitle}
            </p>

            <div className="mt-8 space-y-4">
              {current.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className={`h-5 w-5 text-${current.themeColor}-500`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <a
                href="#"
                className={`inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-md text-white bg-${current.themeColor}-600 hover:bg-${current.themeColor}-700 shadow-md transition-colors duration-200`}
              >
                {current.primaryBtn}
              </a>
              <a
                href="#"
                className={`inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-md text-${current.themeColor}-800 bg-white border border-${current.themeColor}-300 hover:bg-${current.themeColor}-50 transition duration-200`}
              >
                {current.secondaryBtn}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="mt-12 lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <img
                className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                src={current.image}
                alt={current.title}
              />
              <div className={`absolute -bottom-8 -right-8 w-64 h-64 bg-${current.themeColor}-200 rounded-full opacity-20`}></div>
              <div className={`absolute -top-8 -left-8 w-64 h-64 bg-${current.themeColor}-300 rounded-full opacity-20`}></div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg className="relative block w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Other Components */}
      <UpcomingCourse />
      <Step />
    </div>
  );
};

export default Home;
