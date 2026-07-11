import React from 'react'
import AboutSectionV3 from './components/AboutSectionV3'
import ClientPartnerCarousel from './components/ClientPartnerCarousel'
import ContactSectionV1 from './components/ContactSectionV1'
import FooterV1 from './components/FooterV1'
import HeroV2 from './components/HeroV2'
import NavbarV3 from './components/NavbarV3'
import ProjectsSectionV2 from './components/ProjectsSectionV2'
import ServicesSectionV3 from './components/ServicesSectionV3'
import TechStackSection from './components/TechStackSection'

function page() {
  return (
    <>
      <NavbarV3 />

      <HeroV2 />

      <div id="about" className="scroll-mt-14">
        <AboutSectionV3 />
      </div>


      <div id="partners" className="scroll-mt-14">
        <ClientPartnerCarousel />
      </div>

      <div id="services" className="scroll-mt-14">
        <ServicesSectionV3 />
      </div>

      <div id="tech-stack" className="scroll-mt-14">
        <TechStackSection />
      </div>

      <div id="product" className="scroll-mt-14">
        <ProjectsSectionV2 />
      </div>

      <div id="contact" className="scroll-mt-14">
        <ContactSectionV1 />
      </div>

      <FooterV1 />
    </>
  )
}

export default page
