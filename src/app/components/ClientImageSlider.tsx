"use client";

import React from "react";
import dynamic from 'next/dynamic';

const DynamicImageSlider = dynamic(() => import('./ImageSlider'), {
  loading: () => <p>Loading...</p>,
});

interface ClientImageSliderProps {
  images: string[];
  title: string;
}

const ClientImageSlider: React.FC<ClientImageSliderProps> = ({ images, title }) => {
  return <DynamicImageSlider images={images} title={title} />;
};

export default ClientImageSlider;