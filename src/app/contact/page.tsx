import { Metadata } from "next";
import MyContact from "../contact";

export const metadata: Metadata = {
  title: "Contact | Arik Riko Prasetya",
  description: "Professional contact of Arik Riko Prasetya, Android Developer",
};

export default function Contact() {
  return (
    <main>
      <MyContact />
    </main>
  );
}

