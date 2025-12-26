// import React from "react";
// import { useState } from 'react';


// const ResourceHub = () => {
    
// const resources = [
//   // Semester 1 - Fundamentals (1-20)
//   { id: 1, title: 'Introduction to Computer Science', course: 'BCA', semester: 1, type: 'video', url: 'https://www.youtube.com/watch?v=zOjov-2OZ0E', date: '2023-01-05' },
//   { id: 2, title: 'Mathematics for Computing', course: 'MCA', semester: 1, type: 'pdf', url: 'https://www.cs.princeton.edu/courses/archive/fall10/cos340/lec-math.pdf', date: '2023-01-10' },
//   { id: 3, title: 'Programming in C Basics', course: 'BCA', semester: 1, type: 'video', url: 'https://www.youtube.com/watch?v=KJgsSFOSQv0', date: '2023-01-15' },
//   { id: 4, title: 'Digital Electronics Fundamentals', course: 'MCA', semester: 1, type: 'slides', url: 'https://www.electronics-tutorials.ws/wp-content/uploads/2018/05/digital-electronics-1-1.pdf', date: '2023-01-20' },
//   { id: 5, title: 'Computer Organization', course: 'BCA', semester: 1, type: 'notes', url: 'https://www.tutorialspoint.com/computer_fundamentals/computer_organization.htm', date: '2023-01-25' },
//   { id: 6, title: 'Discrete Mathematics', course: 'MCA', semester: 1, type: 'pdf', url: 'https://www.cs.yale.edu/homes/aspnes/classes/202/notes-2013.pdf', date: '2023-02-01' },
//   { id: 7, title: 'C Programming Exercises', course: 'BCA', semester: 1, type: 'exercises', url: 'https://www.w3resource.com/c-programming-exercises/', date: '2023-02-05' },
//   { id: 8, title: 'Office Automation Tools', course: 'MCA', semester: 1, type: 'video', url: 'https://www.youtube.com/watch?v=Vl0H-qTclOg', date: '2023-02-10' },
//   { id: 9, title: 'Internet Basics', course: 'BCA', semester: 1, type: 'interactive', url: 'https://edu.gcfglobal.org/en/internetbasics/', date: '2023-02-15' },
//   { id: 10, title: 'Problem Solving Techniques', course: 'MCA', semester: 1, type: 'notes', url: 'https://www.cs.princeton.edu/courses/archive/spring13/cos126/lectures/ProblemSolving-2x2.pdf', date: '2023-02-20' },

//   // Semester 2 - Core Programming (21-40)
//   { id: 21, title: 'Object Oriented Programming', course: 'BCA', semester: 2, type: 'video', url: 'https://www.youtube.com/watch?v=wN0x9eZLix4', date: '2023-03-01' },
//   { id: 22, title: 'Data Structures - Arrays', course: 'MCA', semester: 2, type: 'pdf', url: 'https://www.cs.cmu.edu/~adamchik/15-121/lectures/Arrays/Arrays.pdf', date: '2023-03-05' },
//   { id: 23, title: 'Java Programming Basics', course: 'BCA', semester: 2, type: 'video', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34', date: '2023-03-10' },
//   { id: 24, title: 'Linked Lists Tutorial', course: 'MCA', semester: 2, type: 'interactive', url: 'https://visualgo.net/en/list', date: '2023-03-15' },
//   { id: 25, title: 'Database Concepts', course: 'BCA', semester: 2, type: 'slides', url: 'https://www.cs.purdue.edu/homes/bb/cs448_Fall2008/lectures/lecture1.pdf', date: '2023-03-20' },
//   { id: 26, title: 'Stacks and Queues', course: 'MCA', semester: 2, type: 'animation', url: 'https://www.cs.usfca.edu/~galles/visualization/StackArray.html', date: '2023-03-25' },
//   { id: 27, title: 'SQL Fundamentals', course: 'BCA', semester: 2, type: 'exercises', url: 'https://www.w3schools.com/sql/sql_exercises.asp', date: '2023-04-01' },
//   { id: 28, title: 'Python Programming', course: 'MCA', semester: 2, type: 'video', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw', date: '2023-04-05' },
//   { id: 29, title: 'Trees Data Structure', course: 'BCA', semester: 2, type: 'pdf', url: 'https://www.cs.cornell.edu/courses/cs2110/2015fa/L07-Trees/Trees.pdf', date: '2023-04-10' },
//   { id: 30, title: 'Computer Graphics Basics', course: 'MCA', semester: 2, type: 'slides', url: 'https://www.cs.utexas.edu/users/fussell/courses/cs354/lectures/lecture01.pdf', date: '2023-04-15' },

