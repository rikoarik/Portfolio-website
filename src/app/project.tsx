import React from "react";
import ClientImageSlider from './components/ClientImageSlider';

const androidProjects: Project[] = [
  {
    id: 1,
    title: "HRM Apps",
    description: `
      HRM Apps is a comprehensive Human Resource Management application developed for PT. Emahawangsa. 
      It is designed to simplify HR processes and improve efficiency across the organization. 
      Key features include:
      - A state-of-the-art face recognition system for accurate and secure selfie-based attendance.
      - An intuitive leave management system that allows employees to easily submit and track leave applications.
      - A seamless overtime request feature that helps employees and managers streamline approvals.
      This application is built with a strong emphasis on security, user experience, and scalability, ensuring that it meets the dynamic needs of modern organizations.`,
    images: ["/assets/images/hrm/hrm-1.jpg"],
    techStack: ["Kotlin", "MVVM", "Retrofit", "RESTful API", "Face Recognition SDK"],
    githubLink: "https://bujpmahawangsa.com/download/",
  },
  {
    id: 2,
    title: "Explore Bojonegoro",
    description: `
      Explore Bojonegoro is a tourism application that aims to showcase the hidden gems of Bojonegoro to a broader audience. 
      This app is your personal guide to explore:
      - Stunning tourist destinations, including natural wonders, cultural heritage sites, and more.
      - Comprehensive event listings to keep locals and visitors informed about ongoing festivals and activities.
      - Local cuisine and specialties, providing a taste of Bojonegoro's vibrant culinary culture.
      This app leverages advanced APIs such as Mapbox for navigation and Weather API for real-time weather updates, ensuring a seamless and enriched travel experience.`,
    images: [
      "/assets/images/explorebojonegoro/explore-1.jpg",  
      "/assets/images/explorebojonegoro/explore-2.jpg",
      "/assets/images/explorebojonegoro/explore-3.jpg",
      "/assets/images/explorebojonegoro/explore-4.jpg",
      "/assets/images/explorebojonegoro/explore-5.jpg",
    ],
    techStack: ["Kotlin", "Retrofit", "Firebase", "Weather API", "Mapbox API"],
    githubLink: "https://drive.google.com/file/d/12G5ILc3uSPd0rlM_Z87_IkXDkD7m5Xg3/view?usp=drivesdk",
  },
];

const MyProjects: React.FC = () => {
  return (
    <div className="rounded-2xl bg-white shadow-md dark:bg-black dark:shadow-lg p-6 lg:p-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-2">
          My Recent Projects
        </h2>
        <p className="text-neutral-500 dark:text-neutral-300">
          Explore Android projects showcasing creativity, innovation, and technical expertise.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-16">
        {androidProjects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col gap-8 lg:gap-12 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center`}
          >
            {/* Image Section */}
            <div className="flex-1 w-full max-w-md lg:max-w-full">
              <ClientImageSlider
                images={project.images}
                title={project.title}
              />
            </div>

            {/* Description Section */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-line">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded transition-shadow duration-300 hover:shadow-lg"
                >
                  Download APK
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
