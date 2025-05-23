import { Metadata } from "next";
import ProfileCard from "./components/home/profilecard";
import WorkExperience from "./components/home/workexperience";
import RecentProject from "./components/home/recentProject";
import { InterfaceProfile } from "./interfaces/profile";
import { InterfaceWorkExperience } from "./interfaces/work";
import { FaBuilding } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react"
import type { AppProps } from 'next/app';
import { FaBuildingUn } from "react-icons/fa6";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME || "My Site"} | Home`,
  description: "My Portfolio",
};


const profiles: InterfaceProfile = {
  name: "Ari Riko Prasetya",
  title: "Android Developer",
  description: "Android Developer with 2 years of experience creating user-friendly and high-performance mobile applications. Passionate about innovation and delivering impactful solutions.",
  email: "rikoarik@gmail.com",
  image: "/assets/images/me.png",
};

const works: InterfaceWorkExperience[] = [
  {
    startDate: "Mey 2022",
    endDate: "Present",
    company: "Freelance(self-employed)",
    position: "Android Developer",
    Icon: FaBuilding,
  },
  {
    startDate: "Jan 2025",
    endDate: "Present",
    company: "PT. FOKUS TEKNOLOGI PEMBAYARAN",
    position: "Mobile Developer",
    Icon: FaBuildingUn,
  },

];

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
      <ProfileCard profiles={profiles} />
      <WorkExperience works={works} />
      <div className="rounded-2xl bg-white p-4 shadow dark:bg-black dark:shadow-dark">
        <RecentProject />
      </div>
    </main>
  );
}