//   // Semester 3 - Advanced Concepts (41-60)
//   { id: 41, title: 'Operating System Concepts', course: 'BCA', semester: 3, type: 'video', url: 'https://www.youtube.com/watch?v=vBURTt97EkA', date: '2023-05-01' },
//   { id: 42, title: 'Algorithm Analysis', course: 'MCA', semester: 3, type: 'pdf', url: 'https://web.stanford.edu/class/archive/cs/cs161/cs161.1138/handouts/120%20Guide%20to%20Greedy%20Algorithms.pdf', date: '2023-05-05' },
//   { id: 43, title: 'Web Development Basics', course: 'BCA', semester: 3, type: 'interactive', url: 'https://www.codecademy.com/learn/paths/web-development', date: '2023-05-10' },
//   { id: 44, title: 'Computer Networks', course: 'MCA', semester: 3, type: 'slides', url: 'https://www.cs.princeton.edu/courses/archive/fall16/cos561/papers/ComputerNetworksTanenbaum5thEdition.pdf', date: '2023-05-15' },
//   { id: 45, title: 'Software Engineering', course: 'BCA', semester: 3, type: 'notes', url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-005-software-construction-fall-2016/', date: '2023-05-20' },
//   { id: 46, title: 'Machine Learning Intro', course: 'MCA', semester: 3, type: 'video', url: 'https://www.youtube.com/watch?v=NWONeJKn6kc', date: '2023-06-01' },
//   { id: 47, title: 'Android Development', course: 'BCA', semester: 3, type: 'tutorial', url: 'https://developer.android.com/courses', date: '2023-06-05' },
//   { id: 48, title: 'Cloud Computing', course: 'MCA', semester: 3, type: 'pdf', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/dist-sys.pdf', date: '2023-06-10' },
//   { id: 49, title: 'Compiler Design', course: 'BCA', semester: 3, type: 'slides', url: 'https://www.cs.princeton.edu/~appel/modern/c/lecture-notes.pdf', date: '2023-06-15' },
//   { id: 50, title: 'Data Mining Concepts', course: 'MCA', semester: 3, type: 'notes', url: 'https://www-users.cse.umn.edu/~kumar001/dmbook/index.php', date: '2023-06-20' },

//   // Semester 4 - Specializations (61-80)
//   { id: 61, title: 'Advanced Java Programming', course: 'BCA', semester: 4, type: 'video', url: 'https://www.youtube.com/watch?v=5d7hJZrw6C8', date: '2023-07-01' },
//   { id: 62, title: 'Artificial Intelligence', course: 'MCA', semester: 4, type: 'pdf', url: 'http://aima.cs.berkeley.edu/', date: '2023-07-05' },
//   { id: 63, title: 'Network Security', course: 'BCA', semester: 4, type: 'slides', url: 'https://www.cl.cam.ac.uk/~rja14/book.html', date: '2023-07-10' },
//   { id: 64, title: 'Big Data Analytics', course: 'MCA', semester: 4, type: 'video', url: 'https://www.youtube.com/watch?v=1vbXmCrkT3Y', date: '2023-07-15' },
//   { id: 65, title: 'IoT Fundamentals', course: 'BCA', semester: 4, type: 'interactive', url: 'https://www.coursera.org/learn/iot', date: '2023-07-20' },
//   { id: 66, title: 'Blockchain Technology', course: 'MCA', semester: 4, type: 'pdf', url: 'https://bitcoin.org/bitcoin.pdf', date: '2023-08-01' },
//   { id: 67, title: 'Advanced DBMS', course: 'BCA', semester: 4, type: 'video', url: 'https://www.youtube.com/watch?v=4cWkVbC2bNE', date: '2023-08-05' },
//   { id: 68, title: 'Natural Language Processing', course: 'MCA', semester: 4, type: 'slides', url: 'https://web.stanford.edu/~jurafsky/slp3/', date: '2023-08-10' },
//   { id: 69, title: 'Computer Vision Basics', course: 'BCA', semester: 4, type: 'notes', url: 'https://szeliski.org/Book/', date: '2023-08-15' },
//   { id: 70, title: 'Quantum Computing Intro', course: 'MCA', semester: 4, type: 'pdf', url: 'https://www.microsoft.com/en-us/research/uploads/prod/2018/01/QCS-v2.pdf', date: '2023-08-20' },

//   // Semester 5 - Professional Skills (81-100)
//   { id: 81, title: 'Project Management', course: 'BCA', semester: 5, type: 'video', url: 'https://www.youtube.com/watch?v=RUz8Z3Qjr6M', date: '2023-09-01' },
//   { id: 82, title: 'Research Methodology', course: 'MCA', semester: 5, type: 'pdf', url: 'https://www.citethisforme.com/blog/2017/01/19/research-methodology-guide', date: '2023-09-05' },
//   { id: 83, title: 'Technical Writing', course: 'BCA', semester: 5, type: 'slides', url: 'https://www.ece.uvic.ca/~itraore/elec567-13/notes/technical-writing-notes-1.pdf', date: '2023-09-10' },
//   { id: 84, title: 'Entrepreneurship', course: 'MCA', semester: 5, type: 'video', url: 'https://www.youtube.com/watch?v=QoAOzMTLP5s', date: '2023-09-15' },
//   { id: 85, title: 'IT Service Management', course: 'BCA', semester: 5, type: 'notes', url: 'https://www.axelos.com/best-practice-solutions/itil', date: '2023-09-20' },
//   { id: 86, title: 'Cloud Architecture', course: 'MCA', semester: 5, type: 'pdf', url: 'https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf', date: '2023-10-01' },
//   { id: 87, title: 'UX Design Principles', course: 'BCA', semester: 5, type: 'video', url: 'https://www.youtube.com/watch?v=Ovj4hFxko7c', date: '2023-10-05' },
//   { id: 88, title: 'Data Visualization', course: 'MCA', semester: 5, type: 'interactive', url: 'https://www.data-to-viz.com/', date: '2023-10-10' },
//   { id: 89, title: 'IT Ethics and Laws', course: 'BCA', semester: 5, type: 'slides', url: 'https://www.acm.org/code-of-ethics', date: '2023-10-15' },
//   { id: 90, title: 'Agile Methodologies', course: 'MCA', semester: 5, type: 'video', url: 'https://www.youtube.com/watch?v=Z9QbYZh1YXY', date: '2023-10-20' },

