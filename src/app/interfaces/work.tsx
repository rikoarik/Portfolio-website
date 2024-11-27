import { IconType } from "react-icons"; 

export interface InterfaceWorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  Icon: IconType; // Tipe yang benar untuk properti Icon
}

export interface WorkExperienceProps {
  works: InterfaceWorkExperience[];
}
