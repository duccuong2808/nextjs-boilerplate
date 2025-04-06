'use client';
import { useState } from 'react';
import { styles } from '../styles/common';

// Add type for language at the top of the file
type Language = 'en' | 'vi';

// Add print function near the top of the component
export default function CV() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const VISIBLE_PROJECTS = 3;
  const LAST_UPDATED = new Date('2024-01-01').toLocaleDateString();

  const handlePrint = () => {
    window.print();
  };

  // Update the type definition first
  type ContentType = {
    en: {
      name: string;
      role: string;
      bio: string;
      sections: {
        workExperience: string;
        featuredProjects: string;
        skills: string;
        technicalSkills: string;
        softSkills: string;
        education: string;
        showMore: string;
        showLess: string;
        technologies: string;
        role: string;
      };
      experience: {
        title: string;
        company: string;
        period: string;
        achievements: Array<{
          title: string;
          description: string;
        }>;
      };
      projects: Array<{
        title: string;
        description: string;
        technologies: string;
        role: string;
      }>;
      education: {
        degree: string;
        university: string;
        period: string;
        details: string[];
      };
      skills: {
        technical: Array<{
          skill: string;
          level: string;
          skillDescription?: string;  // Add this line
        }>;
        soft: string[];
      };
    };
    vi: {
      // Same structure as 'en'
      [key: string]: any;
    };
  };

  const content: ContentType = {
    en: {
      name: "John Doe",
      role: "Frontend Developer",
      bio: "A passionate Frontend Developer with 5 years of experience, specializing in React, Next.js, and TypeScript. I am dedicated to creating intuitive user interfaces and optimizing web performance while seeking new challenges to grow my skills and contribute to breakthrough projects.",
      sections: {
        workExperience: "Work Experience",
        featuredProjects: "Featured Projects",
        skills: "Skills",
        technicalSkills: "Technical Skills",
        softSkills: "Soft Skills",
        education: "Education",
        showMore: "Show More Projects",
        showLess: "Show Less",
        technologies: "Technologies",
        role: "Role"
      },
      experience: {
        title: "Senior Frontend Developer",
        company: "Tech Company",
        period: "2020 - Present",
        achievements: [
          {
            title: "Project Leadership",
            description: "Led the development of the company's main product dashboard, improving user engagement by 35%"
          },
          {
            title: "Performance Optimization",
            description: "Improved application performance by 40% through code optimization and lazy loading implementation"
          },
          {
            title: "Team Leadership",
            description: "Mentored 5 junior developers and conducted over 200 code reviews"
          }
        ]
      },
      projects: [
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
        {
          title: "Real-time Chat Application",
          description: "Scalable chat platform with video calling capabilities",
          technologies: "React, WebSocket, WebRTC, Firebase",
          role: "Full-stack Developer, implemented real-time features"
        },
        {
          title: "Project Management Tool",
          description: "Collaborative project management system with task tracking",
          technologies: "React, GraphQL, PostgreSQL, Docker",
          role: "Technical Lead, system architecture and team management"
        },
        {
          title: "AI-Powered Content Generator",
          description: "Content generation platform using machine learning",
          technologies: "React, Python, TensorFlow, AWS",
          role: "Frontend Lead, UI/UX implementation"
        },
        {
          title: "Healthcare Management System",
          description: "Digital platform for patient records and appointments",
          technologies: "React, Node.js, MySQL, Redis",
          role: "Senior Developer, security implementation"
        },
        {
          title: "Financial Analytics Dashboard",
          description: "Real-time financial data visualization platform",
          technologies: "React, D3.js, Express, MongoDB",
          role: "Frontend Developer, data visualization"
        },
        {
          title: "Educational Learning Platform",
          description: "Interactive online learning management system",
          technologies: "Next.js, Socket.io, PostgreSQL",
          role: "Full-stack Developer, feature implementation"
        },
        {
          title: "IoT Device Management Platform",
          description: "Dashboard for monitoring and managing IoT devices",
          technologies: "React, MQTT, Node.js, InfluxDB",
          role: "Lead Developer, architecture design"
        },
        {
          title: "Blockchain Trading Platform",
          description: "Cryptocurrency trading and wallet management system",
          technologies: "React, Web3.js, Solidity, Node.js",
          role: "Frontend Developer, blockchain integration"
        }
      ],
      education: {
        degree: "Bachelor of Computer Science",
        university: "ABC University",
        period: "2018 - 2022",
        details: [
          "Major: Software Engineering",
          "GPA: 3.8/4.0",
          "Achievement: Outstanding Student"
        ]
      },
      skills: {
        technical: [
          { 
            skill: "React", 
            level: "5/5",
            skillDescription: "Expert in React ecosystem, including hooks, context, and performance optimization"
          },
          { 
            skill: "Next.js", 
            level: "4/5",
            skillDescription: "Strong experience with SSR, ISR, and API routes in Next.js applications"
          },
          { 
            skill: "TypeScript", 
            level: "4/5",
            skillDescription: "Advanced type system knowledge, generics, and custom type definitions"
          },
          { 
            skill: "Tailwind CSS", 
            level: "4/5",
            skillDescription: "Proficient in responsive design and custom component styling"
          },
          { 
            skill: "Ruby", 
            level: "4/5",
            skillDescription: "Backend development with Ruby on Rails and API integrations"
          }
        ],
        soft: [
          "Effective Teamwork",
          "Strong Communication",
          "Time Management",
          "Problem Solving"
        ]
      }
    },
    vi: {
      name: "Nguyễn Văn A",
      role: "Lập trình viên Frontend",
      bio: "Lập trình viên Frontend với 5 năm kinh nghiệm, chuyên về React, Next.js và TypeScript. Tôi luôn tận tâm trong việc tạo ra giao diện người dùng trực quan và tối ưu hiệu suất web, đồng thời tạc tạc tạc tìm kiếm những thách thức mới để phát triển kỹ năng và đóng góp vào các dự án đột phá.",
      sections: {
        workExperience: "Kinh Nghiệm Làm Việc",
        featuredProjects: "Dự Án Tiêu Biểu",
        skills: "Kỹ Năng",
        technicalSkills: "Kỹ Năng Chuyên Môn",
        softSkills: "Kỹ Năng Mềm",
        education: "Học Vấn",
        showMore: "Xem Thêm Dự Án",
        showLess: "Thu Gọn",
        technologies: "Công nghệ",
        role: "Vai trò"
      },
      experience: {
        title: "Lập trình viên Frontend Senior",
        company: "Công ty Công nghệ",
        period: "2020 - Hiện tại",
        achievements: [
          {
            title: "Lãnh đạo Dự án",
            description: "Dẫn dạt phát triển bảng điều khiển sản phẩm chính của công ty, cải thiện tương tác người dùng lên 35%"
          },
          {
            title: "Tối ưu Hiệu suất",
            description: "Cải thiện hiệu suất ứng dụng lên 40% thông qua tối ưu hóa mã nguồn và triển khai lazy loading"
          },
          {
            title: "Lãnh đạo Nhóm",
            description: "Hướng dẫn 5 lập trình viên junior và thực hiện hơn 200 đánh giá mã nguồn"
          }
        ]
      },
      projects: [
        {
          title: "Nền tảng Thương mại Điện tử",
          description: "Một nền tảng thương mại điện tử hiện đại với quản lý kho hàng thời gian thực",
          technologies: "React, Next.js, TypeScript, Tailwind CSS",
          role: "Trưởng nhóm phát triển, chịu trách nhiệm về kiến trúc và triển khai"
        },
        {
          title: "Bảng điều khiển Mạng xã hội",
          description: "Bảng điều khiển phân tích cho quản lý mạng xã hội",
          technologies: "React, Redux, Node.js, MongoDB",
          role: "Lập trình viên Frontend, triển khai các tính năng chính và tối ưu hóa"
        },
        {
          title: "Ứng dụng Chat Thời gian thực",
          description: "Nền tảng chat có khả năng mở rộng với tính năng gọi video",
          technologies: "React, WebSocket, WebRTC, Firebase",
          role: "Lập trình viên Full-stack, triển khai tính năng thời gian thực"
        },
        {
          title: "Công cụ Quản lý Dự án",
          description: "Hệ thống quản lý dự án cộng tác với theo dõi công việc",
          technologies: "React, GraphQL, PostgreSQL, Docker",
          role: "Trưởng nhóm kỹ thuật, kiến trúc hệ thống và quản lý nhóm"
        },
        {
          title: "Công cụ Tạo Nội dung AI",
          description: "Nền tảng tạo nội dung sử dụng học máy",
          technologies: "React, Python, TensorFlow, AWS",
          role: "Trưởng nhóm Frontend, triển khai UI/UX"
        },
        {
          title: "Hệ thống Quản lý Y tế",
          description: "Nền tảng số hóa hồ sơn bệnh nhân và lịch hẹn",
          technologies: "React, Node.js, MySQL, Redis",
          role: "Lập trình viên Senior, triển khai bảo mật"
        },
        {
          title: "Bảng điều khiển Phân tích Tài chính",
          description: "Nền tảng trực quan hóa dữ liệu tài chính thời gian thực",
          technologies: "React, D3.js, Express, MongoDB",
          role: "Lập trình viên Frontend, trực quan hóa dữ liệu"
        },
        {
          title: "Nền tảng Học tập Trực tuyến",
          description: "Hệ thống quản lý học tập tương tác trực tuyến",
          technologies: "Next.js, Socket.io, PostgreSQL",
          role: "Lập trình viên Full-stack, triển khai tính năng"
        },
        {
          title: "Nền tảng Quản lý Thiết bị IoT",
          description: "Bảng điều khiển giám sát và quản lý thiết bị IoT",
          technologies: "React, MQTT, Node.js, InfluxDB",
          role: "Trưởng nhóm phát triển, thiết kến trúc"
        },
        {
          title: "Nền tảng Giao dịch Blockchain",
          description: "Hệ thống giao dịch tiền điện tử và quản lý ví",
          technologies: "React, Web3.js, Solidity, Node.js",
          role: "Lập trình viên Frontend, tích hợp blockchain"
        }
      ],
      education: {
        degree: "Cử nhân Khoa học Máy tính",
        university: "Đại học ABC",
        period: "2018 - 2022",
        details: [
          "Chuyên ngành: Công nghệ phần mềm",
          "GPA: 3.8/4.0",
          "Thành tích: Sinh viên xuất sắc"
        ]
      },
      skills: {
        technical: [
          { skill: "React", level: "5/5" },
          { skill: "Next.js", level: "4/5" },
          { skill: "TypeScript", level: "4/5" },
          { skill: "Tailwind CSS", level: "4/5" },
          { skill: "Ruby", level: "4/5" }
        ],
        soft: [
          "Làm việc nhóm hiệu quả",
          "Kỹ năng giao tiếp tốt",
          "Quản lý thời gian",
          "Giải quyết vấn đề"
        ]
      }
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Language Switcher and Print Button */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 print:hidden p-2 rounded-lg">
        <button
          onClick={handlePrint}
          className="px-3 py-1 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center"
          title="Print CV"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" 
            />
          </svg>
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-md transition-colors ${
            language === 'en'
              ? 'bg-blue-600 text-gray-50'
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
          title="English"
        >
          🇺🇸
        </button>
        <button
          onClick={() => setLanguage('vi')}
          className={`px-3 py-1 rounded-md transition-colors ${
            language === 'vi'
              ? 'bg-blue-600 text-gray-50'
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
          title="Tiếng Việt"
        >
          🇻🇳
        </button>
      </div>

      <div className={`${styles.container} print:max-w-none print:w-full print:p-0 print:shadow-none`}>
        {/* Profile Section */}
        <section className={styles.section}>
          <img
            src="https://placehold.co/150x150/EEE/31343C?text=Your+Photo&font=Roboto"
            alt="Profile Photo"
            className="rounded-full mx-auto mb-4 shadow-lg"
            width="150"
            height="150"
          />
          <h1 className="text-3xl text-gray-900 mb-2 text-center font-bold">
            {content[language].name}
          </h1>
          <h2 className="text-xl text-gray-800 mb-4 text-center">
            {content[language].role}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            {content[language].bio}
          </p>
        </section>

        {/* Work Experience */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {content[language].sections.workExperience}
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{content[language].experience.title}</h3>
              <p className="text-gray-700 mb-4">
                {content[language].experience.company} - {content[language].experience.period}
              </p>
              <ul className="space-y-4">
                {content[language].experience.achievements.map((achievement: { title: string; description: string }, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="font-semibold text-gray-900">
                      {achievement.title}:
                    </span>
                    <span className="text-gray-700 ml-2">
                      {achievement.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className={styles.section}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {content[language].sections.featuredProjects}
          </h2>
          <div className="space-y-6">
            {/* Always show the first 3 projects */}
            {content[language].projects.slice(0, VISIBLE_PROJECTS).map((project, index) => (
              <div key={`project-visible-${index}`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {project.description}
                </p>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="font-semibold text-gray-800 mr-2">
                      {content[language].sections.technologies}:
                    </span>
                    <span className="text-gray-700">
                      {project.technologies}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold text-gray-800 mr-2">
                      {content[language].sections.role}:
                    </span>
                    <span className="text-gray-700">
                      {project.role}
                    </span>
                  </p>
                </div>
              </div>
            ))}

            {/* Animated container for the rest of the projects */}
            {content[language].projects.length > VISIBLE_PROJECTS && (
              <>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden space-y-6 ${
                    showAllProjects ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {content[language].projects.slice(VISIBLE_PROJECTS).map((project, index) => (
                     <div key={`project-hidden-${index}`} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {project.description}
                      </p>
                      <div className="space-y-2">
                        <p className="flex items-center">
                          <span className="font-semibold text-gray-800 mr-2">
                            {content[language].sections.technologies}:
                          </span>
                          <span className="text-gray-700">
                            {project.technologies}
                          </span>
                        </p>
                        <p className="flex items-center">
                          <span className="font-semibold text-gray-800 mr-2">
                            {content[language].sections.role}:
                          </span>
                          <span className="text-gray-700">
                            {project.role}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show More/Less Button */}
                <div className="text-center mt-8">
                  <button
                    className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-2"
                    onClick={() => setShowAllProjects(!showAllProjects)}
                  >
                    {showAllProjects 
                      ? content[language].sections.showLess 
                      : `${content[language].sections.showMore} (${content[language].projects.slice(VISIBLE_PROJECTS).length})`
                    }
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
              </>
            )}
          </div>
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{content[language].sections.skills}</h2>
          <div className="space-y-6">
            {/* Technical Skills Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {content[language].sections.technicalSkills}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {content[language].skills.technical.map((item, index) => {
                  const skillLevel = parseInt(item.level.split('/')[0]);
                  const percentage = (skillLevel / 5) * 100;
                  
                  return (
                    <div 
                      key={index} 
                      className="bg-gray-50 p-2 rounded-lg group relative"
                    >
                      {item.skillDescription && (
                        <div className="absolute opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-sm rounded-md p-2 w-48 -top-12 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                          {item.skillDescription}
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                      )}
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          {item.skill === "React" && (
                            <i className="devicon-react-original colored text-xl mr-1"></i>
                          )}
                          {item.skill === "Next.js" && (
                            <i className="devicon-nextjs-plain text-2xl mr-2"></i>
                          )}
                          {item.skill === "TypeScript" && (
                            <i className="devicon-typescript-plain colored text-2xl mr-2"></i>
                          )}
                          {item.skill === "Tailwind CSS" && (
                            <i className="devicon-tailwindcss-plain colored text-2xl mr-2"></i>
                          )}
                          {item.skill === "Ruby" && (
                            <i className="devicon-ruby-plain colored text-2xl mr-2"></i>
                          )}
                          <span className="font-medium text-xs text-gray-800">{item.skill}</span>
                        </div>
                      </div>
                      <div className="relative w-12 h-12 mx-auto">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className="stroke-current text-gray-200"
                            strokeWidth="3"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="16"
                            fill="none"
                            className={`stroke-current ${
                              percentage >= 90 ? 'text-emerald-500' :
                              percentage >= 70 ? 'text-violet-500' :
                              percentage >= 50 ? 'text-amber-500' :
                              'text-rose-500'
                            }`}
                            strokeWidth="3"
                            strokeDasharray={`${percentage} 100`}
                            strokeDashoffset="25"
                            transform="rotate(-90 18 18)"
                          />
                          <text
                            x="18"
                            y="18"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            className={`fill-current text-[8px] font-medium ${
                              percentage >= 90 ? 'text-emerald-700' :
                              percentage >= 70 ? 'text-violet-700' :
                              percentage >= 50 ? 'text-amber-700' :
                              'text-rose-700'
                            }`}
                          >
                            {Math.round(percentage)}
                          </text>
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {content[language].sections.softSkills}
              </h3>
              <ul className="space-y-3">
                {content[language].skills.soft.map((skill: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

          {/* Education Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{content[language].sections.education}</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {content[language].education.degree}
                </h3>
                <p className="text-gray-700 mb-4">
                  {content[language].education.university} • {content[language].education.period}
                </p>
                <ul className="space-y-3">
                  {content[language].education.details.map((detail: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 text-center text-sm text-gray-500 pb-4 space-y-1">
            <p>Built with 💻 by Vibe Code</p>
            <p>Last updated: {LAST_UPDATED}</p>
          </footer>
        </div>
      </div>
  );
}