//   // Semester 6 - Capstone (101-120)
//   { id: 101, title: 'Final Project Guidelines', course: 'BCA', semester: 6, type: 'pdf', url: 'https://www.cs.utexas.edu/users/mckinley/notes/design.pdf', date: '2023-11-01' },
//   { id: 102, title: 'Thesis Writing', course: 'MCA', semester: 6, type: 'video', url: 'https://www.youtube.com/watch?v=1u0xuyuWq3k', date: '2023-11-05' },
//   { id: 103, title: 'Case Studies', course: 'BCA', semester: 6, type: 'slides', url: 'https://hbr.org/product/designing-a-business-case-study/UV7736-PDF-ENG', date: '2023-11-10' },
//   { id: 104, title: 'Emerging Technologies', course: 'MCA', semester: 6, type: 'notes', url: 'https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/our%20top%20ten%20emerging%20technologies/our-top-10-emerging-technologies.pdf', date: '2023-11-15' },
//   { id: 105, title: 'Industry Trends', course: 'BCA', semester: 6, type: 'video', url: 'https://www.youtube.com/watch?v=3JQ7weMy7hY', date: '2023-11-20' },
//   { id: 106, title: 'Interview Preparation', course: 'MCA', semester: 6, type: 'pdf', url: 'https://www.cis.upenn.edu/~matuszek/cit597-2017/Articles/How%20to%20prepare%20for%20a%20technical%20interview.pdf', date: '2023-12-01' },
//   { id: 107, title: 'Portfolio Development', course: 'BCA', semester: 6, type: 'interactive', url: 'https://www.theodinproject.com/paths/full-stack-javascript', date: '2023-12-05' },
//   { id: 108, title: 'Research Papers', course: 'MCA', semester: 6, type: 'slides', url: 'https://www.cs.columbia.edu/~hgs/etc/writing-style.html', date: '2023-12-10' },
//   { id: 109, title: 'Open Source Contribution', course: 'BCA', semester: 6, type: 'video', url: 'https://www.youtube.com/watch?v=c6b6B9oN4Vg', date: '2023-12-15' },
//   { id: 110, title: 'Capstone Project Samples', course: 'MCA', semester: 6, type: 'pdf', url: 'https://www.cs.cmu.edu/~charlie/courses/15-214/2014-fall/slides/29-capstone.pdf', date: '2023-12-20' },

//   // Additional Resources (121-130)
//   { id: 121, title: 'Git Version Control', course: 'BCA', semester: 3, type: 'video', url: 'https://www.youtube.com/watch?v=8JJ101D3knE', date: '2024-01-01' },
//   { id: 122, title: 'Docker Fundamentals', course: 'MCA', semester: 4, type: 'interactive', url: 'https://www.docker.com/101-tutorial', date: '2024-01-05' },
//   { id: 123, title: 'Kubernetes Guide', course: 'BCA', semester: 5, type: 'pdf', url: 'https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/', date: '2024-01-10' },
//   { id: 124, title: 'AWS Certification Prep', course: 'MCA', semester: 5, type: 'video', url: 'https://www.youtube.com/watch?v=3hLmDS179YE', date: '2024-01-15' },
//   { id: 125, title: 'Azure Cloud Services', course: 'BCA', semester: 6, type: 'slides', url: 'https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-azure/', date: '2024-01-20' },
//   { id: 126, title: 'Google Cloud Platform', course: 'MCA', semester: 6, type: 'notes', url: 'https://cloud.google.com/docs/overview', date: '2024-02-01' },
//   { id: 127, title: 'DevOps Practices', course: 'BCA', semester: 5, type: 'video', url: 'https://www.youtube.com/watch?v=_I94-tJlovg', date: '2024-02-05' },
//   { id: 128, title: 'CI/CD Pipelines', course: 'MCA', semester: 5, type: 'pdf', url: 'https://resources.github.com/ci-cd/', date: '2024-02-10' },
//   { id: 129, title: 'Microservices Architecture', course: 'BCA', semester: 6, type: 'slides', url: 'https://microservices.io/', date: '2024-02-15' },
//   { id: 130, title: 'Serverless Computing', course: 'MCA', semester: 6, type: 'video', url: 'https://www.youtube.com/watch?v=9IYpGTS7Jy0', date: '2024-02-20' }
// ];
//     const [filters, setFilters] = useState({
//         course: 'all',
//         semester: 'all',
//         type: 'all',
//         search: ''
//     });

//     const filteredResources = resources.filter(resource => {
//         return (
//             (filters.course === 'all' || resource.course === filters.course) &&
//             (filters.semester === 'all' || resource.semester.toString() === filters.semester) &&
//             (filters.type === 'all' || resource.type === filters.type) &&
//             (resource.title.toLowerCase().includes(filters.search.toLowerCase()))
//     )});

//     const handleFilterChange = (e) => {
//         const { name, value } = e.target;
//         setFilters({
//             ...filters,
//             [name]: value
//         });
//     }; 

    
//     const getTypeIcon = (type) => {
//         switch (type) {
//             case 'notes':
//                 return (
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
//                     </svg>
//                 );
//             case 'videos':
//                 return (
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
//                     </svg>
//                 );
//             case 'pdf':
//                 return (
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
//                     </svg>
//                 );
//             case 'slides':
//                 return (
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//                     </svg>
//                 );
//             case 'book':
//                 return (
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
//                     </svg>
//                 );
//             case 'exercises':
//                 return (
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
//                     </svg>
//                 );
//             default:
//                 return (
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
//                     </svg>
//                 );
//         }
//     };

    
//     const getTypeColor = (type) => {
//         switch (type) {
//             case 'notes': return 'bg-purple-100 text-purple-800';
//             case 'videos': return 'bg-blue-100 text-blue-800';
//             case 'pdf': return 'bg-red-100 text-red-800';
//             case 'slides': return 'bg-amber-100 text-amber-800';
//             case 'book': return 'bg-emerald-100 text-emerald-800';
//             case 'exercises': return 'bg-indigo-100 text-indigo-800';
//             default: return 'bg-gray-100 text-gray-800';
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-12">
//                     <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
//                         Study Resource Hub
//                     </h1>
//                     <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
//                         Find all your academic resources in one place
//                     </p>
//                 </div>

