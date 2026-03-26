import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Ellipse1 from '../images/Ellipse1.svg';
import Homepageimage from '../images/Homepage_img.jpg';


const HomePage = () => {
  return (
    <>
      <Grid container pt={8} >
        <Grid item lg={6} sm={6} md={6} >
          <Stack spacing={5} pl={{ lg: 18, md: 6, sm: 4, xs: 4, }} pt={{ lg: 20, md: 0, sm: 0, xs: 0, }}>
            <Typography variant='subbody'>
              Hi👋, I’m Navaneethakrishnan Palanisamy
            </Typography>
            <div>
              <Typography variant="h1" component="span">
                F
              </Typography>
              <Typography variant="title1" component="span">
                RONT &nbsp;
              </Typography>

              <Typography variant="h1" component="span">
                E
              </Typography>
              <Typography variant="title1" component="span">
                ND &nbsp;
              </Typography>
              <Typography variant="h1" component="span">
                D
              </Typography>
              <Typography variant="title1" component="span">
                EVELOPER
              </Typography>
            </div>
          </Stack>
          {/* 
          <Stack pt={{ lg: 4, md: 0, sm: 0, xs: 0, }}>
            <Box
              sx={{
                width: 120, // Half the width to create a half-circle
                height: 400,
                borderRadius: '0 100px 100px 0', // Only round the top-right and bottom-right corners
                background: 'radial-gradient(circle at left, #FFAA7B 18%, #FFFEFF 46%)',
              }}
            />
          </Stack> */}
          <Stack pt={{ lg: 14, md: 18, sm: 4, xs: 0, }} display={{ xs: 'none', md: 'block', sm: 'block', lg: 'block' }}>
            <img src={Ellipse1} alt='Ellipse1' style={{ width: '25%', alignSelf: 'flex-start' }} />
          </Stack>
        </Grid>
        <Grid
          item
          lg={6}
          sm={6}
          md={6}
          xs={12}
          justifyContent='flex-end'
          alignItems='flex-end'
          style={{ height: '100%', display: 'flex' }}
        >
          <img src={Homepageimage} alt='Navanee' style={{ width: '100%', alignSelf: 'flex-end' }} />
        </Grid>
      </Grid>
    </>

  )
}

export default HomePage
