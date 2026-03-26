import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './footer.css';

import { Grid, Stack, Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div> */}

      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://github.com/krishnancc" target="_blank" rel="noreferrer">
            <GitHubIcon name="logo-mail"></GitHubIcon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.linkedin.com/in/navaneetha-krishnan-p-7b95b122b/" target="_blank" rel="noreferrer">
            <LinkedInIcon name="logo-linkedin"></LinkedInIcon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://wa.me/918508275959" target="_blank" rel="noreferrer">
            <WhatsAppIcon name="logo-whatsapp"></WhatsAppIcon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="mailto:krishnannavaneetha76@gmail.com" target="_blank" rel="noreferrer">
            <MailOutlineIcon name="logo-mail"></MailOutlineIcon>
          </a>
        </li>
      </ul>

      <Grid item md={12} sm={12} xs={12} lg={12}
        sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
        pl={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        pr={{ xs: 4, sm: 8, md: 8, lg: 16 }}
      >
        <Grid lg={6} xs={12} md={6}>
          <Stack direction={{ lg: 'row', sm: 'row', md: 'row', xs: 'column' }} spacing={{ lg: 6, sm: 2, md: 5, xs: 2 }} justifyContent='center'>
            <ScrollLink
              to="home"
              spy
              smooth
              offset={-100}
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography variant='body1' >
                Home
              </Typography>
            </ScrollLink>

            <ScrollLink
              to="about"
              spy
              smooth
              offset={-100}
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography variant='body1'  >
                About
              </Typography>
            </ScrollLink>

            <ScrollLink
              to="service"
              spy
              smooth
              offset={-100}
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography variant='body1'  >
                Services
              </Typography>
            </ScrollLink>

            <ScrollLink
              to="skills"
              spy
              smooth
              offset={-100}
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography variant='body1' >
                Skills
              </Typography>
            </ScrollLink>

            <ScrollLink
              to="project"
              spy
              smooth
              offset={-100}
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography variant='body1' >
                Projects
              </Typography>
            </ScrollLink>

            <ScrollLink
              to="contact"
              spy
              smooth
              offset={-100}
              duration={500} style={{ textDecoration: 'none', cursor: 'pointer' }} >
              <Typography variant='body1'>
                Contact
              </Typography>
            </ScrollLink>
          </Stack>
        </Grid>
      </Grid>

      <Stack pt={2} justifyContent='center'>
        <Typography>
          &copy;2026 NavaneethaKrishnan | All Rights Reserved
        </Typography>
      </Stack>
    </footer>
  );
};

export default Footer;