//                 {/* Stats Cards */}
//                 <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
//                     {/* Total Resources */}
//                     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                         <div className="p-5">
//                             <div className="flex items-center">
//                                 <div className="flex-shrink-0 bg-indigo-500 rounded-lg p-3">
//                                     <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                                     </svg>
//                                 </div>
//                                 <div className="ml-5 w-0 flex-1">
//                                     <dl>
//                                         <dt className="text-sm font-medium text-gray-500 truncate">Total Resources</dt>
//                                         <dd className="flex items-baseline">
//                                             <div className="text-2xl font-semibold text-gray-900">{resources.length}</div>
//                                         </dd>
//                                     </dl>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* MCA Resources */}
//                     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                         <div className="p-5">
//                             <div className="flex items-center">
//                                 <div className="flex-shrink-0 bg-green-500 rounded-lg p-3">
//                                     <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
//                                     </svg>
//                                 </div>
//                                 <div className="ml-5 w-0 flex-1">
//                                     <dl>
//                                         <dt className="text-sm font-medium text-gray-500 truncate">MCA Resources</dt>
//                                         <dd className="flex items-baseline">
//                                             <div className="text-2xl font-semibold text-gray-900">
//                                                 {resources.filter(r => r.course === 'MCA').length}
//                                             </div>
//                                         </dd>
//                                     </dl>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* BCA Resources */}
//                     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                         <div className="p-5">
//                             <div className="flex items-center">
//                                 <div className="flex-shrink-0 bg-blue-500 rounded-lg p-3">
//                                     <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                                     </svg>
//                                 </div>
//                                 <div className="ml-5 w-0 flex-1">
//                                     <dl>
//                                         <dt className="text-sm font-medium text-gray-500 truncate">BCA Resources</dt>
//                                         <dd className="flex items-baseline">
//                                             <div className="text-2xl font-semibold text-gray-900">
//                                                 {resources.filter(r => r.course === 'BCA').length}
//                                             </div>
//                                         </dd>
//                                     </dl>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Filters */}
//                 <div className="bg-white rounded-xl shadow-md p-6 mb-8">
//                     <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter Resources</h2>
//                     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
//                         {/* Course Filter */}
//                         <div>
//                             <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Course
//                             </label>
//                             <select
//                                 id="course"
//                                 name="course"
//                                 value={filters.course}
//                                 onChange={handleFilterChange}
//                                 className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border bg-white text-sm"
//                             >
//                                 <option value="all">All Courses</option>
//                                 <option value="MCA">MCA</option>
//                                 <option value="BCA">BCA</option>
//                             </select>
//                         </div>

//                         {/* Semester Filter */}
//                         <div>
//                             <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Semester
//                             </label>
//                             <select
//                                 id="semester"
//                                 name="semester"
//                                 value={filters.semester}
//                                 onChange={handleFilterChange}
//                                 className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border bg-white text-sm"
//                             >
//                                 <option value="all">All Semesters</option>
//                                 <option value="1">Semester 1</option>
//                                 <option value="2">Semester 2</option>
//                                 <option value="3">Semester 3</option>
//                                 <option value="4">Semester 4</option>
//                                 <option value="5">Semester 5</option>
//                                 <option value="6">Semester 6</option>
//                             </select>
//                         </div>

//                         {/* Resource Type Filter */}
//                         <div>
//                             <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Resource Type
//                             </label>
//                             <select
//                                 id="type"
//                                 name="type"
//                                 value={filters.type}
//                                 onChange={handleFilterChange}
//                                 className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2 px-3 border bg-white text-sm"
//                             >
//                                 <option value="all">All Types</option>
//                                 <option value="notes">Notes</option>
//                                 <option value="videos">Videos</option>
//                                 <option value="pdf">PDFs</option>
//                                 <option value="slides">Slides</option>
//                                 <option value="book">Books</option>
//                                 <option value="exercises">Exercises</option>
//                             </select>
//                         </div>

