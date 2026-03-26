import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Card, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import ContactForm from './contactform';
const Contactpage = () => {
  return (
    <Grid item md={8} sm={12} xs={12} lg={8}
      pt={{ xs: 6, sm: 8, md: 8, lg: 8 }}
      pb={{ xs: 22, sm: 22, md: 22, lg: 22 }}

    >
      <Typography variant='h3' sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
        Contact Me
      </Typography>

      <Grid container spacing={12}
        pl={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        pr={{ xs: 4, sm: 8, md: 8, lg: 16 }}
        pt={2}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} >
          <Grid container spacing={6} pt={12} pl={{ xs: 8, sm: 0, md: 0, lg: 0 }} justifyContent={{ xs: 'start', sm: 'center', md: 'center', lg: 'center' }}>
            <Stack>
              <Stack sx={{ textAlign: 'start', justifyContent: 'start', alignItems: 'start' }}>
                <Typography variant='h3'>
                  Let's chat.
                </Typography>
                <Typography variant='h3'>
                  Tell me about your <br /> Project.
                </Typography>

                <Typography variant='body3'>
                  Let's create something together🤟
                </Typography>
              </Stack>
              <Stack pl={4} pt={4} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
                <Card>
                  <Stack direction='row' p={2} justifyContent='center' alignItems='center' textAlign='center' spacing={2}>
                    <MailOutlineOutlinedIcon  ></MailOutlineOutlinedIcon>
                    <Stack justifyContent='start' alignItems='start' textAlign='start'>
                      <Typography>
                        Mail me at
                      </Typography>
                      <Typography>
                        <a href="mailto:krishnannavaneetha76@gmail.com" target="_blank" rel="noreferrer">
                          krishnannavaneetha76@gmail.com
                        </a>
                      </Typography>
                    </Stack>
                  </Stack>
                </Card>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6} pr={2}>
          <Card >
            <ContactForm />
          </Card>
        </Grid>

      </Grid>
    </Grid>
  )
}

export default Contactpage
