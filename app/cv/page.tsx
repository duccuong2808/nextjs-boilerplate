'use client';
import PasswordProtection from '../components/PasswordProtection';
import { useState } from 'react';
import { styles } from '../styles/common';

export default function CV() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with real-time inventory management",
      technologies: "React, Next.js, TypeScript, Tailwind CSS",
      role: "Lead Developer responsible for architecture and implementation"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      technologies: "React, Redux, Node.js, MongoDB",
      role: "Frontend Developer, implemented key features and optimizations"
    },
    // Add more projects here
  ];

  return (
    <PasswordProtection>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className={styles.container}>
          {/* Profile Section */}
          <section className={styles.section}>
            <img
              src="https://placehold.co/150x150/EEE/31343C?text=Your+Photo&font=Roboto"
              alt="Your Photo"
              className="rounded-full mx-auto mb-4 shadow-lg"
              width="150"
              height="150"
            />
            <h1 className={`text-3xl ${styles.text.primary} mb-2 text-center font-bold`}>
              John Doe
            </h1>
            <h2 className={`text-xl ${styles.text.secondary} mb-4 text-center`}>
              Frontend Developer
            </h2>
            <p className={`text-lg ${styles.text.body} max-w-3xl mx-auto text-center`}>
              A passionate Frontend Developer with 5 years of experience, specializing in React, Next.js, and TypeScript. 
              I am dedicated to creating intuitive user interfaces and optimizing web performance while seeking new challenges 
              to grow my skills and contribute to breakthrough projects.
            </p>
          </section>

          {/* Work Experience */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Work Experience</h2>
            <div className="space-y-6">
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Senior Frontend Developer</h3>
                <p className={styles.cardSubtitle}>Tech Company - 2020 - Present</p>
                <ul className={styles.list}>
                  <li>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      Project Leadership:
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Led the development of the company's main product dashboard, improving user engagement by 35%
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      Performance Optimization:
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Improved application performance by 40% through code optimization and lazy loading implementation
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      Team Leadership:
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Mentored 5 junior developers and conducted over 200 code reviews
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <div className={styles.gridContainer}>
              {projects.slice(0, showAllProjects ? projects.length : 1).map((project, index) => (
                <div key={index} className={styles.card}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardSubtitle}>{project.description}</p>
                  <p className={styles.cardSubtitle}>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Technologies: </span>
                    {project.technologies}
                  </p>
                  <ul className={styles.list}>
                    <li>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Role: </span>
                      <span className="text-gray-600 dark:text-gray-400">{project.role}</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            
            {projects.length > 1 && (
              <div className="text-center mt-8">
                <button 
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-2"
                  onClick={() => setShowAllProjects(!showAllProjects)}
                >
                  {showAllProjects ? 'Show Less' : 'Show More Projects'}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </section>

          {/* Skills Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Kỹ Năng</h2>
            <div className={styles.gridContainer}>
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Kỹ Năng Chuyên Môn
                </h3>
                <div className="space-y-3">
                  {[
                    { skill: "React", level: "90%" },
                    { skill: "Next.js", level: "85%" },
                    { skill: "TypeScript", level: "80%" },
                    { skill: "Tailwind CSS", level: "85%" },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{item.skill}</span>
                        <span className="text-gray-600 dark:text-gray-400">{item.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: item.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Kỹ Năng Mềm
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300">Làm việc nhóm hiệu quả</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300">Giao tiếp tốt</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300">Quản lý thời gian</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-gray-700 dark:text-gray-300">Giải quyết vấn đề</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Học Vấn</h2>
            <div className={styles.card}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Cử Nhân Khoa Học Máy Tính
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Đại học ABC • 2018 - 2022
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Chuyên ngành: Công nghệ phần mềm</li>
                <li>GPA: 3.8/4.0</li>
                <li>Thành tích: Sinh viên xuất sắc</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PasswordProtection>
  );
}