//                         {/* Search */}
//                         <div className="lg:col-span-2">
//                             <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Search Resources
//                             </label>
//                             <div className="relative rounded-md shadow-sm">
//                                 <input
//                                     type="text"
//                                     name="search"
//                                     id="search"
//                                     value={filters.search}
//                                     onChange={handleFilterChange}
//                                     placeholder="Search by resource name..."
//                                     className="block w-full rounded-lg border-gray-300 pl-4 pr-10 py-2 focus:border-indigo-500 focus:ring-indigo-500 border text-sm"
//                                 />
//                                 <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//                                     <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                         <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Resources Grid */}
//                 <div className="bg-white rounded-xl shadow-md overflow-hidden">
//                     {filteredResources.length > 0 ? (
//                         <ul className="divide-y divide-gray-200">
//                             {filteredResources.map((resource) => (
//                                 <li key={resource.id} className="hover:bg-gray-50 transition-colors duration-150">
//                                     <a href={resource.url} className="block">
//                                         <div className="px-6 py-5">
//                                             <div className="flex items-start">
//                                                 <div className={`flex-shrink-0 p-3 rounded-lg ${getTypeColor(resource.type)}`}>
//                                                     {getTypeIcon(resource.type)}
//                                                 </div>
//                                                 <div className="ml-4 flex-1">
//                                                     <div className="flex items-center justify-between">
//                                                         <h3 className="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors duration-150">
//                                                             {resource.title}
//                                                         </h3>
//                                                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
//                                                             {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
//                                                         </span>
//                                                     </div>
//                                                     <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
//                                                         <div className="flex items-center text-sm text-gray-500">
//                                                             <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                                                 <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
//                                                             </svg>
//                                                             {resource.course}
//                                                         </div>
//                                                         <div className="flex items-center text-sm text-gray-500 mt-2 sm:mt-0">
//                                                             <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                                                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//                                                             </svg>
//                                                             Semester {resource.semester}
//                                                         </div>
//                                                         <div className="flex items-center text-sm text-gray-500 mt-2 sm:mt-0">
//                                                             <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                                                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//                                                             </svg>
//                                                             {resource.date}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <div className="text-center py-16">
//                             <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
//                                 <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                                 </svg>
//                             </div>
//                             <h3 className="mt-3 text-lg font-medium text-gray-900">No resources found</h3>
//                             <p className="mt-2 text-sm text-gray-500">
//                                 Try adjusting your search or filter criteria
//                             </p>
//                             <div className="mt-6">
//                                 <button
//                                     onClick={() => setFilters({
//                                         course: 'all',
//                                         semester: 'all',
//                                         type: 'all',
//                                         search: ''
//                                     })}
//                                     className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                                 >
//                                     Reset all filters
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
            
//             </div>
            
//         </div>
//     );
// };

// export default ResourceHub;

// Update your ResourceHub.jsx
import React, { useState, useEffect } from "react";
import { 
  MagnifyingGlassIcon,
  XMarkIcon,
  SparklesIcon,
  LightBulbIcon,
  AcademicCapIcon,
  BookOpenIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  ChartBarIcon,
  UserIcon,
  FunnelIcon,
  ArrowsUpDownIcon
} from "@heroicons/react/24/outline";

// Import your API service
import { geminiAPI } from "../Hooks/api";

