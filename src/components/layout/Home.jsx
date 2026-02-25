import React from 'react'
import HeroSection from '../sections/HeroSection';
import { Underline } from '../ui/Underline';
import AboutSection from '../sections/AboutSection';
import BenefitSection from '../sections/BenefitSection';
import CountriesSection from '../sections/CountriesSection';
import RegistrationFormSection from '../sections/RegistrationFormSection';

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <Underline />

      <AboutSection />
      <Underline />

      <BenefitSection />
      <Underline />

      <CountriesSection />
      <Underline />

      <RegistrationFormSection />
    </div>
  );
}
