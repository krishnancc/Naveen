import { Alert, Button, FormHelperText, Grid, OutlinedInput, Snackbar, Stack, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';

const ContactForm = () => {
  const form = useRef();

  const [successMessage, setSuccessMessage] = useState('');
  const [open, setOpen] = useState(!!successMessage);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const sendEmail = (values, resetForm) => {
    console.log('values', values)

    emailjs
      .sendForm('service_99hnsm8', 'template_u1p3alc', form.current, 's3BoPQCF4VK98BFjH',
      )
      .then(
        () => {
          // console.log('SUCCESS!');
          setSuccessMessage('Thankyou😊 I appreciate your interest and will respond promptly.');
          resetForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (successMessage) {
      setOpen(true);
    }
  }, [successMessage]);

  return (
    <Grid pl={2} pr={2} pb={2} pt={2}>
      <Typography variant='h4' justifyContent='start'>
        Send us a message🚀
      </Typography>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({

          name: Yup.string().max(32).required('Do not leave empty'),
          email: Yup.string().matches(emailRegex, 'Invalid email address').max(64).required('Do not leave empty'),
          message: Yup.string().max(280).required('Do not leave empty'),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
          try {
            sendEmail(values, resetForm);
            setStatus({ success: true });
            setSubmitting(false);
            console.log(values)
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form ref={form} noValidate onSubmit={handleSubmit}>

            <Stack spacing={1} pt={2}>
              <OutlinedInput
                id="name"
                type="text"
                value={values.name}
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Name"
                fullWidth
                error={Boolean(touched.name && errors.name)}
                sx={{
                  borderRadius: '10px',
                  color: '#000',
                  fontSize: '24px',
                  fontWeight: 400,
                  height: '53px',
                }}
              />
              {touched.name && errors.name && (
                <FormHelperText error sx={{ color: 'red' }}>
                  {errors.name}
                </FormHelperText>
              )}
            </Stack>

            <Stack spacing={1} pt={2}>
              <OutlinedInput
                id="email"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Email"
                fullWidth
                autoComplete="off"
                error={Boolean(touched.email && errors.email)}
                sx={{
                  borderRadius: '10px',
                  color: '#000',
                  fontSize: '24px',
                  fontWeight: 400,
                  height: '53px',
                }}
              />
              {touched.email && errors.email && (
                <FormHelperText error sx={{ color: 'red' }}>
                  {errors.email}
                </FormHelperText>
              )}
            </Stack>

            <Stack spacing={1} pt={2}>
              <OutlinedInput
                aria-label="minimum height"
                minRows={4}
                id="message"
                value={values.message}
                name="message"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Message"
                sx={{
                  borderRadius: '10px',
                  color: '#000',
                  fontSize: '24px',
                  fontWeight: 400,
                  height: '63px',
                }}
                error={Boolean(touched.message && errors.message)}
              />
              {touched.message && errors.message && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.message}
                </FormHelperText>
              )}
            </Stack>

            <Stack pt={3}>
              <Button variant='sendbutton' type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
            </Stack>
          </form>
        )}
      </Formik>
      <Snackbar open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default ContactForm;
