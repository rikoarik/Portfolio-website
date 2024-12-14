 import React from "react";
 import ClientImageSlider from './components/ClientImageSlider';

 const androidProjects: Project[] = [
   {
     id: 1,
     title: "HRM Apps",
     description: "An HRM application for PT. Emahawangsa, designed to streamline HR processes for staff and personnel. Features include face recognition for selfie attendance, leave application, and overtime requests.",
     images: ["/assets/images/hrm/hrm-1.jpg",

     ],
     techStack: ["Kotlin", "MVVM", "Retrofit", "RESTful API", "Face Recognition SDK"],
     githubLink: "https://bujpmahawangsa.com/download/",
   },
   {
     id: 2,
     title: "Explore Bojonegoro",
     description: "A tourism application showcasing the beauty of Bojonegoro, featuring information on attractions, cultural heritage, and local events to boost regional tourism.",
     images: ["/assets/images/explorebojonegoro/explore-1.jpg",  
      "/assets/images/explorebojonegoro/explore-2.jpg",
      "/assets/images/explorebojonegoro/explore-3.jpg",
      "/assets/images/explorebojonegoro/explore-4.jpg",
      "/assets/images/explorebojonegoro/explore-5.jpg",

     ],
     techStack: ["Kotlin", "Retrofit", "Firebase", "Weather API", "Mapbox API"],
     githubLink: "https://drive.google.com/file/d/12G5ILc3uSPd0rlM_Z87_IkXDkD7m5Xg3/view?usp=drivesdk",
   },
   
  
   
 ];

 const myProjects: React.FC = () => {
   return (
     <>
       <div className="rounded-2xl bg-white shadow dark:bg-black dark:shadow-dark">
  <div className="rounded-full ms-8 mr-8 px-4 xl:px-0 py-6 mx-auto">
    <div className="max-w-3xl mb-8 lg:mb-12">
      <h2 className="font-semibold text-2xl md:text-4xl md:leading-tight">
        My Recent Projects
      </h2>
      <p className="mt-1 text-neutral-400">
        Explore our Android development projects that showcase creativity, innovation, and technical expertise.
      </p>
    </div>
    <div className="w-full h-full">
      {androidProjects.map((project, index) => (
        <div
          key={project.id}
          className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-8"
        >
          {index % 2 === 0 ? (
            <>
              <div className="aspect-h-9 lg:col-start-1">
                <ClientImageSlider images={project.images} title={project.title} />
              </div>
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">
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
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Download Apk
                  </a>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="lg:col-start-1">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md text-sm">
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
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Download Apk
                  </a>
                )}
              </div>
              <div className="aspect-h-9 lg:col-start-2">
                <ClientImageSlider images={project.images} title={project.title} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

     </>
   );
 };

 export default myProjects;