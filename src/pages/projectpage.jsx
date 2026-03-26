import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import Link from '@mui/material/Link';

const projects = [
  {
    title: "Gravitus Exchange Platform",
    url: "https://gravitus.io/",
    display: "gravitus.io",
    tech: ["React.js", "Material UI", "REST APIs"],
    color: "primary",
    points: [
      "Crypto trading platform with dynamic UI and real-time data updates",
      "Scalable frontend architecture with reusable components and responsive layout",
      "Implemented responsive UI for seamless experience across devices"
    ],
  },
  {
    title: "Karp Technologies Website",
    url: "https://karptechnologies.com/",
    display: "karptechnologies.com",
    tech: ["Next.js", "Material UI"],
    color: "primary",
    points: [
      "Corporate website with modern UI/UX design",
      "Reusable components for better scalability and maintainability",
    ],
  },
  {
    title: "Camsurvo Platform",
    url: "https://camsurvo.com/",
    display: "camsurvo.com",
    tech: ["React.js", "Material UI"],
    color: "primary",
    points: [
      "Responsive frontend features with optimized component structure",
      "Improved UI performance and usability across multiple devices",
    ],
  },
  {
    title: "SRAM Landing Page",
    url: "https://my.sram.stagtest.cloudapps.asia/",
    display: "my.sram.stagtest.cloudapps.asia",
    tech: ["HTML5", "CSS3", "Laravel"],
    color: "primary",
    points: [
      "Developed a landing page using HTML, CSS, and Laravel framework",
      "Designed responsive UI ensuring compatibility across devices",
      " Focused on clean layout and user-friendly design"
    ],
  },
];

const ProjectPage = () => {
  return (
    <>
      <Grid
        pt={{ xs: 6, sm: 6, md: 6, lg: 6 }}
        pb={{ xs: 6, sm: 8, md: 8, lg: 8 }}
      >
        <Grid item md={8} sm={12} xs={12} lg={8}
          sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
          pl={{ xs: 4, sm: 8, md: 8, lg: 16 }}
          pr={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        >
          <Typography variant='h3'>
            Projects
          </Typography>
        </Grid>

        <Grid
          container
          spacing={2}
          pt={4}
          pl={{ xs: 4, sm: 8, md: 8, lg: 16 }}
          pr={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        >
          {projects.map((p) => (
            <Grid item xs={12} sm={6} key={p.title}>
              <Box
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  p: 2.5,
                  height: "100%",
                }}
              >
                <Typography fontSize={16} fontWeight={600}>{p.title}</Typography>
                <Link href={p.url} target="_blank" fontSize={13} underline="hover">
                  {p.display}
                </Link>

                {/* Tech chips */}
                <Stack direction="row" flexWrap="wrap" gap={0.8} mt={1} mb={1.5}>
                  {p.tech.map((t) => (
                    <Chip key={t} label={t} size="small" color={p.color} variant="outlined"
                      sx={{ fontSize: 12, height: 24 }} />
                  ))}
                </Stack>

                {/* Bullet points */}
                <Stack spacing={0.8}>
                  {p.points.map((pt, i) => (
                    <Stack key={i} direction="row" spacing={1.5} alignItems="center">
                      <Box sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: "text.disabled", mt: "8px", flexShrink: 0 }} />
                      <Typography fontSize={14} color="text.secondary" lineHeight={1.6}>{pt}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectPage;