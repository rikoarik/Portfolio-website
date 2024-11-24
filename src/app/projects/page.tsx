import { Metadata } from "next";
import MyProjects from "../project";

export const metadata: Metadata = {
    title: `${process.env.NEXT_PUBLIC_APP_NAME || "My Site"} | Portfolio`,
    description: "My Portfolio",
};

export default function Projects() {
    return (
      <main>
            <MyProjects />
      </main>
    );
  }