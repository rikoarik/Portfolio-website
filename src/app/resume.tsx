"use client";

import { FaDownload } from "react-icons/fa";
import { useState } from "react";

const MyResume: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<"ENG" | "ID">("ENG");

    const resumeFileIds = {
        ENG: "1SX61Ghwb2HZvSVUCuOOWRy731I_DXqrR", 
        ID: "1qYfm3yYRzB85WhLaeuqa-v3-ut4GhfLO", 
      };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedLanguage(event.target.value as "ENG" | "ID");
    };
  return (
    <div className="container mx-auto px-4 ">
      <div className="max-w-4xl mx-auto rounded-2xl bg-white shadow dark:bg-black dark:shadow-dark overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center items-center mb-6">        
            <a
              href={`https://drive.google.com/uc?id=${resumeFileIds[selectedLanguage]}&export=download`}
              download
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <FaDownload className="mr-2" />
              <span>Download PDF</span>
            </a>
          </div>

          <div className="mb-6">
            <label htmlFor="language" className="mr-4 text-lg text-gray-800 dark:text-white">Select Language:</label>
            <select
              id="language"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded"
            >
              <option value="ENG">English</option>
              <option value="ID">Bahasa Indonesia</option>
            </select>
          </div>

    
          <div style={{ height: "700px" }}>
            {/* Embed PDF from Google Drive */}
            <iframe
              src={`https://drive.google.com/file/d/${resumeFileIds[selectedLanguage]}/preview`}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Resume"
            ></iframe>
          </div>
          <div className="flex justify-center items-center m-6">        
            <a
              href={`https://drive.google.com/uc?id=${resumeFileIds[selectedLanguage]}&export=download`}
              download
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <FaDownload className="mr-2" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResume;