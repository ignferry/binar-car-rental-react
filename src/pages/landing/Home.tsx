import Cover from '../../components/landing/Cover';
import Faq from '../../components/landing/Faq';
import Jumbotron from '../../components/landing/Jumbotron';
import Services from '../../components/landing/Services';
import Testimonials from '../../components/landing/Testimonials';
import WhyUs from '../../components/landing/WhyUs';

import '../../styles/landing.css';

export default function LandingHomePage() {
  return (
    <>
      <Cover showButton={true} />
      <Services />
      <WhyUs />
      <Testimonials />
      <Jumbotron />
      <Faq />
    </>
  );
}
