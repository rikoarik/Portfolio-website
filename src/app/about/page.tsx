import { Metadata } from "next";
import { FaLightbulb, FaProjectDiagram, FaRocket } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About | Arik Riko Prasetya",
  description: "Discover more about Arik Riko Prasetya's journey as an Android Developer.",
};

export default function About() {
  return (
    <div className="rounded-2xl bg-white shadow dark:bg-black dark:shadow-dark p-8">
      <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">About Me</h1>

      <div className="space-y-12">
        {/* My Journey Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4 dark:text-white">My Journey</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in tech started at Universitas Trunojoyo Madura, where I earned a bachelor's degree in 
              Information Systems. Over the past 2+ years, I've worked as a freelancer, focusing on Android 
              Native Development. I specialize in creating intuitive and impactful applications using Kotlin and Java.
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="rounded-lg bg-gradient-to-r from-green-400 to-blue-500 p-6 text-white shadow-lg">
              <p className="text-xl font-medium">"Technology is not just a tool; it's an enabler to solve problems and improve lives."</p>
              <span className="block mt-4 text-right font-semibold">- Arik Riko Prasetya</span>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-center dark:text-white">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
              <FaLightbulb className="text-4xl text-blue-500 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold dark:text-white">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Continuously learning and embracing new technologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
              <FaProjectDiagram className="text-4xl text-green-500 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold dark:text-white">Collaboration</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Building meaningful connections and working closely with clients to achieve project goals.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
              <FaRocket className="text-4xl text-red-500 dark:text-red-400 mb-4" />
              <h3 className="text-xl font-semibold dark:text-white">Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Striving for quality and delivering solutions that exceed expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Notable Projects Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-center dark:text-white">Notable Projects</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Throughout my career, I’ve developed applications such as HR management systems and 
            user-centric mobile apps. Each project has enriched my understanding of solving real-world challenges 
            with technology.
          </p>
        </section>

        {/* Looking Forward Section */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Looking Forward</h2>
          <p className="text-lg leading-relaxed">
            As I continue my journey, I aim to collaborate with visionary teams and clients to craft innovative and 
            scalable Android applications. Let’s work together to make technology work for everyone!
          </p>
        </section>
      </div>
    </div>
  );
}
