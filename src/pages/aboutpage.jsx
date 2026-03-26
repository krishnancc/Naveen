import { Grid, Typography } from '@mui/material';
import Ellipse2 from '../images/Ellipse2.svg';
import Ellipse3 from '../images/Ellipse3.svg';


const AboutPage = () => {
  return (
    <>
      <Grid
        pt={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        pb={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        justifyContent={{ lg: 'space-between', md: 'space-between', sm: 'space-between', xs: 'space-between' }}
        display={{ xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', }}
        flexDirection={{ xs: 'column', sm: 'column', md: 'row', lg: 'row' }}
      // sx={{ backgroundColor: 'grey.200' }}
      >
        <Grid item md={2} lg={2}
          textAlign='center'
          display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
          <img src={Ellipse2} alt='Ellipse2' style={{ width: "100%" }} />
        </Grid>

        <Grid item md={8} sm={12} xs={12} lg={8}
          sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
          pl={{ xs: 4, sm: 8, md: 8, lg: 16 }}
          pr={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        >
          <Typography variant='h3'>
            About Me
          </Typography>
          <br />
          <Typography variant='body3'  >
            👋 I'm Navaneethakrishnan Palanisamy, a dedicated Frontend Developer with 4+ years of experience building scalable, high-performance web
            applications using React.js and Next.js. Specialized in developing responsive UI, integrating
            REST APIs, and optimizing performance. Proven experience in delivering production-level
            applications including cryptocurrency platforms, corporate websites.
            {/* I'm Navaneethakrishnan.P, a dedicated front-end developer. Using HTML, CSS, and JavaScript, I craft captivating web experiences that expertly bridge design and usability. I have a speciality in creating user-friendly interfaces and responsive design. always changing in the dynamic realm of web development. */}
          </Typography>
        </Grid>

        <Grid item md={2} lg={2}
          textAlign='end'
          display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }}
          justifyContent='flex-end'
        >
          <img src={Ellipse3} alt='Ellipse3' style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </ >
  )
}

export default AboutPage;