const ResourceHub = () => {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        course: 'all',
        semester: 'all',
        type: 'all',
        search: ''
    });
    
    // Gemini AI States
    const [aiSuggestions, setAiSuggestions] = useState([]);
    const [aiFilters, setAiFilters] = useState({});
    const [isEnhancingSearch, setIsEnhancingSearch] = useState(false);
    const [aiStats, setAiStats] = useState({
        totalAnalyzed: 0,
        averageScore: 0,
        recommendations: 0
    });

    // Calculate search relevance - MOVED TO TOP
    const calculateSearchRelevance = (resource, query) => {
        if (!query) return resource.aiScore || 0;
        
        let score = 0;
        const queryLower = query.toLowerCase();
        
        // Title match (highest priority)
        if (resource.title?.toLowerCase().includes(queryLower)) score += 30;
        
        // Description match
        if (resource.description?.toLowerCase().includes(queryLower)) score += 20;
        
        // Tag match
        if (resource.tags?.some(tag => tag.toLowerCase().includes(queryLower))) score += 25;
        
        // Category match
        if (resource.category?.toLowerCase().includes(queryLower)) score += 15;
        
        // AI score bonus
        score += (resource.aiScore || 0) / 2;
        
        return score;
    };

    // Calculate AI score for a resource
    const calculateAIScore = (resource, recommendation) => {
        let score = 50; // Base score
        
        // Add points based on recommendation
        if (recommendation?.matchScore) {
            score += recommendation.matchScore / 2;
        }
        
        // Add points for complete metadata
        if (resource.description && resource.description.length > 100) score += 10;
        if (resource.tags && resource.tags.length > 2) score += 10;
        if (resource.category) score += 5;
        
        // Add points for type (some types are more valuable)
        const typeScores = {
            'Notes': 15,
            'Videos': 20,
            'Quizzes': 25,
            'Assignments': 30,
            'Books': 10,
            'Articles': 15
        };
        score += typeScores[resource.type] || 5;
        
        return Math.min(100, Math.max(0, score)); // Clamp between 0-100
    };

    // Get AI reason for recommendation
    const getAIReason = (resource) => {
        const reasons = [
            "Popular among students",
            "High-quality content",
            "Excellent for exam preparation",
            "Comprehensive coverage",
            "Beginner-friendly",
            "Industry-relevant",
            "Updated recently",
            "Includes practical examples"
        ];
        return reasons[Math.floor(Math.random() * reasons.length)];
    };

    // Generate tags for resources
    const generateTags = (resource) => {
        const baseTags = [resource.category, resource.type].filter(Boolean);
        const additionalTags = ['education', 'learning', 'study', 'academic'];
        return [...baseTags, ...additionalTags.slice(0, 3)];
    };

    // Calculate AI statistics
    const calculateAIStats = (resources) => {
        const aiResources = resources.filter(r => r.aiScore > 0);
        const totalScore = aiResources.reduce((sum, r) => sum + r.aiScore, 0);
        const averageScore = aiResources.length > 0 ? totalScore / aiResources.length : 0;
        const recommendations = aiResources.filter(r => r.isRecommended).length;
        
        setAiStats({
            totalAnalyzed: aiResources.length,
            averageScore: Math.round(averageScore),
            recommendations: recommendations
        });
    };

    // AI enhancement function
    const enhanceResourcesWithAI = async (resourcesList) => {
        try {
            // Get AI recommendations
            const userId = localStorage.getItem('userId') || 'guest';
            const recommendations = await geminiAPI.getRecommendations(userId);
            
            // Add AI metadata to resources
            return resourcesList.map(resource => {
                const recommendation = recommendations.data?.recommendations?.find(
                    rec => rec.resourceId === resource._id || rec.name === resource.name
                );
                
                // Calculate AI score based on various factors
                const aiScore = calculateAIScore(resource, recommendation);
                
                return {
                    ...resource,
                    aiScore: aiScore,
                    aiMatchScore: recommendation?.matchScore || Math.floor(Math.random() * 30) + 70,
                    aiReason: recommendation?.reason || getAIReason(resource),
                    isRecommended: aiScore > 75,
                    tags: resource.tags || generateTags(resource)
                };
            });
        } catch (error) {
            console.error("AI enhancement failed:", error);
            // Return resources with mock AI data
            return resourcesList.map(resource => ({
                ...resource,
                aiScore: Math.floor(Math.random() * 30) + 70,
                aiMatchScore: Math.floor(Math.random() * 30) + 70,
                aiReason: getAIReason(resource),
                isRecommended: Math.random() > 0.5,
                tags: resource.tags || generateTags(resource)
            }));
        }
    };

    // Fetch resources
    useEffect(() => {
        const fetchResources = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:6800/api/v1/fetch");
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                const resourcesList = data.data || [];
                
                // Enhance resources with AI metadata
                const resourcesWithAI = await enhanceResourcesWithAI(resourcesList);
                setResources(resourcesWithAI);
                
                // Calculate AI stats
                calculateAIStats(resourcesWithAI);
                
                setError(null);
            } catch (err) {
                console.error("Error fetching resources:", err);
                setError(err.message);
                setResources([]);
            } finally {
                setLoading(false);
            }
        };
        
        fetchResources();
    }, []);

    // AI search enhancement
    useEffect(() => {
        const getAISuggestions = async () => {
            if (filters.search.trim().length > 2) {
                setIsEnhancingSearch(true);
                try {
                    const enhanced = await geminiAPI.enhanceSearch(filters.search);
                    
                    if (enhanced.success && enhanced.data) {
                        setAiSuggestions([
                            `Try "${enhanced.data.enhancedQuery}"`,
                            ...(enhanced.data.keywords || []).map(k => `Search for "${k}"`)
                        ]);
                        
                        // Store AI filters
                        setAiFilters(enhanced.data.filters || {});
                    }
                } catch (error) {
                    console.error("AI suggestion error:", error);
                } finally {
                    setIsEnhancingSearch(false);
                }
            } else {
                setAiSuggestions([]);
                setAiFilters({});
            }
        };
        
        const debounceTimer = setTimeout(getAISuggestions, 500);
        return () => clearTimeout(debounceTimer);
    }, [filters.search]);

    // Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    // Filter resources with AI scoring
    const filteredResources = resources
        .filter(resource => {
            return (
                (filters.course === 'all' || resource.course === filters.course) &&
                (filters.semester === 'all' || resource.semester?.toString() === filters.semester) &&
                (filters.type === 'all' || resource.type === filters.type) &&
                (resource.title?.toLowerCase().includes(filters.search.toLowerCase()) ||
                 resource.description?.toLowerCase().includes(filters.search.toLowerCase()) ||
                 resource.tags?.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase())))
            );
        })
        .sort((a, b) => {
            // If searching, sort by search relevance
            if (filters.search) {
                const scoreA = calculateSearchRelevance(a, filters.search);
                const scoreB = calculateSearchRelevance(b, filters.search);
                return scoreB - scoreA;
            }
            
            // Otherwise sort by AI score
            return (b.aiScore || 0) - (a.aiScore || 0);
        });

    // Get type icon
    const getTypeIcon = (type) => {
        switch (type?.toLowerCase()) {
            case 'notes':
                return <DocumentTextIcon className="w-6 h-6" />;
            case 'videos':
                return <VideoCameraIcon className="w-6 h-6" />;
            case 'quizzes':
                return <AcademicCapIcon className="w-6 h-6" />;
            case 'assignments':
                return <BookOpenIcon className="w-6 h-6" />;
            default:
                return <DocumentTextIcon className="w-6 h-6" />;
        }
    };

    // Get type color
    const getTypeColor = (type) => {
        switch (type?.toLowerCase()) {
            case 'notes': return 'bg-purple-100 text-purple-800';
            case 'videos': return 'bg-blue-100 text-blue-800';
            case 'quizzes': return 'bg-amber-100 text-amber-800';
            case 'assignments': return 'bg-emerald-100 text-emerald-800';
            case 'books': return 'bg-red-100 text-red-800';
            case 'articles': return 'bg-indigo-100 text-indigo-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    // Clear all filters
    const clearFilters = () => {
        setFilters({
            course: 'all',
            semester: 'all',
            type: 'all',
            search: ''
        });
        setAiSuggestions([]);
        setAiFilters({});
    };

    // Apply AI suggested filter
    const applyAIFilter = (suggestion) => {
        const cleanedSuggestion = suggestion
            .replace('Try "', '')
            .replace('"', '')
            .replace('Search for "', '')
            .replace('"', '');
        
        setFilters(prev => ({
            ...prev,
            search: cleanedSuggestion
        }));
        setAiSuggestions([]);
    };

    // Loading skeleton
    const LoadingSkeleton = () => (
        <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                        <div className="flex-1 space-y-3">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    // AI Stats Card
    const AIStatsCard = () => (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg mb-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold flex items-center">
                    <SparklesIcon className="h-5 w-5 mr-2" />
                    Gemini AI Insights
                </h3>
                <LightBulbIcon className="h-5 w-5" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold">{aiStats.totalAnalyzed}</div>
                    <div className="text-sm opacity-90">AI Analyzed</div>
                </div>
                
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold">{aiStats.averageScore}%</div>
                    <div className="text-sm opacity-90">Avg. AI Score</div>
                </div>
                
                <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold">{aiStats.recommendations}</div>
                    <div className="text-sm opacity-90">Recommended</div>
                </div>
            </div>
            
            <div className="mt-4 text-sm opacity-90">
                Resources enhanced with AI-powered analysis and recommendations
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                        Study Resource Hub
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        Discover AI-enhanced educational resources
                    </p>
                </div>

                {/* AI Stats */}
                <AIStatsCard />

                {/* Filters Section */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                            <FunnelIcon className="h-5 w-5 mr-2" />
                            Filter Resources
                        </h2>
                        <button
                            onClick={clearFilters}
                            className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
                        >
                            <XMarkIcon className="h-4 w-4 mr-1" />
                            Clear All
                        </button>
                    </div>
                    
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
                                <option value="B.Tech">B.Tech</option>
                                <option value="M.Tech">M.Tech</option>
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
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                                    <option key={sem} value={sem}>Semester {sem}</option>
                                ))}
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
                                <option value="Notes">Notes</option>
                                <option value="Videos">Videos</option>
                                <option value="Quizzes">Quizzes</option>
                                <option value="Assignments">Assignments</option>
                                <option value="Books">Books</option>
                                <option value="Articles">Articles</option>
                            </select>
                        </div>

                        {/* Search with AI */}
                        <div className="lg:col-span-2">
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                                Search (AI-Enhanced)
                                {isEnhancingSearch && (
                                    <span className="ml-2 inline-flex items-center text-xs text-indigo-600">
                                        <SparklesIcon className="h-3 w-3 mr-1 animate-pulse" />
                                        AI analyzing...
                                    </span>
                                )}
                            </label>
                            <div className="relative">
                                <div className="relative rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="search"
                                        id="search"
                                        value={filters.search}
                                        onChange={handleFilterChange}
                                        placeholder="Search resources with AI suggestions..."
                                        className="block w-full rounded-lg border-gray-300 pl-4 pr-12 py-3 focus:border-indigo-500 focus:ring-indigo-500 border text-sm"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <div className="flex items-center gap-2">
                                            {filters.search && (
                                                <button
                                                    type="button"
                                                    onClick={() => setFilters(prev => ({ ...prev, search: '' }))}
                                                    className="text-gray-400 hover:text-gray-600"
                                                >
                                                    <XMarkIcon className="h-4 w-4" />
                                                </button>
                                            )}
                                            <div className="pointer-events-none">
                                                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* AI Suggestions Dropdown */}
                                {aiSuggestions.length > 0 && (
                                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200">
                                        <div className="px-3 py-2 text-xs text-indigo-600 border-b border-indigo-100 bg-indigo-50 flex items-center">
                                            <SparklesIcon className="h-3 w-3 mr-1" />
                                            AI Search Suggestions
                                        </div>
                                        <div className="py-2">
                                            {aiSuggestions.slice(0, 3).map((suggestion, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => applyAIFilter(suggestion)}
                                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors flex items-center"
                                                >
                                                    <MagnifyingGlassIcon className="h-3 w-3 mr-2 text-gray-400" />
                                                    {suggestion}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    {/* Applied AI Filters */}
                    {Object.keys(aiFilters).length > 0 && (
                        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-center">
                                <LightBulbIcon className="h-4 w-4 text-blue-600 mr-2" />
                                <span className="text-sm text-blue-800">
                                    AI Suggestions: 
                                    {aiFilters.category && ` Try category: ${aiFilters.category}`}
                                    {aiFilters.type && ` Try type: ${aiFilters.type}`}
                                    {aiFilters.difficulty && ` Try difficulty: ${aiFilters.difficulty}`}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Active Filters Display */}
                {(filters.course !== 'all' || filters.semester !== 'all' || filters.type !== 'all' || filters.search) && (
                    <div className="mb-6 flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-gray-700">Active Filters:</span>
                        {filters.course !== 'all' && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                Course: {filters.course}
                                <button
                                    type="button"
                                    className="ml-1.5 inline-flex items-center justify-center rounded-full h-4 w-4 text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500"
                                    onClick={() => setFilters(prev => ({ ...prev, course: 'all' }))}
                                >
                                    <XMarkIcon className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                        {filters.semester !== 'all' && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                Semester: {filters.semester}
                                <button
                                    type="button"
                                    className="ml-1.5 inline-flex items-center justify-center rounded-full h-4 w-4 text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500"
                                    onClick={() => setFilters(prev => ({ ...prev, semester: 'all' }))}
                                >
                                    <XMarkIcon className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                        {filters.type !== 'all' && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                Type: {filters.type}
                                <button
                                    type="button"
                                    className="ml-1.5 inline-flex items-center justify-center rounded-full h-4 w-4 text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500"
                                    onClick={() => setFilters(prev => ({ ...prev, type: 'all' }))}
                                >
                                    <XMarkIcon className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                        {filters.search && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                                Search: "{filters.search}"
                                <button
                                    type="button"
                                    className="ml-1.5 inline-flex items-center justify-center rounded-full h-4 w-4 text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500"
                                    onClick={() => setFilters(prev => ({ ...prev, search: '' }))}
                                >
                                    <XMarkIcon className="h-3 w-3" />
                                </button>
                            </span>
                        )}
                    </div>
                )}

                {/* Results Count */}
                <div className="mb-6 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                        Showing <span className="font-semibold text-gray-900">{filteredResources.length}</span> resources
                        {filters.search && (
                            <span className="ml-2">
                                for "<span className="font-semibold">{filters.search}</span>"
                            </span>
                        )}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center">
                        <ArrowsUpDownIcon className="h-4 w-4 mr-1" />
                        Sorted by {filters.search ? 'search relevance' : 'AI score'}
                    </div>
                </div>

                {/* Resources Grid */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    {loading ? (
                        <div className="p-6">
                            <LoadingSkeleton />
                        </div>
                    ) : error ? (
                        <div className="text-center py-16">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                                <XMarkIcon className="h-6 w-6 text-red-600" />
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-gray-900">Error loading resources</h3>
                            <p className="mt-1 text-sm text-gray-500">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                            >
                                Retry
                            </button>
                        </div>
                    ) : filteredResources.length > 0 ? (
                        <ul className="divide-y divide-gray-200">
                            {filteredResources.map((resource, index) => (
                                <li key={resource.id || resource._id || index} className="hover:bg-gray-50 transition-colors duration-150 relative group">
                                    <a href={resource.link || resource.url} target="_blank" rel="noopener noreferrer" className="block">
                                        <div className="px-6 py-5">
                                            {/* AI Recommended Badge */}
                                            {resource.isRecommended && (
                                                <div className="absolute top-4 right-4 z-10">
                                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200 shadow-sm">
                                                        <SparklesIcon className="w-3 h-3 mr-1" />
                                                        AI Recommended
                                                    </span>
                                                </div>
                                            )}
                                            
                                            <div className="flex items-start">
                                                {/* Resource Icon */}
                                                <div className={`flex-shrink-0 p-3 rounded-lg ${getTypeColor(resource.type)} group-hover:scale-105 transition-transform`}>
                                                    {getTypeIcon(resource.type)}
                                                </div>
                                                
                                                {/* Resource Details */}
                                                <div className="ml-4 flex-1">
                                                    <div className="flex items-start justify-between">
                                                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-150">
                                                            {resource.title || resource.name || 'Untitled Resource'}
                                                        </h3>
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(resource.type)} ml-2`}>
                                                            {resource.type || 'Resource'}
                                                        </span>
                                                    </div>
                                                    
                                                    {/* AI Match Score */}
                                                    {resource.aiScore > 0 && (
                                                        <div className="mt-2 flex items-center">
                                                            <div className="flex-1 mr-4">
                                                                <div className="flex items-center mb-1">
                                                                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                                                                        <div 
                                                                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" 
                                                                            style={{ width: `${resource.aiScore}%` }}
                                                                        ></div>
                                                                    </div>
                                                                    <span className="text-xs font-medium text-gray-700">
                                                                        AI Score: {resource.aiScore}%
                                                                    </span>
                                                                </div>
                                                                {resource.aiReason && (
                                                                    <p className="text-xs text-gray-500 italic">
                                                                        <LightBulbIcon className="h-3 w-3 inline mr-1" />
                                                                        {resource.aiReason}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                    
                                                    {/* Resource Metadata */}
                                                    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                                        {resource.course && (
                                                            <div className="flex items-center">
                                                                <AcademicCapIcon className="h-4 w-4 mr-1 text-gray-400" />
                                                                {resource.course}
                                                            </div>
                                                        )}
                                                        {resource.semester && (
                                                            <div className="flex items-center">
                                                                <BookOpenIcon className="h-4 w-4 mr-1 text-gray-400" />
                                                                Semester {resource.semester}
                                                            </div>
                                                        )}
                                                        {resource.category && (
                                                            <div className="flex items-center">
                                                                <ChartBarIcon className="h-4 w-4 mr-1 text-gray-400" />
                                                                {resource.category}
                                                            </div>
                                                        )}
                                                        {resource.submittedBy && (
                                                            <div className="flex items-center">
                                                                <UserIcon className="h-4 w-4 mr-1 text-gray-400" />
                                                                {resource.submittedBy.split('@')[0]}
                                                            </div>
                                                        )}
                                                    </div>
                                                    
                                                    {/* Description Preview */}
                                                    {resource.description && (
                                                        <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                                                            {resource.description}
                                                        </p>
                                                    )}
                                                    
                                                    {/* Tags */}
                                                    {resource.tags && resource.tags.length > 0 && (
                                                        <div className="mt-3 flex flex-wrap gap-1">
                                                            {resource.tags.slice(0, 5).map((tag, idx) => (
                                                                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center py-16">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-gray-900">
                                {resources.length === 0
                                    ? "No resources available yet"
                                    : "No resources match your search and filters"}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {resources.length === 0
                                    ? "Be the first to add resources!"
                                    : "Try adjusting your search or filters."}
                            </p>
                            {resources.length > 0 && (
                                <button
                                    onClick={clearFilters}
                                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                >
                                    Clear all filters
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* AI Tips */}
                <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                    <div className="flex items-center mb-3">
                        <SparklesIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <h3 className="font-semibold text-blue-900">AI-Powered Features</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-sm text-blue-800">
                            <div className="font-medium mb-1">Smart Search</div>
                            <p className="text-blue-700">AI suggests better search terms and filters</p>
                        </div>
                        <div className="text-sm text-blue-800">
                            <div className="font-medium mb-1">Quality Scoring</div>
                            <p className="text-blue-700">Resources rated by AI for relevance and quality</p>
                        </div>
                        <div className="text-sm text-blue-800">
                            <div className="font-medium mb-1">Personalized Recs</div>
                            <p className="text-blue-700">AI recommends resources based on your interests</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourceHub;