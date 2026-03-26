// import Footer from './Footer';
import { Toolbar } from '@mui/material';
import AboutPage from './aboutpage';
import Contactpage from './contact';
import Footer from './footer';
import HomePage from './homepage';
import ProjectPage from './projectpage';
import ServicePage from './servicepage';
import SkillsPage from './skills';
const Index = () => {
  return (
    <>
      {/* <div id='home'>
        <Toolbar></Toolbar>
        <Counter />
      </div> */}
      <div id='home'>
        <Toolbar></Toolbar>
        <HomePage />
      </div>
      <div id='about'>
        <AboutPage />
      </div>
      <div id='service'>
        <ServicePage />
      </div>
      <div id='skills'>
        <SkillsPage />
      </div>
      <div id='project'>
        <ProjectPage />
      </div>
      <div id='contact'>
        <Contactpage />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Index;
