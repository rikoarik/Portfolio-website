import { Metadata } from "next";
import MyResume from "../resume";

export const metadata: Metadata = {
  title: "Resume | Arik Riko Prasetya",
  description: "Professional resume of Arik Riko Prasetya, Android Developer",
};

export default function Resume() {
  return (
    <main>
      <MyResume />
    </main>
  );
}

