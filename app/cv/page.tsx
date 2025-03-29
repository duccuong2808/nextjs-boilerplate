'use client';
import PasswordProtection from '../components/PasswordProtection';
import { useState } from 'react';
import { styles } from '../styles/common';

// Add type for language at the top of the file
type Language = 'en' | 'vi';

export default function CV() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

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
          { skill: "React", level: "90%" },
          { skill: "Next.js", level: "85%" },
          { skill: "TypeScript", level: "80%" },
          { skill: "Tailwind CSS", level: "85%" }
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
      bio: "Lập trình viên Frontend với 5 năm kinh nghiệm, chuyên về React, Next.js và TypeScript. Tôi luôn tận tâm trong việc tạo ra giao diện người dùng trực quan và tối ưu hiệu suất web, đồng thời tìm kiếm những thách thức mới để phát triển kỹ năng và đóng góp vào các dự án đột phá.",
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
            description: "Dẫn dắt phát triển bảng điều khiển sản phẩm chính của công ty, cải thiện tương tác người dùng lên 35%"
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
          { skill: "React", level: "90%" },
          { skill: "Next.js", level: "85%" },
          { skill: "TypeScript", level: "80%" },
          { skill: "Tailwind CSS", level: "85%" }
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
    <PasswordProtection>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {/* Language Switcher */}
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-md transition-colors ${
              language === 'en'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('vi')}
            className={`px-3 py-1 rounded-md transition-colors ${
              language === 'vi'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Tiếng Việt
          </button>
        </div>

        <div className={styles.container}>
          {/* Profile Section */}
          <section className={styles.section}>
            <img
              src="https://placehold.co/150x150/EEE/31343C?text=Your+Photo&font=Roboto"
              alt="Profile Photo"
              className="rounded-full mx-auto mb-4 shadow-lg"
              width="150"
              height="150"
            />
            <h1 className={`text-3xl ${styles.text.primary} mb-2 text-center font-bold`}>
              {content[language].name}
            </h1>
            <h2 className={`text-xl ${styles.text.secondary} mb-4 text-center`}>
              {content[language].role}
            </h2>
            <p className={`text-lg ${styles.text.body} max-w-3xl mx-auto text-center`}>
              {content[language].bio}
            </p>
          </section>

          {/* Work Experience */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{content[language].sections.workExperience}</h2>
            <div className="space-y-6">
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{content[language].experience.title}</h3>
                <p className={styles.cardSubtitle}>
                  {content[language].experience.company} - {content[language].experience.period}
                </p>
                <ul className={styles.list}>
                  {content[language].experience.achievements.map((achievement: { title: string; description: string }, index: number) => (
                    <li key={index}>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {achievement.title}:
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{content[language].sections.featuredProjects}</h2>
            <div className={styles.gridContainer}>
              {content[language].projects
                .slice(0, showAllProjects ? content[language].projects.length : 1)
                .map((project: { title: string; description: string; technologies: string; role: string }, index: number) => (
                  <div key={index} className={styles.card}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardSubtitle}>{project.description}</p>
                    <p className={styles.cardSubtitle}>
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {content[language].sections.technologies}:{' '}
                      </span>
                      {project.technologies}
                    </p>
                    <ul className={styles.list}>
                      <li>
                        <span className="font-semibold text-gray-700 dark:text-gray-300">
                          {content[language].sections.role}:{' '}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">{project.role}</span>
                      </li>
                    </ul>
                  </div>
                ))}
            </div>

            {content[language].projects.length > 1 && (
              <div className="text-center mt-8">
                <button 
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-2"
                  onClick={() => setShowAllProjects(!showAllProjects)}
                >
                  {showAllProjects ? content[language].sections.showLess : content[language].sections.showMore}
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
            <h2 className={styles.sectionTitle}>{content[language].sections.skills}</h2>
            <div className={styles.gridContainer}>
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {content[language].sections.technicalSkills}
                </h3>
                <div className="space-y-3">
                  {content[language].skills.technical.map((item: { skill: string; level: string }, index: number) => (
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
                  {content[language].sections.softSkills}
                </h3>
                <ul className="space-y-2">
                  {content[language].skills.soft.map((skill: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{content[language].sections.education}</h2>
            <div className={styles.card}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {content[language].education.degree}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {content[language].education.university} • {content[language].education.period}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {content[language].education.details.map((detail: string, index: number) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PasswordProtection>
  );
}