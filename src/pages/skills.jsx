import { TabContext, TabPanel } from '@mui/lab';
import { Box, Button, Chip, Divider, Grid, Stack, Typography } from '@mui/material';
import LinearProgress, {
  linearProgressClasses
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useState } from 'react';
// import css from '../images/css.svg';
// import html from '../images/html.svg';
// import javascript from '../images/javascript.svg';
// import mui from '../images/mui.svg';
// import reactjs from '../images/reactjs.svg';
// import Marquee from 'react-fast-marquee';

const SkillsPage = () => {

  const BorderLinearProgress = styled(LinearProgress)(({ theme, backgroundcolor }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 300 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: backgroundcolor,
    }
  }));

  //Tabs
  const [value, setValue] = useState('1');

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  //
  const calculateDuration = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months };
  };

  const ExperienceDuration = ({ startDate }) => {
    const { years, months } = calculateDuration(startDate);

    return (
      <Typography variant='body1' sx={{ color: '#5E5757' }}>
        {`${startDate} - Present ( ${months} months)`}
      </Typography>
    );
  };

  const ExperienceDurationGravitus = ({ startDate }) => {
    const { years, months } = calculateDuration(startDate);

    return (
      <Typography variant='body1' sx={{ color: '#5E5757' }}>
        {`${startDate} - Oct 2025 (${years} years  )`}
      </Typography>
    );
  };
  const startDateGravitus = 'Nov 2021';
  const startDate = 'Nov 2025';

  const languages = ["HTML5", "CSS3", "JavaScript (ES6+)"];
  const frameworks = ["React.js", "Next.js", "Material UI", "Bootstrap"];
  const tools = ["Git", "Figma", "Postman", "VS Code"];

  const coreSkills = [
    { label: "React hooks", sub: "useState · useEffect" },
    { label: "REST API", sub: "Axios" },
    { label: "Component architecture", sub: "Reusable · Scalable" },
    { label: "Responsive design", sub: "Mobile-first · Fluid layouts" },
    { label: "Performance", sub: "Code splitting · Lazy load" },
    { label: "Version control", sub: "Git · GitHub" },
  ];

  const chipColors = {
    languages: { bgcolor: "#e3f0fc", color: "#1565c0", border: "#bbdefb" },
    frameworks: { bgcolor: "#ede7f6", color: "#4527a0", border: "#d1c4e9" },
    tools: { bgcolor: "#e0f2f1", color: "#00695c", border: "#b2dfdb" },
  };

  function SkillChip({ label, colors }) {
    return (
      <Chip

        label={label}
        size="small"
        sx={{
          fontSize: 14,
          height: 30,
          bgcolor: colors.bgcolor,
          color: colors.color,
          border: `1px solid ${colors.border}`,
          borderRadius: "999px",
          fontWeight: 500,
          fontSize: 12,
        }}
      />
    );
  }
  return (
    <>
      <Grid item md={8} sm={12} xs={12} lg={8}
        pt={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        pb={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
      >
        <Typography variant='h3'>
          Skills & Experience
        </Typography>
      </Grid>
      <Grid container spacing={12}
        pl={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        pr={{ xs: 4, sm: 8, md: 8, lg: 16 }}>
        <Grid item xs={12} sm={6} md={6} lg={6} >
          <Typography variant='h4'>
            Skills
          </Typography>
          <Stack spacing={3} pt={4}>
            <Box>
              <Typography fontSize={14} fontWeight={500} color="text.secondary" mb={1} display="block">
                Languages
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {languages.map(l => <SkillChip key={l} label={l} colors={chipColors.languages} />)}
              </Stack>
            </Box>

            {/* Frameworks */}
            <Box>
              <Typography variant="caption" color="text.secondary" fontWeight={500} mb={1} display="block">
                Frameworks &amp; libraries
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {frameworks.map(f => <SkillChip key={f} label={f} colors={chipColors.frameworks} />)}
              </Stack>
            </Box>

            {/* Tools */}
            <Box>
              <Typography variant="caption" color="text.secondary" fontWeight={500} mb={1} display="block">
                Tools
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {tools.map(t => <SkillChip key={t} label={t} colors={chipColors.tools} />)}
              </Stack>
            </Box>

            <Divider />

            {/* Core skills */}
            <Box>
              <Typography variant="caption" color="text.secondary" fontWeight={500} mb={1.5} display="block">
                Core skills
              </Typography>
              <Grid container spacing={1.5}>
                {coreSkills.map(skill => (
                  <Grid item xs={12} sm={6} md={4} key={skill.label}>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "divider",
                        borderRadius: 2,
                        px: 2,
                        py: 1.5,
                      }}
                    >
                      <Typography fontSize={15} fontWeight={600}>{skill.label}</Typography>
                      <Typography fontSize={13} color="text.secondary">{skill.sub}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} >
          <TabContext value={value}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Stack direction="row" width="100%">
                <Box
                  sx={{
                    border: '2px solid #6244C5',
                    borderRadius: '5px',
                    display: 'flex',
                    width: '100%'
                  }}
                >
                  <Button
                    disableRipple
                    onClick={() => changeValue('1')}
                    sx={{
                      fontSize: value === '1' ? '16px' : '16px',
                      fontWeight: value === '1' ? '500' : '500',
                      color:
                        value === '1' ? 'white' : 'black',
                      backgroundColor:
                        value === '1'
                          ? '#6244C5'
                          : '#F1F1F1',
                      borderRadius: value === '1' ? '0px 5px 5px 0px' : '5px 0 0 5px',
                      minHeight: '48px !important',
                      width: '50%',
                      padding: '0',
                      '&:hover': {
                        backgroundColor:
                          value === '1'
                            ? '#6244C5'
                            : '#F1F1F1',
                      }
                    }}
                  >
                    Experience
                  </Button>
                  <Button
                    disableRipple
                    onClick={() => changeValue('2')}
                    sx={{
                      fontSize: value === '2' ? '16px' : '16px',
                      fontWeight: value === '2' ? '500' : '500',
                      color:
                        value === '2' ? 'white' : 'black',
                      backgroundColor:
                        value === '2'
                          ? '#6244C5'
                          : '#F1F1F1',
                      borderRadius: value === '2' ? '5px 0px 0px 5px' : '0 5px 5px 0',
                      minHeight: '48px !important',
                      width: '50%',
                      padding: '0',
                      '&:hover': {
                        backgroundColor:
                          value === '2'
                            ? '#6244C5'
                            : '#F1F1F1',
                      }
                    }}
                  >
                    Education
                  </Button>
                </Box>
              </Stack>
            </Stack>

            <TabPanel value="1" sx={{ padding: '0px' }}>
              <Stack pt={4} spacing={1}>
                <Typography variant="h6">
                  FRONT-END DEVELOPER
                </Typography>

                <Typography variant="body1" color="text.secondary">
                  Karp Technologies, Vellore
                </Typography>

                <ExperienceDuration startDate={startDate} />

                <Stack spacing={1}  >
                  {[
                    "Developed responsive web applications using React.js and Next.js for corporate and SaaS platforms",
                    "Converted Figma designs into pixel-perfect UI with high responsiveness across devices",
                    "Improved application performance using component reusability and optimized rendering",
                    "Collaborated with designers and backend teams to deliver scalable UI solutions",
                  ].map((point, i) => (
                    <Stack key={i} direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          bgcolor: "text.disabled",
                          mt: "9px",
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2" fontSize={15} lineHeight={1.7}>
                        {point}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
                <Divider sx={{ my: 1 }} />
              </Stack>

              <Stack pt={2} spacing={1}>
                <Typography variant='h6'>
                  FRONT-END DEVELOPER <span style={{ fontSize: '16px', color: '#5E5757', fontWeight: '200' }}>
                  </span>
                </Typography>
                <Typography variant='body1'>
                  Gravitus IT Services and Private limited,  Salem.
                </Typography>
                <ExperienceDurationGravitus startDate={startDateGravitus} />
                <Stack spacing={1}  >
                  {[
                    "Built and maintained a cryptocurrency exchange platform with real-time data integration",
                    "Developed reusable UI components, reducing development time across multiple modules",
                    "Integrated REST APIs for trading data, user accounts, and transactions",
                    "Implemented client-side routing and optimized data flow for better performance",
                    "Participated in Agile development cycles, ensuring timely feature delivery"
                  ].map((point, i) => (
                    <Stack key={i} direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          bgcolor: "text.disabled",
                          mt: "9px",
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2" fontSize={15} lineHeight={1.7}>
                        {point}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel value="2" sx={{ padding: '0px' }}>
              <Stack spacing={2} pt={4}>
                <Stack spacing={0.2}>
                  <Typography variant='body1' sx={{ color: '#000' }} >
                    B.E.Mechanical | Park College of Engineering and Technology, Coimbatore.
                  </Typography>
                  <Typography variant='body1' sx={{ color: '#5E5757', }}>
                    2017 - 2021
                  </Typography>
                  <Typography variant='body1' sx={{ color: '#5E5757', }} >
                    76.6% (CGPA : 7.63)
                  </Typography>
                </Stack>

                <Stack spacing={0.2}>
                  <Typography variant='body1' sx={{ color: '#000' }} >
                    HSC | Sree VidhyaSagar Higher Secondary School, Sankagiri.
                  </Typography>
                  <Typography variant='body1' sx={{ color: '#5E5757', }}>
                    2016 - 2017
                  </Typography>
                  <Typography variant='body1' sx={{ color: '#5E5757', }} >
                    74.5%
                  </Typography>
                </Stack>

                <Stack spacing={0.2}>
                  <Typography variant='body1' sx={{ color: '#000' }} >
                    SSLC | SPM Matric Higher Secondary School, Tiruchengode.
                  </Typography>
                  <Typography variant='body1' sx={{ color: '#5E5757', }}>
                    2014 - 2015
                  </Typography>
                  <Typography variant='body1' sx={{ color: '#5E5757', }} >
                    74.5%
                  </Typography>
                </Stack>

                <Stack spacing={0.2}>
                  <Typography variant='body1' sx={{ color: '#000' }} >
                    Diploma in Microsoftoffice | Computer Software Collage, Sankagiri.
                  </Typography>
                  <Typography variant='body1' sx={{ color: '#5E5757', }}>
                    2015
                  </Typography>
                  <Typography variant='body1' sx={{ color: '#5E5757', }} >
                    A-Grade
                  </Typography>
                </Stack>
              </Stack>

            </TabPanel>
          </TabContext>
        </Grid>
      </Grid >
      <Grid
        pt={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        pb={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        display={{ xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', }}
      >
        {/* <Marquee speed={95} >
          <Stack spacing={{ xs: 6, sm: 8, md: 8, lg: 14 }} direction='row' pr={{ xs: 4, sm: 6, md: 6, lg: 0 }}>
            <img src={html} alt='html' style={{ width: "100%", height: '50%' }} />
            <img src={css} alt='css' style={{ width: "100%", height: '50%' }} />
            <img src={javascript} alt='javascript' style={{ width: "100%", height: '50%' }} />
            <img src={reactjs} alt='reactjs' style={{ width: "100%", height: '50%' }} />
            <img src={mui} alt='mui' style={{ width: "100%", height: '50%' }} />
          </Stack>
        </Marquee> */}
      </Grid>
    </ >
  )
}

export default SkillsPage;
