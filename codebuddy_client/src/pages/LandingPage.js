import './LandingPage.scss';
import Header from '../components/Header';
import SectionAbout from '../components/landingPage/SectionAbout';
import SectionAccordion from '../components/landingPage/SectionAccordion';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <SectionAccordion />
      <SectionAbout />
      <Footer />
    </>
  );
};

export default LandingPage;
