import AboutSection from '@/components/about/AboutSection'
import AboutSectionV2 from '@/components/about/AboutSectionV2'
import AboutSectionV3 from '@/components/about/AboutSectionV3'
import CaseStudiesSection from '@/components/CaseStudies/CaseStudiesSection'
import ProjectsSectionV2 from '@/components/CaseStudies/ProjectsSectionV2'
import ProjectsSectionV3 from '@/components/CaseStudies/ProjectsSectionV3'
import ContactSection from '@/components/contact/ContactSection'
import ContactSectionV2 from '@/components/contact/ContactSectionV2'
import ContactSectionV3 from '@/components/contact/ContactSectionV3'
import Footer from '@/components/footer/Footer'
import FooterV2 from '@/components/footer/FooterV2'
import FooterV3 from '@/components/footer/FooterV3'
import Hero from '@/components/hero/Hero'
import HeroV2 from '@/components/hero/HeroV2'
import HeroV3 from '@/components/hero/HeroV3'
import Navbar from '@/components/navbar/navbar'
import NavbarV2 from '@/components/navbar/NavbarV2'
import NavbarV3 from '@/components/navbar/NavbarV3'
import Services from '@/components/services/Services'
import ServicesV2 from '@/components/services/ServicesV2'
import ServicesSectionV3 from '@/components/services/ServiceV3'
import React from 'react'

function page() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <NavbarV2 /> */}
      <NavbarV3 />

      <Hero />
      <HeroV2 />
      <HeroV3 />

      <AboutSection />
      <AboutSectionV2 />
      <AboutSectionV3 />

      <Services />
      <ServicesV2 />
      <ServicesSectionV3 />

      <CaseStudiesSection />
      <ProjectsSectionV2 />
      <ProjectsSectionV3 />

      <ContactSection />
      <ContactSectionV2 />
      <ContactSectionV3 />

      <Footer />
      <FooterV2 />
      <FooterV3 />
    </>
  )
}

export default page