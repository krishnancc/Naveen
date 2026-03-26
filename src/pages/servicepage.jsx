import { Card, Grid, Stack, Typography } from '@mui/material';
import React from 'react';

const ServicePage = () => {
  return (
    <>
      <Grid
        pt={{ xs: 6, sm: 8, md: 8, lg: 8 }}
        pb={{ xs: 6, sm: 8, md: 8, lg: 8 }}
      >
        <Grid item md={8} sm={12} xs={12} lg={8}
          sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
          pl={{ xs: 4, sm: 8, md: 8, lg: 16 }}
          pr={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        >
          <Typography variant='h3'>
            Services
          </Typography>
          <br />
          <br />

          <Grid container spacing={8}>
            <Grid item xs={12} sm={6} md={6} lg={6} >
              <Stack spacing={3}>
                <Card style={{ background: 'linear-gradient(to right, #002E8C, #0051F7)', padding: '24px', height: '222px', width: '100%' }} >
                  <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} spacing={2}>
                    <Typography variant='h6' color="#F5F5F5">
                      Static website
                    </Typography>
                    <Typography variant='body1' color="#F5F5F5">
                      A static website can be built by creating HTML pages and publishing them to a web server. It serves as an informative platform for businesses and individuals, showcasing essential details through pages like Home, About Us, Services, Gallery, and Contact Us with a feedback form.
                    </Typography>
                  </Stack>
                </Card>
                <Card style={{ background: 'linear-gradient(to right, #002E8C, #0051F7)', padding: '24px', height: '222px', width: '100%' }}>
                  <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} spacing={2}>
                    <Typography variant='h6' color="#F5F5F5">
                      Responsive website
                    </Typography>
                    <Typography variant='body1' color="#F5F5F5">
                      I offer responsive website design services. I create visually appealing and user-friendly interfaces that adapt flawlessly to various devices. My goal is to provide an exceptional browsing experience for visitors, showcasing my skills and projects effectively.
                    </Typography>
                  </Stack>
                </Card>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} sx={{ position: "relative", }} >
              <Stack spacing={3}>
                <Card style={{ background: 'linear-gradient(to right, #002E8C, #0051F7)', padding: '24px', height: '222px', width: '100%' }} >
                  <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} spacing={2} >
                    <Typography variant='h6' color="#F5F5F5">
                      Web hosting
                    </Typography>
                    <Typography variant='body1' color="#F5F5F5">
                      Shared hosting is a budget-friendly option where multiple website owners share a server. It's ideal for beginners or small businesses seeking affordable hosting, although it may have limitations in terms of performance and resources.
                    </Typography>
                  </Stack>
                </Card>
                <Card style={{ background: 'linear-gradient(to right, #002E8C, #0051F7)', padding: '24px', height: '222px', width: '100%' }} >
                  <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} spacing={2} >
                    <Typography variant='h6' color="#F5F5F5">
                      UI/UX Design
                    </Typography>
                    <Typography variant='body1' color="#F5F5F5">
                      I provide comprehensive UI/UX design services, creating visually appealing and intuitive interfaces that enhance user experiences                  </Typography>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default ServicePage;
