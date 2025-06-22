import React from "react";
import { useState } from 'react';


const ResourceHub = () => {
    
const resources = [
  // Semester 1 - Fundamentals (1-20)
  { id: 1, title: 'Introduction to Computer Science', course: 'BCA', semester: 1, type: 'video', url: '#', date: '2023-01-05' },
  { id: 2, title: 'Mathematics for Computing', course: 'MCA', semester: 1, type: 'pdf', url: '#', date: '2023-01-10' },
  { id: 3, title: 'Programming in C Basics', course: 'BCA', semester: 1, type: 'video', url: '#', date: '2023-01-15' },
  { id: 4, title: 'Digital Electronics Fundamentals', course: 'MCA', semester: 1, type: 'slides', url: '#', date: '2023-01-20' },
  { id: 5, title: 'Computer Organization', course: 'BCA', semester: 1, type: 'notes', url: '#', date: '2023-01-25' },
  { id: 6, title: 'Discrete Mathematics', course: 'MCA', semester: 1, type: 'pdf', url: '#', date: '2023-02-01' },
  { id: 7, title: 'C Programming Exercises', course: 'BCA', semester: 1, type: 'exercises', url: '#', date: '2023-02-05' },
  { id: 8, title: 'Office Automation Tools', course: 'MCA', semester: 1, type: 'video', url: '#', date: '2023-02-10' },
  { id: 9, title: 'Internet Basics', course: 'BCA', semester: 1, type: 'interactive', url: '#', date: '2023-02-15' },
  { id: 10, title: 'Problem Solving Techniques', course: 'MCA', semester: 1, type: 'notes', url: '#', date: '2023-02-20' },

  // Semester 2 - Core Programming (21-40)
  { id: 21, title: 'Object Oriented Programming', course: 'BCA', semester: 2, type: 'video', url: '#', date: '2023-03-01' },
  { id: 22, title: 'Data Structures - Arrays', course: 'MCA', semester: 2, type: 'pdf', url: '#', date: '2023-03-05' },
  { id: 23, title: 'Java Programming Basics', course: 'BCA', semester: 2, type: 'video', url: '#', date: '2023-03-10' },
  { id: 24, title: 'Linked Lists Tutorial', course: 'MCA', semester: 2, type: 'interactive', url: '#', date: '2023-03-15' },
  { id: 25, title: 'Database Concepts', course: 'BCA', semester: 2, type: 'slides', url: '#', date: '2023-03-20' },
  { id: 26, title: 'Stacks and Queues', course: 'MCA', semester: 2, type: 'animation', url: '#', date: '2023-03-25' },
  { id: 27, title: 'SQL Fundamentals', course: 'BCA', semester: 2, type: 'exercises', url: '#', date: '2023-04-01' },
  { id: 28, title: 'Python Programming', course: 'MCA', semester: 2, type: 'video', url: '#', date: '2023-04-05' },
  { id: 29, title: 'Trees Data Structure', course: 'BCA', semester: 2, type: 'pdf', url: '#', date: '2023-04-10' },
  { id: 30, title: 'Computer Graphics Basics', course: 'MCA', semester: 2, type: 'slides', url: '#', date: '2023-04-15' },

  // Semester 3 - Advanced Concepts (41-60)
  { id: 41, title: 'Operating System Concepts', course: 'BCA', semester: 3, type: 'video', url: '#', date: '2023-05-01' },
  { id: 42, title: 'Algorithm Analysis', course: 'MCA', semester: 3, type: 'pdf', url: '#', date: '2023-05-05' },
  { id: 43, title: 'Web Development Basics', course: 'BCA', semester: 3, type: 'interactive', url: '#', date: '2023-05-10' },
  { id: 44, title: 'Computer Networks', course: 'MCA', semester: 3, type: 'slides', url: '#', date: '2023-05-15' },
  { id: 45, title: 'Software Engineering', course: 'BCA', semester: 3, type: 'notes', url: '#', date: '2023-05-20' },
  { id: 46, title: 'Machine Learning Intro', course: 'MCA', semester: 3, type: 'video', url: '#', date: '2023-06-01' },
  { id: 47, title: 'Android Development', course: 'BCA', semester: 3, type: 'tutorial', url: '#', date: '2023-06-05' },
  { id: 48, title: 'Cloud Computing', course: 'MCA', semester: 3, type: 'pdf', url: '#', date: '2023-06-10' },
  { id: 49, title: 'Compiler Design', course: 'BCA', semester: 3, type: 'slides', url: '#', date: '2023-06-15' },
  { id: 50, title: 'Data Mining Concepts', course: 'MCA', semester: 3, type: 'notes', url: '#', date: '2023-06-20' },

  // Semester 4 - Specializations (61-80)
  { id: 61, title: 'Advanced Java Programming', course: 'BCA', semester: 4, type: 'video', url: '#', date: '2023-07-01' },
  { id: 62, title: 'Artificial Intelligence', course: 'MCA', semester: 4, type: 'pdf', url: '#', date: '2023-07-05' },
  { id: 63, title: 'Network Security', course: 'BCA', semester: 4, type: 'slides', url: '#', date: '2023-07-10' },
  { id: 64, title: 'Big Data Analytics', course: 'MCA', semester: 4, type: 'video', url: '#', date: '2023-07-15' },
  { id: 65, title: 'IoT Fundamentals', course: 'BCA', semester: 4, type: 'interactive', url: '#', date: '2023-07-20' },
  { id: 66, title: 'Blockchain Technology', course: 'MCA', semester: 4, type: 'pdf', url: '#', date: '2023-08-01' },
  { id: 67, title: 'Advanced DBMS', course: 'BCA', semester: 4, type: 'video', url: '#', date: '2023-08-05' },
  { id: 68, title: 'Natural Language Processing', course: 'MCA', semester: 4, type: 'slides', url: '#', date: '2023-08-10' },
  { id: 69, title: 'Computer Vision Basics', course: 'BCA', semester: 4, type: 'notes', url: '#', date: '2023-08-15' },
  { id: 70, title: 'Quantum Computing Intro', course: 'MCA', semester: 4, type: 'pdf', url: '#', date: '2023-08-20' },

  // Semester 5 - Professional Skills (81-100)
  { id: 81, title: 'Project Management', course: 'BCA', semester: 5, type: 'video', url: '#', date: '2023-09-01' },
  { id: 82, title: 'Research Methodology', course: 'MCA', semester: 5, type: 'pdf', url: '#', date: '2023-09-05' },
  { id: 83, title: 'Technical Writing', course: 'BCA', semester: 5, type: 'slides', url: '#', date: '2023-09-10' },
  { id: 84, title: 'Entrepreneurship', course: 'MCA', semester: 5, type: 'video', url: '#', date: '2023-09-15' },
  { id: 85, title: 'IT Service Management', course: 'BCA', semester: 5, type: 'notes', url: '#', date: '2023-09-20' },
  { id: 86, title: 'Cloud Architecture', course: 'MCA', semester: 5, type: 'pdf', url: '#', date: '2023-10-01' },
  { id: 87, title: 'UX Design Principles', course: 'BCA', semester: 5, type: 'video', url: '#', date: '2023-10-05' },
  { id: 88, title: 'Data Visualization', course: 'MCA', semester: 5, type: 'interactive', url: '#', date: '2023-10-10' },
  { id: 89, title: 'IT Ethics and Laws', course: 'BCA', semester: 5, type: 'slides', url: '#', date: '2023-10-15' },
  { id: 90, title: 'Agile Methodologies', course: 'MCA', semester: 5, type: 'video', url: '#', date: '2023-10-20' },

  // Semester 6 - Capstone (101-120)
  { id: 101, title: 'Final Project Guidelines', course: 'BCA', semester: 6, type: 'pdf', url: '#', date: '2023-11-01' },
  { id: 102, title: 'Thesis Writing', course: 'MCA', semester: 6, type: 'video', url: '#', date: '2023-11-05' },
  { id: 103, title: 'Case Studies', course: 'BCA', semester: 6, type: 'slides', url: '#', date: '2023-11-10' },
  { id: 104, title: 'Emerging Technologies', course: 'MCA', semester: 6, type: 'notes', url: '#', date: '2023-11-15' },
  { id: 105, title: 'Industry Trends', course: 'BCA', semester: 6, type: 'video', url: '#', date: '2023-11-20' },
  { id: 106, title: 'Interview Preparation', course: 'MCA', semester: 6, type: 'pdf', url: '#', date: '2023-12-01' },
  { id: 107, title: 'Portfolio Development', course: 'BCA', semester: 6, type: 'interactive', url: '#', date: '2023-12-05' },
  { id: 108, title: 'Research Papers', course: 'MCA', semester: 6, type: 'slides', url: '#', date: '2023-12-10' },
  { id: 109, title: 'Open Source Contribution', course: 'BCA', semester: 6, type: 'video', url: '#', date: '2023-12-15' },
  { id: 110, title: 'Capstone Project Samples', course: 'MCA', semester: 6, type: 'pdf', url: '#', date: '2023-12-20' },

  // Additional Resources (121-200)
  { id: 121, title: 'Git Version Control', course: 'BCA', semester: 3, type: 'video', url: '#', date: '2024-01-01' },
  { id: 122, title: 'Docker Fundamentals', course: 'MCA', semester: 4, type: 'interactive', url: '#', date: '2024-01-05' },
  { id: 123, title: 'Kubernetes Guide', course: 'BCA', semester: 5, type: 'pdf', url: '#', date: '2024-01-10' },
  { id: 124, title: 'AWS Certification Prep', course: 'MCA', semester: 5, type: 'video', url: '#', date: '2024-01-15' },
  { id: 125, title: 'Azure Cloud Services', course: 'BCA', semester: 6, type: 'slides', url: '#', date: '2024-01-20' },
  { id: 126, title: 'Google Cloud Platform', course: 'MCA', semester: 6, type: 'notes', url: '#', date: '2024-02-01' },
  { id: 127, title: 'DevOps Practices', course: 'BCA', semester: 5, type: 'video', url: '#', date: '2024-02-05' },
  { id: 128, title: 'CI/CD Pipelines', course: 'MCA', semester: 5, type: 'pdf', url: '#', date: '2024-02-10' },
  { id: 129, title: 'Microservices Architecture', course: 'BCA', semester: 6, type: 'slides', url: '#', date: '2024-02-15' },
  { id: 130, title: 'Serverless Computing', course: 'MCA', semester: 6, type: 'video', url: '#', date: '2024-02-20' },

  // Programming Languages (131-150)
  { id: 131, title: 'C++ Advanced Concepts', course: 'BCA', semester: 3, type: 'pdf', url: '#', date: '2024-03-01' },
  { id: 132, title: 'Python Data Science', course: 'MCA', semester: 4, type: 'video', url: '#', date: '2024-03-05' },
  { id: 133, title: 'JavaScript Frameworks', course: 'BCA', semester: 4, type: 'interactive', url: '#', date: '2024-03-10' },
  { id: 134, title: 'TypeScript Handbook', course: 'MCA', semester: 5, type: 'pdf', url: '#', date: '2024-03-15' },
  { id: 135, title: 'R for Statistics', course: 'BCA', semester: 5, type: 'video', url: '#', date: '2024-03-20' },
  { id: 136, title: 'Go Programming', course: 'MCA', semester: 6, type: 'slides', url: '#', date: '2024-04-01' },
  { id: 137, title: 'Rust Language Basics', course: 'BCA', semester: 6, type: 'notes', url: '#', date: '2024-04-05' },
  { id: 138, title: 'Kotlin for Android', course: 'MCA', semester: 5, type: 'video', url: '#', date: '2024-04-10' },
  { id: 139, title: 'Swift Programming', course: 'BCA', semester: 6, type: 'pdf', url: '#', date: '2024-04-15' },
  { id: 140, title: 'Dart with Flutter', course: 'MCA', semester: 6, type: 'interactive', url: '#', date: '2024-04-20' },

  // Web Technologies (151-170)
  { id: 151, title: 'HTML5 Complete Reference', course: 'BCA', semester: 2, type: 'pdf', url: '#', date: '2024-05-01' },
  { id: 152, title: 'CSS3 Animations', course: 'MCA', semester: 3, type: 'video', url: '#', date: '2024-05-05' },
  { id: 153, title: 'Bootstrap Framework', course: 'BCA', semester: 3, type: 'slides', url: '#', date: '2024-05-10' },
  { id: 154, title: 'React.js Deep Dive', course: 'MCA', semester: 4, type: 'video', url: '#', date: '2024-05-15' },
  { id: 155, title: 'Angular Framework', course: 'BCA', semester: 4, type: 'pdf', url: '#', date: '2024-05-20' },
  { id: 156, title: 'Vue.js Tutorial', course: 'MCA', semester: 5, type: 'interactive', url: '#', date: '2024-06-01' },
  { id: 157, title: 'Node.js Backend', course: 'BCA', semester: 5, type: 'video', url: '#', date: '2024-06-05' },
  { id: 158, title: 'Express Framework', course: 'MCA', semester: 5, type: 'slides', url: '#', date: '2024-06-10' },
  { id: 159, title: 'MongoDB with Mongoose', course: 'BCA', semester: 6, type: 'notes', url: '#', date: '2024-06-15' },
  { id: 160, title: 'GraphQL API Design', course: 'MCA', semester: 6, type: 'video', url: '#', date: '2024-06-20' },

  // Mobile Development (171-190)
  { id: 171, title: 'Android Studio Guide', course: 'BCA', semester: 5, type: 'pdf', url: '#', date: '2024-07-01' },
  { id: 172, title: 'iOS Development', course: 'MCA', semester: 6, type: 'video', url: '#', date: '2024-07-05' },
  { id: 173, title: 'React Native Crash Course', course: 'BCA', semester: 6, type: 'interactive', url: '#', date: '2024-07-10' },
  { id: 174, title: 'Flutter Widgets', course: 'MCA', semester: 5, type: 'slides', url: '#', date: '2024-07-15' },
  { id: 175, title: 'Mobile UI/UX', course: 'BCA', semester: 6, type: 'notes', url: '#', date: '2024-07-20' },
  { id: 176, title: 'Firebase for Mobile', course: 'MCA', semester: 6, type: 'video', url: '#', date: '2024-08-01' },
  { id: 177, title: 'Mobile Security', course: 'BCA', semester: 5, type: 'pdf', url: '#', date: '2024-08-05' },
  { id: 178, title: 'Cross-Platform Apps', course: 'MCA', semester: 6, type: 'slides', url: '#', date: '2024-08-10' },
  { id: 179, title: 'Mobile Testing', course: 'BCA', semester: 6, type: 'video', url: '#', date: '2024-08-15' },
  { id: 180, title: 'App Store Optimization', course: 'MCA', semester: 6, type: 'notes', url: '#', date: '2024-08-20' },

  // Final Set (191-200)
  { id: 191, title: 'Ethical Hacking Basics', course: 'BCA', semester: 6, type: 'video', url: '#', date: '2024-09-01' },
  { id: 192, title: 'Penetration Testing', course: 'MCA', semester: 6, type: 'pdf', url: '#', date: '2024-09-05' },
  { id: 193, title: 'Cyber Laws', course: 'BCA', semester: 6, type: 'slides', url: '#', date: '2024-09-10' },
  { id: 194, title: 'Digital Forensics', course: 'MCA', semester: 6, type: 'video', url: '#', date: '2024-09-15' },
  { id: 195, title: 'Bug Bounty Guide', course: 'BCA', semester: 6, type: 'interactive', url: '#', date: '2024-09-20' },
  { id: 196, title: 'Secure Coding Practices', course: 'MCA', semester: 6, type: 'pdf', url: '#', date: '2024-10-01' },
  { id: 197, title: 'Cryptography Algorithms', course: 'BCA', semester: 6, type: 'slides', url: '#', date: '2024-10-05' },
  { id: 198, title: 'Network Defense', course: 'MCA', semester: 6, type: 'video', url: '#', date: '2024-10-10' },
  { id: 199, title: 'Security Certifications', course: 'BCA', semester: 6, type: 'notes', url: '#', date: '2024-10-15' },
  { id: 200, title: 'Final Project Submission', course: 'MCA', semester: 6, type: 'pdf', url: '#', date: '2024-10-20' }
];
    const [filters, setFilters] = useState({
        course: 'all',
        semester: 'all',
        type: 'all',
        search: ''
    });

    const filteredResources = resources.filter(resource => {
        return (
            (filters.course === 'all' || resource.course === filters.course) &&
            (filters.semester === 'all' || resource.semester.toString() === filters.semester) &&
            (filters.type === 'all' || resource.type === filters.type) &&
            (resource.title.toLowerCase().includes(filters.search.toLowerCase()))
    )});

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    }; 

    
    const getTypeIcon = (type) => {
        switch (type) {
            case 'notes':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                );
            case 'videos':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                );
            case 'pdf':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                );
            case 'slides':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                );
            case 'book':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                );
            case 'exercises':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                );
            default:
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                );
        }
    };

    
    const getTypeColor = (type) => {
        switch (type) {
            case 'notes': return 'bg-purple-100 text-purple-800';
            case 'videos': return 'bg-blue-100 text-blue-800';
            case 'pdf': return 'bg-red-100 text-red-800';
            case 'slides': return 'bg-amber-100 text-amber-800';
            case 'book': return 'bg-emerald-100 text-emerald-800';
            case 'exercises': return 'bg-indigo-100 text-indigo-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Study Resource Hub
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        Find all your academic resources in one place
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
                    {/* Total Resources */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-indigo-500 rounded-lg p-3">
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">Total Resources</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">{resources.length}</div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MCA Resources */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-green-500 rounded-lg p-3">
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">MCA Resources</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">
                                                {resources.filter(r => r.course === 'MCA').length}
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BCA Resources */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="p-5">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 bg-blue-500 rounded-lg p-3">
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div className="ml-5 w-0 flex-1">
                                    <dl>
                                        <dt className="text-sm font-medium text-gray-500 truncate">BCA Resources</dt>
                                        <dd className="flex items-baseline">
                                            <div className="text-2xl font-semibold text-gray-900">
                                                {resources.filter(r => r.course === 'BCA').length}
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter Resources</h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                        {/* Course Filter */}
                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
                                Course
                            </label>
                            <select
                                id="course"
                                name="course"
                                value={filters.course}
                                onChange={handleFilterChange}
                                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border bg-white text-sm"
                            >
                                <option value="all">All Courses</option>
                                <option value="MCA">MCA</option>
                                <option value="BCA">BCA</option>
                            </select>
                        </div>

                        {/* Semester Filter */}
                        <div>
                            <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">
                                Semester
                            </label>
                            <select
                                id="semester"
                                name="semester"
                                value={filters.semester}
                                onChange={handleFilterChange}
                                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border bg-white text-sm"
                            >
                                <option value="all">All Semesters</option>
                                <option value="1">Semester 1</option>
                                <option value="2">Semester 2</option>
                                <option value="3">Semester 3</option>
                                <option value="4">Semester 4</option>
                                <option value="5">Semester 5</option>
                                <option value="6">Semester 6</option>
                            </select>
                        </div>

                        {/* Resource Type Filter */}
                        <div>
                            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                                Resource Type
                            </label>
                            <select
                                id="type"
                                name="type"
                                value={filters.type}
                                onChange={handleFilterChange}
                                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border bg-white text-sm"
                            >
                                <option value="all">All Types</option>
                                <option value="notes">Notes</option>
                                <option value="videos">Videos</option>
                                <option value="pdf">PDFs</option>
                                <option value="slides">Slides</option>
                                <option value="book">Books</option>
                                <option value="exercises">Exercises</option>
                            </select>
                        </div>

                        {/* Search */}
                        <div className="lg:col-span-2">
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                                Search Resources
                            </label>
                            <div className="relative rounded-md shadow-sm">
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    value={filters.search}
                                    onChange={handleFilterChange}
                                    placeholder="Search by resource name..."
                                    className="block w-full rounded-lg border-gray-300 pl-4 pr-10 py-2 focus:border-indigo-500 focus:ring-indigo-500 border text-sm"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resources Grid */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    {filteredResources.length > 0 ? (
                        <ul className="divide-y divide-gray-200">
                            {filteredResources.map((resource) => (
                                <li key={resource.id} className="hover:bg-gray-50 transition-colors duration-150">
                                    <a href={resource.url} className="block">
                                        <div className="px-6 py-5">
                                            <div className="flex items-start">
                                                <div className={`flex-shrink-0 p-3 rounded-lg ${getTypeColor(resource.type)}`}>
                                                    {getTypeIcon(resource.type)}
                                                </div>
                                                <div className="ml-4 flex-1">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-150">
                                                            {resource.title}
                                                        </h3>
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                                                            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                                                        </span>
                                                    </div>
                                                    <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
                                                        <div className="flex items-center text-sm text-gray-500">
                                                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                                            </svg>
                                                            {resource.course}
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-500 mt-2 sm:mt-0">
                                                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                            </svg>
                                                            Semester {resource.semester}
                                                        </div>
                                                        <div className="flex items-center text-sm text-gray-500 mt-2 sm:mt-0">
                                                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                            </svg>
                                                            {resource.date}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center py-16">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
                                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="mt-3 text-lg font-medium text-gray-900">No resources found</h3>
                            <p className="mt-2 text-sm text-gray-500">
                                Try adjusting your search or filter criteria
                            </p>
                            <div className="mt-6">
                                <button
                                    onClick={() => setFilters({
                                        course: 'all',
                                        semester: 'all',
                                        type: 'all',
                                        search: ''
                                    })}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Reset all filters
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            
            </div>
            
        </div>
    );
};

export default ResourceHub;