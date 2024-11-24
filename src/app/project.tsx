 import React from "react";
 import ClientImageSlider from './components/ClientImageSlider';

 const androidProjects: Project[] = [
   {
     id: 1,
     title: "Weather App",
     description: "A simple weather application that provides real-time weather information for any location.",
     images: ["/images/weather-app-1.png", "/images/weather-app-2.png", "/images/weather-app-3.png"],
     techStack: ["Kotlin", "MVVM", "Retrofit", "Room"],
     playStoreLink: "https://play.google.com/store/apps/details?id=com.example.weatherapp",
   },
   {
     id: 2,
     title: "Weather App",
     description: "A simple weather application that provides real-time weather information for any location.",
     images: ["/images/weather-app-1.png", "/images/weather-app-2.png", "/images/weather-app-3.png"],
     techStack: ["Kotlin", "MVVM", "Retrofit", "Room"],
     playStoreLink: "https://play.google.com/store/apps/details?id=com.example.weatherapp",
   },
   {
     id: 3,
     title: "Weather App",
     description: "A simple weather application that provides real-time weather information for any location.",
     images: ["/images/weather-app-1.png", "/images/weather-app-2.png", "/images/weather-app-3.png"],
     techStack: ["Kotlin", "MVVM", "Retrofit", "Room"],
     playStoreLink: "https://play.google.com/store/apps/details?id=com.example.weatherapp",
   },
 
 ];

 const myProjects: React.FC = () => {
   return (
     <>
       <div className="rounded-2xl bg-white shadow dark:bg-black dark:shadow-dark">
         <div className="rounded-full ms-16 mr-16 px-4 xl:px-0 py-10 mx-auto">
           <div className="max-w-3xl mb-10 lg:mb-14">
             <h2 className="font-semibold text-2xl md:text-4xl md:leading-tight">My Recent Projects</h2>
             <p className="mt-1 text-neutral-400">
               Explore our Android development projects that showcase creativity, innovation, and technical expertise.
             </p>
           </div>
           <div className="space-y-16">
             {androidProjects.map((project, index) => (
               <div
                 key={project.id}
                 className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10"
               >
                 {index % 2 === 0 ? (
                   <>
                     <div className="aspect-w-16 aspect-h-9 lg:col-start-1">
                       <ClientImageSlider images={project.images} title={project.title} />
                     </div>
                     <div className="lg:col-start-2">
                       {/* ... (project details) ... */}
                     </div>
                   </>
                 ) : (
                   <>
                     <div className="lg:col-start-1">
                       {/* ... (project details) ... */}
                     </div>
                     <div className="aspect-w-16 aspect-h-9 lg:col-start-2">
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

